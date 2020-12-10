import { Encryption } from "../../utility";
import { Response, Request } from "express";
import { User, AuthenticatedRequest, ResponseObject } from "../../interfaces";
import { UsersDB } from "../../models/user";


class AdminController {
    constructor() {

    }

    public static loginByEmailPassword = async (req: AuthenticatedRequest, res: Response) => {
        try {
            const buf = Buffer.from(req.token, 'base64');
            const credential = buf.toString().split(':');
            if (credential.length !== 2) {
                return res.status(400).send();
            }
            const email = credential[0];
            const password = credential[1];
            if (!email || !password) {
                return res.status(400).send();
            }

            const user: User = await UsersDB.getUserByEmail(email);
            
            if (!user) {
                res.status(403).send({
                    Message: `You dont have account with us!`,
                    Data: null,
                });
            } else if (user && !Encryption.decryptPassword(password, user.password)) {
                res.status(401).send({
                    Message: `incorrect password! You can try RESET PASSWORD option if you forgot your paswword.`,
                    Data: null,
                });
            } else {
                delete user.password;
                delete user.createdOn;
                let token: any;
                try {
                    token = await Encryption.createToken(user);
                } catch (err) {
                    return res.status(500).end();
                }
                res.setHeader("Access-Control-Expose-Headers", "Authorization");
                res.setHeader('Authorization', token);
                res.send(user);
            }

        } catch (error) {
            return res.status(500).end();
        }
    }
}

const LoginByEmailPassword = AdminController.loginByEmailPassword;

export {
    LoginByEmailPassword,
}
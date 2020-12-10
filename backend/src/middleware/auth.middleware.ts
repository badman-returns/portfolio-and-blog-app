import { NextFunction, Response, Request } from "express";
import { header } from "express-validator";
import { ValidationResponder } from "./validation.response";

class AuthMiddleware {
  constructor() {

  }

  public static loginByEmailPassword = async (req: Request, res: Response, next: NextFunction) => {
    next();
  }
}

const LoginByEmailPassword = AuthMiddleware.loginByEmailPassword;

export {
  LoginByEmailPassword,
};
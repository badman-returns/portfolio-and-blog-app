import * as express from "express";
import multer from 'multer';
import { LoadAuthorizedUser, ValidateBasicAuth, ValidateBearerToken, LoadAuthorization } from "../../middleware/common.middleware";
import { GetStorage } from "../../utility/uploader";
import { LoginByEmailPassword } from "./admin.controller";
import { GetAllBlogs, InsertBlog, UpdateBlog, DeleteBlog } from "./controller/admin.blog.controller";
import { InsertJob } from "./controller/admin.job.controller";

class AdminRouting {
    public router: express.Router;
    private upload = multer({ storage: GetStorage() });
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes() {

        //  Authentication Routes
        this.router.get('/authentication', [...ValidateBasicAuth, ...LoadAuthorization], LoginByEmailPassword);

        // Admin Blog Routes
        this.router.post('/blog', [...ValidateBearerToken, ...LoadAuthorization, ...LoadAuthorizedUser], this.upload.array('blog', 5), InsertBlog);
        this.router.post('/blog/:id', [...ValidateBearerToken, ...LoadAuthorization, ...LoadAuthorizedUser], this.upload.array('blog', 5), UpdateBlog);
        this.router.delete('/blog/:id', [...ValidateBearerToken, ...LoadAuthorization, ...LoadAuthorizedUser], DeleteBlog);

        // Admin Job routes
        this.router.post('/jobs', [...ValidateBearerToken, ...LoadAuthorization, ...LoadAuthorizedUser], this.upload.array('jobs'), InsertJob);
    }

}
const AdminRouter = new AdminRouting().router;
export { AdminRouter };

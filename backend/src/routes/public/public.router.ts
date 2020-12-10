import * as express from "express";
import { GetAllBlogs, GetBlogByID } from "../admin/controller/admin.blog.controller";

class Public {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes() {
        
        // Blog Routes
        this.router.get('/blog', [], GetAllBlogs);
        this.router.get('/blog/:id', [], GetBlogByID);
    }
}

const PublicRouter = new Public().router;
export { PublicRouter };

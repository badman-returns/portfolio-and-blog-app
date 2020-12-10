import db from '../models/db';
import { Blog } from '../interfaces';
import { Tables } from '../configs/table.config';



export class BlogDB {
    constructor() {

    }

    public static getAllBlogs(): Promise<Array<Blog>> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT ${Tables.BLOG}.id, ${Tables.BLOG}.title, ${Tables.BLOG}.description, ${Tables.USER}.name as createdBy, ${Tables.BLOG}.createdOn
                      FROM ${Tables.BLOG}
                      INNER JOIN ${Tables.USER} ON ${Tables.USER}.id = ${Tables.BLOG}.createdBy
                      ORDER BY ${Tables.BLOG}.createdOn DESC
                      `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(res.map((result: any) => Object.assign({}, result)));
                }
                return resolve(null);
            })
        })
    }

    public static getBlogById(blogId: string): Promise<Blog> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT ${Tables.BLOG}.id, ${Tables.BLOG}.title, ${Tables.BLOG}.description, ${Tables.BLOG}.content, ${Tables.USER}.name as createdBy, ${Tables.BLOG}.createdOn
                      FROM ${Tables.BLOG}
                      INNER JOIN ${Tables.USER} ON ${Tables.USER}.id = ${Tables.BLOG}.createdBy WHERE ${Tables.BLOG}.id=${blogId}
                      `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(res.map((result: any) => Object.assign({}, result))[0]);
                }
                return resolve(null);
            });
        });
    }

    public static insertBlog(title: string, description: string, content: string, createdBy: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${Tables.BLOG} (title, description, content, createdBy) VALUES ('${title}', '${description}', '${content}', '${createdBy}')`;
            db.query(query, (err, res) => {
                if (err) {
                    reject(err);
                }
                return resolve(res.insertId)
            })
        })
    }

    public static updateBlog(blogId: string, title: string, description: string, content: string, updatedBy: string): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE ${Tables.BLOG} SET title=?, description=?, content=?, updatedBy=? WHERE id=${blogId}`, [title, description, content, updatedBy], (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    }

    public static deleteBlog(blogId: string): Promise<Blog> {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM ${Tables.BLOG} WHERE ${Tables.BLOG}.id=${blogId}`, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(null);
            })
        })
    }
}
import db from '../models/db';
import { Job } from '../interfaces';
import { Tables } from '../configs/table.config';

export class JobDB {
    constructor() {

    }

    public static insertJob(title: string, skill: string, responsibility: string, createdBy: string, duration?: number | string, salary?: string | number, perks?: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${Tables.JOBS} (title, skill, responsibility, duration, salary, perks, createdBy) VALUES ('${title}', '${skill}', '${responsibility}', '${duration}', '${salary}', '${perks}', ${createdBy})`;
            db.query(query, (err, res) => {
                if (err) {
                    reject(err);
                }
                return resolve(res.insertId)
            });
        });
    }

    public static getJobs(): Promise<Array<Job>> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${Tables.JOBS}`,(err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(res.map((result: any) => Object.assign({}, result)));
                }
                return resolve(null);
            });
        });
    }
}
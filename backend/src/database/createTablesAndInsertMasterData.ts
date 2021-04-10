import db from '../models/db';
import { Encryption } from '../utility/encryption';
import { Tables } from '../configs/table.config';

export default class CreateTablesAndInsertMasterData {

    constructor() {

    }

    // USER TABLE
    private static createUserTable(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            db.query(`CREATE TABLE IF NOT EXISTS ${Tables.USER}(
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                role VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password VARCHAR(255) NOT NULL,
                createdOn DATETIME default current_timestamp,
                PRIMARY KEY(id),
                CONSTRAINT contacts_unique UNIQUE (email))
                `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }

    private static createSuperAdminUser(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const user = {
                name: "Trishnangshu Goswami",
                role: "SUPER_ADMIN",
                email: "admin@admin.com",
                password: Encryption.encryptPassword(process.env.ADMIN_DEFAULT_PASSWORD),
            };

            db.query(`INSERT IGNORE INTO ${Tables.USER} SET ?`, user, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }

    public static async createUserTableAndSuperAdmin() {
        try {
            await CreateTablesAndInsertMasterData.createUserTable();
        } catch (e) {
            console.error('CREATE USER TABLE', e);
        }

        try {
            await CreateTablesAndInsertMasterData.createSuperAdminUser();
        } catch (e) {
            console.error('CREATE SUPER ADMIN', e);
        }
    }


    // BLOG TABLE
    public static async createBlogTable() {
        return new Promise((resolve, reject) => {
            // db.query(`DROP TABLE ${Tables.BLOG}`);
            db.query(`CREATE TABLE IF NOT EXISTS ${Tables.BLOG} (
                id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id),
                title VARCHAR(100) NOT NULL,
                description VARCHAR(255) NOT NULL,
                content text NOT NULL,
                state BOOLEAN,
                createdBy VARCHAR(255) NOT NULL,
                updatedBy VARCHAR(255),
                createdOn DATETIME NOT NULL DEFAULT current_timestamp,                
                updatedOn DATETIME NOT NULL DEFAULT current_timestamp,
                CONSTRAINT contacts_unique UNIQUE (id))
                `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }


    // FILES TABLE
    public static async createFilesTable() {
        return new Promise((resolve, reject) => {
            // db.query(`DROP TABLE ${Tables.FILES}`);
            db.query(`CREATE TABLE IF NOT EXISTS ${Tables.FILES} (
                id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id),
                fieldname VARCHAR(255),
                referenceId INT,
                originalname VARCHAR(255),
                encoding VARCHAR(255),
                mimetype VARCHAR(255),
                destination VARCHAR(255),
                filename VARCHAR(255),
                path VARCHAR(255),
                size INT,
                createdBy VARCHAR(255),
                updatedBy VARCHAR(255),
                createdOn DATETIME NOT NULL DEFAULT current_timestamp,                
                updatedOn DATETIME NOT NULL DEFAULT current_timestamp,
                CONSTRAINT contacts_unique UNIQUE (id))
                `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }

    public static async createJobTable() {
        return new Promise((resolve, reject) => {
            db.query(`CREATE TABLE IF NOT EXISTS ${Tables.JOBS} (
                id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id),
                title VARCHAR(50) NOT NULL,
                skill text NOT NULL,
                responsibility text NOT NULL,
                duration VARCHAR(20),
                salary VARCHAR(30),
                perks text,
                createdBy VARCHAR(255) NOT NULL,
                updatedBy VARCHAR(255),
                createdOn DATETIME NOT NULL DEFAULT current_timestamp,
                updatedOn DATETIME DEFAULT current_timestamp,
                CONSTRAINT contacts_unique UNIQUE (id))
                `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }
}



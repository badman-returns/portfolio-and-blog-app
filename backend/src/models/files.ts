import db from './db';
import { UploadFile } from '../interfaces';
import { Tables } from '../configs/table.config';

export class FilesDB {
    constructor() {

    }

    public static insertFiles(files: Array<UploadFile>): Promise<any> {
        return new Promise((resolve, reject) => {
            let keys: Array<any>;
            let values;
            const allFiles: any = files;
            keys = Object.keys(allFiles[0]);
            values = allFiles.map((file: any) => keys.map(key => file[key]));

            const query = `INSERT INTO ${Tables.FILES} (${keys.join(',')}) VALUES ?`;

            db.query(query, [values], (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(null);
            });
        });
    }

    public static getFiles(fieldname: string, referenceId: string): Promise<Array<UploadFile>> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${Tables.FILES} WHERE fieldname=${fieldname} AND referenceId='${referenceId}`, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(res.map((result:any) => Object.assign({}, result)));
                }
                return resolve(null);
            });
        });
    }

    public static updateFiles(files: Array<UploadFile>, fileID?: string | number, referenceId?: string | number, fieldname?:string): Promise<string> {
        return new Promise((resolve, reject) => {
            let keys: Array<any>;
            let values;
            const allFiles: any = files;
            keys = Object.keys(files[0]);
            values = allFiles.map((file:any) => keys.map(key => file[key]));
            let query;
            if (fileID) {
                query = `UPDATE ${Tables.FILES} SET ${keys.join('=?,').concat('=?')} WHERE id=${fileID}`;
            } else {
                query = `UPDATE ${Tables.FILES} SET ${keys.join('=?,').concat('=?')} WHERE referenceId=${referenceId} AND fieldname='${fieldname}'`;
            }
            db.query(query, values[0], (err, res) => {
               if (err) {
                   return reject(err);
               }
               return resolve(null);
           });
        });
    }

    public static deleteFile(id: string): Promise<Array<UploadFile>> {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM ${Tables.FILES} WHERE id='${id}'`, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(null);
            }); 
        });
    }
}
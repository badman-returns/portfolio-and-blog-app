import * as mysql from "mysql";
const dotenv = require('dotenv');
dotenv.config();

const Connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default Connection;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv = require('dotenv');
dotenv.config();
const app = new app_1.default();
console.log(`Creating MySql Tables, Loading ...`);
app.createDefaultTables().then(() => {
    console.log(`All Tables created...`);
    app.listen();
}).catch((e) => {
    throw new Error(e);
});

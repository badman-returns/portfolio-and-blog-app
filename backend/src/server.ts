import App from './app';
const dotenv = require('dotenv');
dotenv.config();

const app = new App();
console.log(`Creating MySql Tables, Loading ...`);
app.createDefaultTables().then(() => {
    console.log(`All Tables created...`);
    app.listen();
}).catch((e) => {
    throw new Error(e);
})
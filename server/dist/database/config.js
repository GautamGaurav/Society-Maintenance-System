import mysql from 'mysql2';
const db = mysql.createPool({
    host: "localhost",
    database: "sms_db",
    port: 3306,
    user: 'root',
    password: "password"
});
export default db;

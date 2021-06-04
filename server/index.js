const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sql = require('mssql/msnodesqlv8')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const dbConfig = {
    server: "localhost\\SQLEXPRESS",
    database: "sms_db",
    port: 1433,
    driver: 'msnodesqlv8',
    options: {
        encrypt: false,
        trustedConnection: true
    }
};



/* Get All Users */
app.post('/api/login', (request, response) => {
    const conn = new sql.ConnectionPool(dbConfig)
    const db = new sql.Request(conn);
    const sqlQuery = "SELECT * from Users";
    console.log("Request Body ===>", request.body)

    conn.connect((error) => {
        if (error) {
            console.log(error)
            return;
        } else {
            db.query(sqlQuery, (err, result) => {
                if (error) {
                    console.log(error)
                    response.status(500).send(error);
                    return;
                } else {
                    console.log(result.recordset[0])
                    response.send(result.recordset[0]);
                    conn.close()
                }
            })
        }
    });
});

app.listen(3001, () => {
    console.log('running on port 3001')
})
const express = require('express')
const app = express()
const sql = require('mssql/msnodesqlv8')

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
app.get('/', function (req, resp) {
    var conn = new sql.ConnectionPool(dbConfig)
    var db = new sql.Request(conn);

    conn.connect(function(error){
        if(error) {
          console.log(error)
          return;
        } else {
            db.query("SELECT * from Users", function(err, res){
                if(error) {
                    console.log(error)
                    resp.status(500).send(error);
                    return;
                  } else {
                      console.log(res.recordset[0])
                      resp.send(res.recordset[0]);
                      conn.close()
                  }
            })
        }
    });
});

app.get('/login', (req, res) => {
    res.send("login")
})

app.listen(3001, () => {
    console.log('running on port 3001')
})
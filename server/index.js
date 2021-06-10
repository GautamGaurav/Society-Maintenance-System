const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require("mysql")

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createPool({
    host: "localhost",
    database: "sms_db",
    port: 3306,
    user: 'root',
    password: "password"
});


/* ------- Users --------- */
app.post('/api/login', (request, response) => {
    const sqlSelect = "SELECT * FROM users WHERE email = ? AND password = ?";
    const userName = request.body.userName;
    const password = request.body.password;
    console.log("request ===> ", request.body)
    db.query(sqlSelect, [userName, password], (err, result) => {
        if(err) {
            console.log("err ===> ", err)
            response.status(400).send({
                message: 'This is an error!'
             });
        } else if (result && result.length > 0) {
            response.send(result);
        } else {
            response.status(404 ).send({
                message: 'User not found!'
             });        
        }
    })    
});

/* ------- Owner --------- */
app.get('/api/owner', (request, response) => {
    const siteId = request.body.siteId;
    const sqlSelect = "SELECT * FROM owners WHERE siteId = ?";
    db.query(sqlSelect, [siteId], (err, result) => {
        if(err) {
            console.log("err ===> ", err)
            return response.status(400).send({
                message: 'This is an error!'
             });
        } else {
            console.log("result ===> ", result)
            response.send(result);
        }
    })    
});

app.post('/api/owners', (request, response) => {
    const sqlSelect = "SELECT * FROM owners WHERE email = ?";
    db.query(sqlSelect, ["gaurav.gautam17@gmail.com"], (err, result) => {
        if(err) {
            console.log("err ===> ", err)
            
        } else {
            console.log("result ===> ", result)
            response.send(result);
        }
    })    
});


/* ------- Builders --------- */
app.get('/api/builders', (request, response) => {
    const sqlSelect = "SELECT * FROM builders";
    db.query(sqlSelect, (err, result) => {
        if(err) {
            console.log("err ===> ", err)            
        } else {
            console.log("result ===> ", result)
            response.send(result);
        }
    })    
});

app.listen(3001, () => {
    console.log('running on port 3001')
})
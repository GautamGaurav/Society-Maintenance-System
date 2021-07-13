import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql'
import apiPath from './config.js'

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
app.post(apiPath.login, (request, response) => {
    const sqlSelect = "SELECT * FROM users WHERE email = ? AND password = ?";
    const userName = request.body.userName;
    const password = request.body.password;
    console.log("request ===> ", request.body)
    db.query(sqlSelect, [userName, password], (err, result) => {
        if (err) {
            console.log("err ===> ", err)
            response.status(400).send({
                message: 'This is an error!'
            });
        } else if (result && result.length > 0) {
            response.send(result);
        } else {
            response.status(404).send({
                message: 'User not found!'
            });
        }
    })
});

/* ------- Owner --------- */
app.get(apiPath.getOwners, (request, response) => {
    const siteId = request.body.siteId;
    const sqlSelect = "SELECT * FROM owners";
    db.query(sqlSelect, [siteId], (err, result) => {
        if (err) {
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

app.post(apiPath.getOwnerByEmail, (request, response) => {
    const sqlSelect = "SELECT * FROM owners WHERE email = ?";
    db.query(sqlSelect, ["gaurav.gautam17@gmail.com"], (err, result) => {
        if (err) {
            console.log("err ===> ", err)

        } else {
            console.log("result ===> ", result)
            response.send(result);
        }
    })
});


/* ------- Builders --------- */
app.get(apiPath.getBuilders, (request, response) => {
    const sqlSelect = "SELECT * FROM builders";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log("err ===> ", err)
        } else {
            console.log("result ===> ", result)
            response.send(result);
        }
    })
});


/* ------- Sites --------- */
app.get(apiPath.getSites, (request, response) => {
    const sqlSelect = "SELECT * FROM sites";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log("err ===> ", err)
        } else {
            console.log("result ===> ", result)
            response.send(result);
        }
    })
    
    db.on('end', () => {
        console.log("Data received!")
   });
});

app.post(apiPath.addSite, (request, response) => {
    const siteName = request.body.siteName;
    const address = request.body.address;
    const societyPresidentName = request.body.societyPresidentName;
    const builderName = request.body.builderName;
    const city = request.body.city;
    const state = request.body.state;
    const pincode = request.body.pincode;
    const sqlInsert = "INSERT INTO sites (name, address, society_president_name, builder_name, city, state, pincode) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [siteName, address, societyPresidentName, builderName, city, state, pincode], (err, result) => {
        if (err) {
            console.log("err ===> ", err)
            response.status(404).send({
                message: 'Error Processing Data!'
            });
        } else {
            response.status(200).send({
                message: siteName + ' inserted successfully!'
            });
            response.send(result);
        }
    })
});


/* ------- Owner --------- */

app.get(apiPath.getSociety, (request, response) => {
    const sqlSelect = "SELECT * FROM society";
    db.query(sqlSelect, (err, result) => {
        if (err) {
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
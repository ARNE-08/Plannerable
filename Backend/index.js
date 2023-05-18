// import { PrismaClient } from '@prisma/client';

const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require("cookie-parser");

const port = 8000;

app.use(
    cors({
        origin: ['http://localhost:5174', 'http://localhost:5173'],
        credentials: true,
    })
);

app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_1ixvld",
    password: "oRFs2kOQYisEMVo5",
    database: "lab_blank01_1i3nrsg",
});

connection.connect();
global.connection = connection;
console.log("Database is connected");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/login", require("./route/Login"));
app.post("/regis", require("./route/Register"));
app.get("/getAllTodos", require("./route/GetTodos"));

app.post("/todoadd", (req, res) => {
    // The JSON body
    const { userId } = res.locals;
    const { name, deadline, time, description } = req.body;
    const status = "not complete";

    connection.query(
        `INSERT INTO todos (user_id, name, deadline, time, description, status) 
         VALUES (?, ?, ?, ?, ?, ?)`, 
        [userId, name, deadline, time, description, status], 
        (err, rows) => {
            // Check if cannot find the data in the database then return the error
            if (err) {
                res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else {
                // Return data to the client if success
                console.log(rows);
                if (rows) {
                    res.json({
                        success: true,
                        data: {
                            message: "create success",
                        },
                    });
                }
            }
        }
    );
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
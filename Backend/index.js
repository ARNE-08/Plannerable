// import { PrismaClient } from '@prisma/client';

const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require('cors');
// const prisma = new PrismaClient();

const port = 8000;

// global.prisma = prisma;

app.use(
    cors({
        origin: ['http://localhost:5174', 'http://localhost:5173'],
        credentials: true,
    })
);

app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));

const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_1ixvld",
    password: "oRFs2kOQYisEMVo5",
    database: "lab_blank01_1i3nrsg",
});

connection.connect();

console.log("Database is connected");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/regis", (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username or email already exists in the database
    connection.query(
        `SELECT * FROM users WHERE name = ? OR email = ?`,
        [username, email],
        (err, rows) => {
            if (err) {
                // Handle the error
                res.status(500).json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else if (rows.length > 0) {
                // Return an error if the username or email already exists
                res.status(400).json({
                    success: false,
                    data: null,
                    error: "Username or email already exists",
                });
            } else {
                // Insert the new user into the database
                connection.query(
                    `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
                    [username, email, password],
                    (err, rows) => {
                        if (err) {
                            // Handle the error
                            res.status(500).json({
                                success: false,
                                data: null,
                                error: err.message,
                            });
                        } else {
                            // Return success message if the user was inserted successfully
                            res.json({
                                success: true,
                                data: {
                                    message: "User created successfully",
                                },
                            });
                        }
                    }
                );
            }
        }
    );
});

app.post('/login', (req, res) => {
    const { usernameOrEmail, password } = req.body;

    connection.query(
        'SELECT * FROM users WHERE (name = ? OR email = ?) AND (password = ?)',
        [usernameOrEmail, usernameOrEmail, password],
        (err, rows) => {
            if (err) {
                // Handle database error
                console.error(err);
                res.status(500).json({ message: 'Internal server error' });
            } else if (rows.length === 0) {
                // Handle invalid credentials
                res.status(401).json({ message: 'Invalid username or password' });
            } else {
                // Handle successful login
                const user = rows[0];
                // You could also generate a token here for session-based authentication
                res.status(200).json({
                    message: 'Login successful',
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        // Add any other fields you want to return
                    },
                });
            }
        }
    );
});

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
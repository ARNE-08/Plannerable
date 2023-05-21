var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { name, deadline, time, description } = req.body;
    const status = "not complete";

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    console.log(decoded);

    connection.query("INSERT INTO todos (user_id, name, deadline, time, description, status) VALUES (?, ?, ?, ?, ?, ?)",
        [decoded.userId, name, deadline, time, description, status],
        (err, rows) => {
            // Check if cannot find the data in the database then return the error
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            res.json({
                success: true,
                message: "To-do list has been created",
            });
        });
};

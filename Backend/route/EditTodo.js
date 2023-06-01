var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { name, deadline, time, description, id } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    // console.log(decoded);

    connection.query("UPDATE todos SET name = ?, deadline = ?, time = ?, description = ? WHERE user_id = ? AND id = ?",
        [name, deadline, time, description, decoded.userId, id],
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
                message: "To-do list has been updated",
            });
        });
};

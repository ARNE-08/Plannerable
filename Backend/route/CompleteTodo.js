const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const {id} = req.body;
    const status = "completed"
    // const { profile_picture } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    console.log(decoded);

    connection.query("UPDATE todos SET status = ? WHERE user_id = ? AND id = ?",
        [status, decoded.userId, id],
        (err, rows) => {
            if (err) {
                res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else {
                // Return data to the client if success
                if (rows) {
                    res.json({
                        success: true,
                        data: {
                            message: "update successfully",
                        },
                    });
                }
            }
        })
}
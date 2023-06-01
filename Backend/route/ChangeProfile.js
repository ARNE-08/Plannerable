const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { profile_picture } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    // console.log(decoded);

    connection.query("UPDATE users SET profile_picture = ? WHERE id = ?",
        [profile_picture, decoded.userId],
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
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { user_note } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");

    connection.query("UPDATE note SET user_note = ? WHERE user_id = ?",
        [user_note, decoded.userId],
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
                message: "Note has been updated",
            });
        });
};

const mysql = require("mysql2");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
	const { username, email, password } = req.body;
	const profile = "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg";
	const salt1 = await bcrypt.genSalt(10);
	const hash1 = await bcrypt.hash(password, salt1);

	// Check if username already exists
	var checkUsernameQuery = mysql.format("SELECT * FROM users WHERE username = ? OR email = ?", [username, email]);
	connection.query(checkUsernameQuery, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		if (rows.length > 0) {
			// Username already exists
			return res.json({
				success: false,
				data: null,
				error: "Username or email is already exists",
			});
		}

		// Username does not exist, proceed with registration
		var insertQuery = mysql.format(
			"INSERT INTO users (username, email, hashed_password, profile_picture) VALUES (?, ?, ?, ?)",
			[username, email, hash1, profile]
		);

		connection.query(insertQuery, (err, rows) => {
			if (err) {
				return res.json({
					success: false,
					data: null,
					error: err.message,
				});
			}

			res.json({
				success: true,
				message: "User has been created",
			});
		});
	});
};

const mysql = require("mysql2");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { username, email, password } = req.body;
	const profile = "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg";
	const salt1 = await bcrypt.genSalt(10);
	console.log("Salt #1: ", salt1);
	const hash1 = await bcrypt.hash(password, salt1);
	console.log("Hash #1: ", hash1);

	var sql = mysql.format(
		"INSERT INTO users (username, email, password, hashed_password, profile_picture) VALUES (?, ?, ?, ?, ?)",
		[username, email, password, hash1, profile]
	);

	connection.query(sql, (err, rows) => {
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
};

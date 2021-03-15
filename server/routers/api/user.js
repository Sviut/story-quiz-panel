const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const generateJwt = (id) => {
	return jwt.sign(
		{ id },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' },
	);
};

router.post('/login', async (req, res) => {
	const { login, password } = req.body;
	const user = await User.findOne({ username: login });
	console.log(user);
	if (!user) {
		return res.status(404).json({
			msg: 'Username is not found.',
		});
	}

	if (password !== user.password) {
		return res.status(404).json({
			msg: 'Incorrect password',
		});
	}

	const token = generateJwt(user._id);

	return res.json({ token });
});

module.exports = router;

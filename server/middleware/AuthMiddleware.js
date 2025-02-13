const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	if (req.METHODS === 'OPTIONS') {
		next();
	}

	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			return res.status(403).json({ message: 'Non authorized' });
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decoded;
		next();
	} catch (e) {
		return res.status(403).json({ message: 'Non authorized' });
	}
};

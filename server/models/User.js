const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model('User', UserSchema);

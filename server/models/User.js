const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	quizList: [{
		type: Schema.Types.ObjectId,
		ref: 'Quiz',
	}],
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model('User', UserSchema);

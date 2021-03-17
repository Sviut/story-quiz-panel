const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const QuizSchema = new Schema({
	questions: {
		type: String,
		required: true,
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('Quiz', QuizSchema);

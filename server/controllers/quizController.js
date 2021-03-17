const mongoose = require('mongoose');
const { ObjectId } = mongoose;
const QuizModel = require('../models/Quiz');
const UserModel = require('../models/User');

class QuizController {
	async create (req, res) {
		const { questions, owner } = req.body;
		const quiz = await QuizModel.create({ questions, owner });
		await UserModel.findByIdAndUpdate(owner, { $push: { quizList: quiz._id } });
		return res.json(quiz);
	}

	async getAll (req, res) {
		const quizList = await QuizModel.find({});
		return res.json(quizList);
	}

	async getOne (req, res) {
		const { id } = req.params;
		const quiz = await QuizModel.find({ _id: id });
		return res.json({ quiz });
	}
}

module.exports = new QuizController();

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

const users = require('./routers/api/user');
app.use('/api/users', users);

const start = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(process.env.PORT || 5000, () =>
			console.log('Server is running...' + process.env.PORT || 5000),
		);
	} catch (e) {
		console.log(e);
	}
};

start();

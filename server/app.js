require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routers');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

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

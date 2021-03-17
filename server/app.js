require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routers');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

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

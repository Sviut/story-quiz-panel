const Router = require('express');
const router = Router();
const userRouter = require('./userRouter');
const quizRouter = require('./quizRouter');

router.use('/user', userRouter);
router.use('/quiz', quizRouter);

module.exports = router;

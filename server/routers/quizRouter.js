const Router = require('express');
const router = Router();
const quizController = require('../controllers/quizController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.getOne);

module.exports = router;

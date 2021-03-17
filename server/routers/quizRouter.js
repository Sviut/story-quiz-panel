const Router = require('express');
const router = Router();
const quizController = require('../controllers/quizController');

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.getOne);

module.exports = router;

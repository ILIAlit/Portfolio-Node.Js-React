const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/', postController.create);

module.exports = router;
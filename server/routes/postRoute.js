const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');
const checkRole = require('../middleware/CheckRoleMiddleware');

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/',checkRole(process.env.MAIN_ROLE), postController.create);

module.exports = router;
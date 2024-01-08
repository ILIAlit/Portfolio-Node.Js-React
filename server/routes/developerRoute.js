const Router = require('express');
const router = new Router();
const developerController = require('../controllers/developerController');
const checkRole = require('../middleware/CheckRoleMiddleware');

router.get('/', developerController.get);
router.post('/',checkRole(process.env.MAIN_ROLE), developerController.create);

module.exports = router;
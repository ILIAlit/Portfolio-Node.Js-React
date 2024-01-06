const Router = require('express');
const router = new Router();
const developerController = require('../controllers/developerController');

router.get('/', developerController.get);
router.post('/', developerController.create);

module.exports = router;
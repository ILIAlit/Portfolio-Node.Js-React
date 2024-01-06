const Router = require('express');
const router = new Router();
const developerRouter = require('./developerRoute');
const postRouter = require('./postRoute');

router.use('/contact', developerRouter);
router.use('/post', postRouter);

module.exports = router;
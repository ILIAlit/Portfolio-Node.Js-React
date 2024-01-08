const Router = require('express');
const router = new Router();
const developerRouter = require('./developerRoute');
const postRouter = require('./postRoute');
const adminRouter = require('./adminRoute');

router.use('/contact', developerRouter);
router.use('/post', postRouter);
router.use('/admin', adminRouter);

module.exports = router;
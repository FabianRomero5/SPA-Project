const { Router } = require('express');

const userRouter = require('./userRouter');

const router = Router();

router.use('/usermanager', userRouter)

module.exports = router;

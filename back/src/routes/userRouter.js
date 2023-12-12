const express = require('express');
const {postUser, getAllUsers,updateUserById,deleteUserById} = require('../controllers/UserController');



const router = express.Router();

router.post('/user', postUser);
router.get('/users',  getAllUsers);
router.put('/user/:id', updateUserById);
router.delete('/user/:id',deleteUserById);



module.exports = router;
const express = require('express');
const { deleteUser, registerUser, getAllUsers } = require('../controllers/userController');
const  router = express.Router();


router.post('/register',registerUser);
router.get('/getAllUser',getAllUsers);
router.delete('/delete/:_id',deleteUser);






module.exports = router

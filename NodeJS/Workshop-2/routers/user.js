const express = require('express');
const userController = require('../controllers/user')


const router = express.Router();


// /user/register ->> controller
router.post('/register',userController.register);

// /user/get ->> controller
router.post('/get',userController.get);

// /user/update ->> controller
router.post('/update',userController.update);

// /user/delete ->> controller
router.post('/delete',userController.delete);



module.exports = router;
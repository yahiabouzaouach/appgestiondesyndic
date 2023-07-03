const express=require('express');
const router = express.Router();
const authController= require('../controllers/authController');
router.get('/register',authController.showRegister);
router.post('/register',authController.register);


router.get('/login',authController.showlogin);
router.post('/login',authController.login);

router.get('/logout',authController.logout);

router.get('/User/dashboard',authController.showdashboard);
module.exports = router
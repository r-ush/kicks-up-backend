const express=require('express')
const router = express.Router();

const getUser=require('../controllers/user.controller')

email='aarush.bhatt@gmail.com'
router.get(`/${email}`,getUser)

module.exports=router
const express=require('express')
const router = new express.Router();

const {getUser}=require('../controllers/user.controller')

id='YNaf59ZHzYRPqZAHq9I5'
router.get(`/${id}`,getUser)

module.exports=router
const express=require('express')
const router = new express.Router();

const {getUser,addNewUser}=require('../controllers/user.controller')

id='YNaf59ZHzYRPqZAHq9I5'
router.get('/:id',getUser)
router.post('/addUser',addNewUser)

module.exports=router
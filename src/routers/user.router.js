const express=require('express')
const router = new express.Router();

const {getUser,addNewUser}=require('../controllers/user.controller')

router.get('/:id',getUser)
router.post('/addUser',addNewUser)

module.exports=router
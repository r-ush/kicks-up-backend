const express=require('express')
const router = new express.Router();

const {getUser,addUserctrl,deleteUserCtrl}=require('../controllers/user.controller')

router.get('/:id',getUser)
router.post('/addUser',addUserctrl)
router.delete('/:id',deleteUserCtrl)

module.exports=router
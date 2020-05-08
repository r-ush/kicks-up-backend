const express=require('express')
const router = new express.Router();

const {getUser,addUserctrl,deleteUserCtrl,addToCartCtrl}=require('../controllers/user.controller')

router.get('/:id',getUser)
router.post('/addUser',addUserctrl)
router.delete('/:id',deleteUserCtrl)
router.post('/:id/:prodid',addToCartCtrl)

module.exports=router
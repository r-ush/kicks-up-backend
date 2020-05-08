const express=require('express')
const router = new express.Router();

const {getUser,addUserCtrl,deleteUserCtrl,addToCartCtrl,removeFromCartCtrl}=require('../controllers/user.controller')

router.get('/:id',getUser)
router.post('/addUser',addUserCtrl)
router.delete('/:id',deleteUserCtrl)
router.post('/:id/:prodid',addToCartCtrl)
router.delete('/:id/:prodid',removeFromCartCtrl)

module.exports=router
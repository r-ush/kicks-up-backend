const express=require('express')
const router = new express.Router();

const {getAllProductsCtrl,getProductsByFieldCtrl,getProductsByPriceCtrl}=require('../controllers/product.controller')

router.get('/all',getAllProductsCtrl)
// router.get('/addUser',getProductsByFieldCtrl)
// router.get('/:id/:prodid',getProductsByPriceCtrl)

module.exports=router
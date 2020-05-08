const express=require('express')
const router = new express.Router();

const {getAllProductsCtrl,getProductCtrl,getProductsByFieldCtrl,getProductsByPriceCtrl}=require('../controllers/product.controller')

router.get('/all',getAllProductsCtrl)
router.get('/:id',getProductCtrl)
router.post('/filterbyfield',getProductsByFieldCtrl)
// router.get('/:id/:prodid',getProductsByPriceCtrl)

module.exports=router
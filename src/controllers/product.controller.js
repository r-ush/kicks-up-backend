const { getAllProducts,getProductsByField,getProductsByPrice} = require('../firebase/products.firebase')

const getAllProductsCtrl=async(req,res)=>{
	let data=await getAllProducts()
	res.send({
		data
	})
}

const getProductsByFieldCtrl=async(req, res) => {
	var name  = req.body.name
	var email  = req.body.email
		data=await addUser(name,email)
		res.send(data)
}

const getProductsByPriceCtrl=async(req, res) => {
	var name  = req.body.name
	var email  = req.body.email
		data=await addUser(name,email)
		res.send(data)
}

module.exports={
	getAllProductsCtrl,
	getProductsByFieldCtrl,
	getProductsByPriceCtrl
}
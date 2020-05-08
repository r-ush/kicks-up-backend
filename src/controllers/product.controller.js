const { getAllProducts,getProductsByField,getProductsByPrice,getProduct} = require('../firebase/products.firebase')

const getAllProductsCtrl=async(req,res)=>{
	let data=await getAllProducts()
	res.send({
		data
	})
}

const getProductCtrl=async(req,res)=>{
	const { id } = req.params;
	console.log(id)
	try{
		let data=await getProduct(id)
		console.log(data)
		res.json({
			data
		})
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}

const getProductsByFieldCtrl=async(req, res) => {
	var field  = req.body.field
	var value  = req.body.value
	try{
		let data=await getProductsByField(field,value)
		res.send(data)
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}

const getProductsByPriceCtrl=async(req, res) => {
	// var name  = req.body.name
	// var email  = req.body.email
	// 	data=await addUser(name,email)
	// 	res.send(data)
}

module.exports={
	getAllProductsCtrl,
	getProductsByFieldCtrl,
	getProductsByPriceCtrl,
	getProductCtrl
}
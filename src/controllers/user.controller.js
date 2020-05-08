const {getUserById,addUser,deleteUser,addToCart,removeFromCart} = require('../firebase/user.firebase')

const getUser=async(req,res)=>{
	const { id } = req.params;
	try{
		let data=await getUserById(id)
		res.json({
			data
		})
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}

const addUserCtrl=async(req, res) => {
	var name  = req.body.name
	var email  = req.body.email
	try{
		data=await addUser(name,email)
		res.send(data)
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}

const deleteUserCtrl=async(req, res) => {
	const { id } = req.params;
	try{
		data=await deleteUser(id)
		res.send(data)
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}

const addToCartCtrl=async(req,res)=>{
	const { id,prodid } = req.params;
	try{
		data=await addToCart(id,prodid)
		res.send(data)
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}

const removeFromCartCtrl=async(req,res)=>{
	const { id,prodid } = req.params;
	try{
		data=await removeFromCart(id,prodid)
		res.send(data)
	}catch(rejectedValue){
		res.status(404).send(rejectedValue)
	}
}
module.exports={getUser,addUserCtrl,deleteUserCtrl,addToCartCtrl,removeFromCartCtrl}
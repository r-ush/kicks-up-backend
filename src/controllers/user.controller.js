const {getUserById,addUser,deleteUser,addToCart,removeFromCart} = require('../firebase/user.firebase')

const getUser=async(req,res)=>{
	const { id } = req.params;
	let data=await getUserById(id)
	// console.log(data)
	res.json({
		data
	})
}

const addUserCtrl=async(req, res) => {
	var name  = req.body.name
	var email  = req.body.email
		data=await addUser(name,email)
		res.send(data)
}

const deleteUserCtrl=async(req, res) => {
	const { id } = req.params;
		data=await deleteUser(id)
		res.send(data)
}

const addToCartCtrl=async(req,res)=>{
	const { id,prodid } = req.params;
	try{
		data=await addToCart(id,prodid)
		res.send(data)
	}catch(rejectedValue){
		res.send(rejectedValue)
	}
}

const removeFromCartCtrl=async(req,res)=>{
	const { id,prodid } = req.params;
	try{
		data=await removeFromCart(id,prodid)
		res.send(data)
	}catch(rejectedValue){
		res.send(rejectedValue)
	}
}
module.exports={getUser,addUserCtrl,deleteUserCtrl,addToCartCtrl,removeFromCartCtrl}
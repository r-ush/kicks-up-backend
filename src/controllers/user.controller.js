const express=require('express')
const {getUserById,addUser,deleteUser,addToCart,removeFromCart} = require('../firebase/user.firebase')


const getUser=async(req,res)=>{
	let data=await getUserById(id)
	// console.log(data)
	res.json({
		data
	})
}

const addNewUser=async(req, res) => {
	const name  = req.body.name
	const email  = req.body.email
	console.log(req.body)
		// data=await addUser(name,email)
		// console.log('added')
		// res.send(data)
}



module.exports={getUser,addNewUser}

//const {username,room}=Qs.parse(location.search,{ignoreQueryPrefix:true})
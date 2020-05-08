const express=require('express')
const {getUserById,addUser,deleteUser,addToCart,removeFromCart} = require('../firebase/user.firebase')


const getUser=async(req,res)=>{
	const { id } = req.params;
	let data=await getUserById(id)
	// console.log(data)
	res.json({
		data
	})
}

const addNewUser=async(req, res) => {
	var name  = req.body.name
	var email  = req.body.email
		data=await addUser(name,email)
		res.send(data)
}

module.exports={getUser,addNewUser}

//const {username,room}=Qs.parse(location.search,{ignoreQueryPrefix:true})
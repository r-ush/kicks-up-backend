const express=require('express')
const {getUserById,addUser,deleteUser,addToCart,removeFromCart} = require('../firebase/user.firebase')


const getUser=async(req,res)=>{
	let data=await getUserById(id)
	// console.log(data)
	res.json({
		data
	})
}



module.exports={getUser}
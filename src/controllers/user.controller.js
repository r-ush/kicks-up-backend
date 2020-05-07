const express=require('express')

const getUser=async(req,res)=>{
	// let data=await getUserByEmail(email)
	// data=JSON.stringify(data)
	res.status(200).send('data')
}

module.exports={getUser}
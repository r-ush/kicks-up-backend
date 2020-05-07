const express=require('express')
const { getUserByEmail,addUser,deleteUser,addToCart,removeFromCart,getAllProducts,getProductsByField,getProductsByPrice} = require('./firebase/firebase.utils.js')
 
const app = express();
const port= process.env.PORT || 3001

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!'
	})
});

email='aarush.bhatt@gmail.com'
app.get(`/user/${email}`,async(req,res)=>{
	let data=await getUserByEmail(email)
	res.json({email:email,
		message:data
	})
})

app.use(express.json())
 
app.listen(port, () =>
	console.log(`App listening on port ${port} !`),
);
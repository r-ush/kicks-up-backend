const express=require('express')
const { getUserByEmail,addUser,deleteUser,addToCart,removeFromCart} = require('./firebase/user.firebase')
const { getAllProducts,getProductsByField,getProductsByPrice} = require('./firebase/products.firebase')

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
	console.log(data)
	res.json({	email,
		data
	})
})

app.use(express.json())
 
app.listen(port, () =>
	console.log(`App listening on port ${port} !`),
);
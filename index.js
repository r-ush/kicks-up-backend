const express=require('express')

const userRouter=require('./src/routers/user.router')
const productRouter=require('./src/routers/product.router')

const { getUserByEmail,addUser,deleteUser,addToCart,removeFromCart} = require('./src/firebase/user.firebase')
const { getAllProducts,getProductsByField,getProductsByPrice} = require('./src/firebase/products.firebase')

const app = express();
const port= process.env.PORT || 3001

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!'
	})
});

app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)

app.get('*',(req,res)=>{
    res.status(404).send('Page not Found')
})
 
app.listen(port, () =>
	console.log(`App listening on port ${port} !`),
);
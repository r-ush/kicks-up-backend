const express=require('express')
const userRouter=require('./src/routers/user.router')
const productRouter=require('./src/routers/product.router')
 
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
 
app.listen(port, () =>
	console.log(`App listening on port ${port} !`),
);
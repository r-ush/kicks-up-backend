const express=require('express')
var cors = require('cors')
const userRouter=require('./src/routers/user.router')
const productRouter=require('./src/routers/product.router')


const app = express();
const port= process.env.PORT || 3001


// app.use(cors())
app.use(express.json());

app.use('/users',userRouter)
app.use('/products',productRouter)


// app.get('/', (req, res) => {
// 	res.json({
// 		message: 'Hello World!'
// 	})
// });


app.get('*',(req,res)=>{
    res.status(404).send('Page not Found')
})
 
app.listen(port, () =>
	console.log(`App listening on port ${port} !`)
);
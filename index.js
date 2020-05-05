const express=require('express')
 
const app = express();
const port= process.env.PORT || 3001

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!'
	})
});

app.get('/products',(req,res)=>{
	
})

app.use(express.json())
 
app.listen(port, () =>
	console.log(`App listening on port ${port} !`),
);
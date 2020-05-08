const {admin,db}=require('./firebase.utils')
//productdb start

let productsdb = db.collection('products')

// fetch all products from db
const getAllProducts=()=>{
  return new Promise((resolve,reject)=>{
    var allProductsarr=[]
    let allProducts = productsdb.get()
    .then(snapshot => {
      snapshot.forEach(product => {
        allProductsarr.push(product.id)
      });
    }).then(()=>{
      resolve(allProductsarr)
    })
    .catch(err => {
      reject('Error getting documents', err);
    });
  })
}

const getProduct=(id)=>{
  return new Promise((resolve,reject)=>{
    let product = productsdb.doc(id)
    let getDoc = product.get()
  .then(doc => {
    if (!doc.exists) {
      reject('No such document!');
    } else {
      resolve(doc.data());
    }
  })
  .catch(err => {
    reject('Error getting document', err);
  });
})
}

// fetch products based on fields like gender, type color
const getProductsByField=(field,value)=>{
  return new Promise ((resolve,reject)=>{
    let filterProductarr=[]
    let query = productsdb.where(field, '==', value).get()
    .then(snapshot => {
      if (snapshot.empty) {
        reject('No results found.');
        return;
      }
      snapshot.forEach(doc => {
        filterProductarr.push(doc.id);
      });
    })
    .then(()=>{
      resolve(filterProductarr)
    })
    .catch(err => {
      reject('Error getting documents', err);
    });
  })
}

// fetch products based on price range
const getProductsByPrice=(operator,value)=>{
  return new Promise ((resolve,reject)=>{
    let filterProductarr=[]
    let query = productsdb.where('price', operator, value).get()
    .then(snapshot => {
      if (snapshot.empty) {
        reject('No results found.');
        return;
      }
      snapshot.forEach(doc => {
        filterProductarr.push(doc.id);
      });
    })
    .then(()=>{
      resolve(filterProductarr)
      console.log(filterProductarr)
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  })
}

//productdb end

// functions
// getAllProducts()
// getProductsByField('gender','male') //male,female
// getProductsByField('type','sport') //sport, sneakers...
// getProductsByField('brand','Nike') //Nike,Adidas,Reebok, Woodland
// getProductsByField('color','red') //red,black,blue
// getProductsByPrice('=',15000) //'<','<=','=','>','>=' and numeric value as second



module.exports={
	getAllProducts,
	getProductsByField,
  getProductsByPrice,
  getProduct
  }
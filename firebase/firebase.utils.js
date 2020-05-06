var admin = require('firebase-admin');

var serviceAccount = require("/home/rush/Downloads/kicks-up-firebase-adminsdk-rihcz-c1a6afb1d3.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://kicks-up.firebaseio.com"
});

let db = admin.firestore();

  //add user to userdb
  let userdb = db.collection('Users');
  
  const addUser=(name,email)=>{
    let newUser=userdb.add({
      cart:[],
      createdAt:new Date(),
    email,
    name
  })
  .then((ref)=>{
    console.log('user succesfully added with id:',ref.id)
  })
  .catch((err)=>{
    console.log('error addUser',err)
  });
}

//userdb start

//delete user from userdb
const deleteUser=(id)=>{
  let deleteDoc = userdb.doc(id).delete().then(()=>{
    console.log('deleted',id)
  }).catch((err)=>{
    console.log('Could not delete user',err)
  });
}

//add to cart
const addToCart=(userId,productId)=>{
  user=userdb.doc(userId)
  let arrUnion = user.update({
    cart: admin.firestore.FieldValue.arrayUnion(String(productId))
  })
  .then(()=>{
    console.log('added product to cart =>',productId)
  })
  .catch((err)=>{
    console.log('error adding to cart', err)
  });
}

// remove from cart
const removeFromCart=(userId,productId)=>{
  user=userdb.doc(userId)
  let arrRm = user.update({
    cart: admin.firestore.FieldValue.arrayRemove(String(productId))
  })
  .then(()=>{
    console.log('removed product from cart =>',productId)
  })
  .catch((err)=>{
    console.log('error removing from cart', err)
  });;
}

// userdb end

//productdb start

let productsdb = db.collection('products')

const getAllProducts=()=>{
  let allProducts = productsdb.get()
  .then(snapshot => {
    snapshot.forEach(product => {
      console.log(product.id, '=>', product.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}

const getProductsByField=(field,value)=>{
  let query = productsdb.where(field, '==', value).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No results found.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}


//productdb end

// ALL FUNCTIONS

// userdb
// deleteUser('9nBG4En4i3N6N3Vz4vV9')
// addUser('new user','new@gmail.com')
// addToCart('S7wLw6HrL1Nu9coM2ld8', 'DryiVHYTrMUUinxZjh7j');
// removeFromCart('S7wLw6HrL1Nu9coM2ld8', 'DryiVHYTrMUUinxZjh7j')

// productdb
// getAllProducts()
// getProductsByField('gender','male') //male,female
// getProductsByField('type','sport') //sport, sneakers...
// getProductsByField('brand','Nike') //Nike,Adidas,Reebok, Woodland
// getProductsByField('color','red') //red,black,blue

//FUNCTIONS END

module.exports={
  addUser,
  deleteUser,
  addToCart,
  removeFromCart,
  getAllProducts
}
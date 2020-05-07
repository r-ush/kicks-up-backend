const {admin,db}=require('./firebase.utils')

//userdb start
  let userdb = db.collection('Users');

  //fetch user data
const getUserByEmail=(findEmail)=>{
  return new Promise((resolve,reject)=>{
    let query = userdb.where('email', '==',findEmail).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        reject('No matching documents.');
      }  
  
      snapshot.forEach(user => {
        // console.log(user.id, '=>', user.data());
        resolve (user.data())
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
      reject('Error getting documents', err)
    });
  })
}

  //add user to userdb
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

// ALL FUNCTIONS

// userdb
// getUserByEmail('aarush.bhatt@gmail.com') //email address as a string
// deleteUser('9nBG4En4i3N6N3Vz4vV9')
// addUser('new user','new@gmail.com')
// addToCart('S7wLw6HrL1Nu9coM2ld8', 'DryiVHYTrMUUinxZjh7j');
// removeFromCart('S7wLw6HrL1Nu9coM2ld8', 'DryiVHYTrMUUinxZjh7j')

module.exports={
	getUserByEmail,
	addUser,
	deleteUser,
	addToCart,
	removeFromCart,
}
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

//delete user from userdb
const deleteUser=(id)=>{
  let deleteDoc = userdb.doc(id).delete().then(()=>{
    console.log('deleted',id)
  }).catch((err)=>{
    console.log('Could not delete user',err)
  });
}

// deleteUser('9nBG4En4i3N6N3Vz4vV9')

//  addUser('new user','new@gmail.com')

module.exports={
  addUser,
  deleteUser
}
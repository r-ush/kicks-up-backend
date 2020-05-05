var admin = require('firebase-admin');

var serviceAccount = require("/home/rush/Downloads/kicks-up-firebase-adminsdk-rihcz-c1a6afb1d3.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://kicks-up.firebaseio.com"
});

let db = admin.firestore();

  //add to db
let userdb = db.collection('Users');

const addUser=(name,email)=>{
  let newUser=userdb.add({
    cart:[],
    createdAt:new Date(),
    email,
    name
  })
  .then(()=>{
    console.log('user succesfully added')
  })
  .catch((err)=>{
    console.log('error addUser',err)
  });
}

//  addUser('hey','hey@gmail.com')

module.exports={
  addUser
}
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
  .catch((err)=>{
    console.log('error addUser',err)
  });
}

addUser('test','test@gmail.com')

//read from db
db.collection('Users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
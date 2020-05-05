var admin = require('firebase-admin');

var serviceAccount = require("/home/rush/Downloads/kicks-up-firebase-adminsdk-rihcz-c1a6afb1d3.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://kicks-up.firebaseio.com"
});
  
let db = admin.firestore();

  let docRef = db.collection('Users').doc('alovelace');

let setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

db.collection('Users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
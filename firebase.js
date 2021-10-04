const firebaseConfig = {
    apiKey: "AIzaSyBI87x76XQkP-1zO_OsWCQ40z0xGb6mdL0",
    authDomain: "teste-firebase-ntp.firebaseapp.com",
    databaseURL: "https://teste-firebase-ntp-default-rtdb.firebaseio.com",
    projectId: "teste-firebase-ntp",
    storageBucket: "teste-firebase-ntp.appspot.com",
    messagingSenderId: "801768219038",
    appId: "1:801768219038:web:803e7224fe0b848e50f68f",
    measurementId: "G-QZWLSG5G9B"
  };

  firebase.initializeApp(firebaseConfig)


console.log("ok")

const dbFirebase = firebase.database()

dbFirebase.ref("pasta").child("abc").set("123")

// firebase.database().ref("teste").set("valor")
// firebase.database().ref().child("valor").remove()

// firebase.firestore().ref("valor").child("valor").set("valor")

const db = firebase.firestore()

function salvar(){
  // db.collection("teste 1").doc(" pasta").set({
//   name: "dado",
//   state: "1",
//   country: "2"
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });

db.collection("users").doc().set(
  { nome : "igor",
    idade : "24",
    altura : "1.82"  
  })

  db.collection("cars").doc().set(
    { nome : "civic",
      cor : "preto",
      portas : "4"  
    })
}


  // firebase.firestore().collection("users").doc().set()




// let val = true
// val ? console.log("true"):console.log("false")
 
 


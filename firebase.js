const firebaseConfig = {
  apiKey: "AIzaSyAYGQq-JV81hYECP73faMCwzgk_Ay0Am-Y",
  authDomain: "databasefirebasefirestore.firebaseapp.com",
  projectId: "databasefirebasefirestore",
  storageBucket: "databasefirebasefirestore.appspot.com",
  messagingSenderId: "407141110375",
  appId: "1:407141110375:web:1b1ecc00c85aabd2713ac2",
  measurementId: "G-Y2QDD0H8NF"
}

firebase.initializeApp(firebaseConfig)

const dbBase = firebase.database()
const dbStore = firebase.firestore()

// dbBase.ref("pasta").child("abc").set("123")

// firebase.database().ref("teste").set("valor")
// firebase.database().ref().child("valor").remove()

// firebase.firestore().ref("valor").child("valor").set("valor")

function recuperaValorStore(){
  let colecao = document.getElementById("inColl").value
  let documento = document.getElementById("inDoc").value
  let valor = document.getElementById("inSet2").value

  return ({
            // colecao, 
            // documento, 
            valor
          })
}//end fucn recupera valor store



function salvarFirestore(){

  console.log(recuperaValorStore())


  // dbStore.collection("coleçao").doc("doc").set("set")

  // dbStore.collection("users").doc().set( //valor aleatoria mem doc
  // { coleca : "igor",
  //   document : "24",
  //   valor : "1.82"  
  // })

  let colecao = document.getElementById("inColl").value
  let documento = document.getElementById("inDoc").value
  let valor = document.getElementById("inSet2").value

  dbStore.collection(colecao).doc(documento).set(recuperaValorStore())



.then(() => {
  console.log("Documento salvo!");
})
.catch((error) => {
  console.error("Error: ", error);
});

}//end salva firestore

function removerFirestore(){
  console.log("removeStore")

}//end remover firestore









function salvarFirebase(){
  console.log("salvarBase")

  let pai = document.getElementById("inRef").value
  let filho = document.getElementById("inChild").value
  let valor = document.getElementById("inSet1").value

  dbBase.ref(pai).child(filho).set(valor)



.then(() => {
  console.log("Documento salvo!");
})
.catch((error) => {
  console.error("Error: ", error);
});



}//end salva firebase


function removerFirebase(){
  let pai = document.getElementById("inRef").value
  let filho = document.getElementById("inChild").value
  let valor = document.getElementById("inSet1").value

  dbBase.ref(pai).remove()



.then(() => {
  console.log("Documento salvo!");
})
.catch((error) => {
  console.error("Error: ", error);
});

}//end remover firebase





















//   db.collection("cars").doc().set(
//     { nome : "civic",
//       cor : "preto",
//       portas : "4"  
//     })



  // firebase.firestore().collection("users").doc().set()




// let val = true
// val ? console.log("true"):console.log("false")
 



const firebaseConfig = {
  apiKey: "AIzaSyAYGQq-JV81hYECP73faMCwzgk_Ay0Am-Y",
  authDomain: "databasefirebasefirestore.firebaseapp.com",
  databaseURL: "https://databasefirebasefirestore-default-rtdb.firebaseio.com",
  projectId: "databasefirebasefirestore",
  storageBucket: "databasefirebasefirestore.appspot.com",
  messagingSenderId: "407141110375",
  appId: "1:407141110375:web:1b1ecc00c85aabd2713ac2",
  measurementId: "G-Y2QDD0H8NF"
};

firebase.initializeApp(firebaseConfig)

// const dbBase = firebase.database()
// const dbStore = firebase.firestore()
/*
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

*/

//===========================================================================================//

//CRIA VALORES

//  var igorNameRef = firebase.database().ref('users/igor/name');
//      igorNameRef.child('first').set('Igor');
//      igorNameRef.child('last').set('Angeli');



// UPDATE DE VALORES, SE NAO EXISTENTES SERAO CRIADOS

// var igoraNameRef = firebase.database().ref('users/igor/name');
//     igoraNameRef.update({ first: 'Igor', last: 'Angeli' });


//POST DE VALORES COM IDs ALEATORIOS

//  var postListRef = firebase.database().ref('posts');
//  var newPostRef = postListRef.push();
//  newPostRef.set({
// 	 // ...
//  });

//REMOVE VALORES

// var igorRef = firebase.database().ref('users/igor/name');
//     igorRef.remove()
//       .then(function() {
//         console.log("Remove succeeded.")
//       })
//       .catch(function(error) {
//         console.log("Remove failed: " + error.message)
//       });


//INCREMENTA VALOR, OU CRIA CASO NAO EXISTA

// var igorRankRef = firebase.database().ref('valores/valor');
//     igorRankRef.transaction(function(valorAtual) {        
//     // console.log(valorNuvem + 1)
//     return valorAtual += 1
// });



//RECUPERA VALOR EM NUVEM

// const dbRef = firebase.database().ref("users")
//       dbRef.get().then((snapshot) => {
//         if (snapshot.exists()) {
//           // console.log(snapshot.val()) //PRINTA OU ENVIA VALOR RECEBIDO
//           valorRecebido = snapshot.val()
//           if(valorRecebido != null){
//             console.log("Valor obtido",valorRecebido)
//           }
//         } else {
//           console.log("Sem dados")
//         }
//       }).catch((error) => {
//         console.error(error)
//       });


//RECUPERA VALORES E PRINTA INDIVIDUALMENTE      
  // dbRef.once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key
  //     var childData = childSnapshot.val()

  //     console.log(childKey,childData)
  //     // ...
  //   });
  // });



      

//DETECTAR ALTERAÇOES

  firebase.database().ref("users").on('value', (snapshot) => {
        const data = snapshot.val()
        console.log(data)
        // updateStarCount(postElement, data)
        limpaPrint()
        valorRecebido = data
        printar()
      });


  //RECUPERA KEY ID 

  // var KEY = firebase.database().ref().push().key
  // console.log(KEY)

//==================================================================================//

function inicioPagina() {
  // setTimeout(function(){  printar() }, 1500)//ESPERA 1 SEGUNDO E MOSTRA LISTA
 


}

let valorRecebido = null

function btnF5(){   
  location.reload()
   
    // itens.forEach(myFunction)

    // function myFunction(item, index, arr){
    //   console.log("for each",item)

    // }

}

function limpaPrint(){
  document.getElementById("tabelaLista").innerHTML = ""
}

function printar(){
  if(valorRecebido == undefined){
    console.log("Sem daddos")
    return
  }  

  let itens  = Object.values(valorRecebido) //TRASNFORMA UM OBJETO EM ARRAY
  // console.log("Array",Array.isArray(itens),itens)



let tabela = document.getElementById("tabelaLista")

  itens.forEach(d => {
    // console.log(d)
    var linha = tabela.insertRow()
      linha.insertCell(0).innerHTML =  "#"	
      linha.insertCell(1).innerHTML =  d.name.first
      linha.insertCell(2).innerHTML = d.name.last
      linha.insertCell(3).innerHTML = d.id
  })
}









//   db.collection("cars").doc().set(
//     { nome : "civic",
//       cor : "preto",
//       portas : "4"  
//     })



  // firebase.firestore().collection("users").doc().set()




// let val = true
// val ? console.log("true"):console.log("false")
 

//  let lista = {
//             "users" : {
//               "igor" : {
//                 "name" : {
//                   "first" : "Igor",
//                   "last" : "Angeli"
//                 },
//                 "id" : 001
//               },
//               "maui" : {
//                 "name" : {
//                   "first" : "Maui",
//                   "last" : "Ddog"
//                 },
//                 "id" : 002
//               },
//               "mari" : {
//                 "name" : {
//                   "first" : "Mari",
//                   "last" : "Cesaretti"
//                 },
//                 "id" : 003
//               },
//               "teste" : {
//                 "name" : {
//                   "first" : "Teste",
//                   "last" : "123"
//                 },
//                 "id" : 004
//               }
//             }
//           }
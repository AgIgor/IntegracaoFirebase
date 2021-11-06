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

// const dbRef = firebase.database().ref("users/lastId")
//       dbRef.get().then((snapshot) => {
//         if (snapshot.exists()) {
//           console.log(snapshot.val()) //PRINTA OU ENVIA VALOR RECEBIDO
//           // valorRecebido = snapshot.val()
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
// firebase.database().ref("lastID").once('value', (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       // var childKey = childSnapshot.key
//       // var childData = childSnapshot.val()
//       // console.log(childKey,childData)
//       console.log(childSnapshot.val())
//       // ...
//     });
//   });


//DETECTAR ALTERAÇOES

  // firebase.database().ref("users").on('value', (snapshot) => {
  //       const data = snapshot.val()
  //       console.log(data)
  //       // updateStarCount(postElement, data)
  //       limpaPrint()
  //       valorRecebido = data
  //       printar()
  //     });


  //RECUPERA KEY ID 

  // var KEY = firebase.database().ref().push().key
  // console.log(KEY)

//==================================================================================//

let valorRecebido = null;
let lastId = null

function inicioPagina() {
  // setTimeout(function(){  printar() }, 1500)//ESPERA 1 SEGUNDO E MOSTRA LISTA

    firebase.database().ref("users").on('value', (snapshot) => {//ATULAIZA CONFORME O BACNO ATUALIZA
      limpaPrint()
      valorRecebido = snapshot.val()
      printar()
    });
    recuperaID();    
}//end inicio pagina


function recuperaID(){
  firebase.database().ref("lastId").once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
    let newID = childSnapshot.val()
    //console.log(newID)
    // document.getElementById("inId").value = newID 
    lastId = newID 
    });
  });
}//end recupera ID

function incrementId(){
  firebase.database().ref('lastId/id').transaction(function(valorAtual) {        
    return valorAtual += 1
  });  
}//end incrementa id


function limpaPrint(){
  document.getElementById("tabelaLista").innerHTML = ""
}//end limpa print

function printar(){
  if(valorRecebido == undefined){
    console.log("Sem daddos")
    return
  }

  let itens  = Object.values(valorRecebido) //TRASNFORMA UM OBJETO EM ARRAY
  // console.log("Array",Array.isArray(itens),itens)
  
  let quantidade_users = itens.length
  document.getElementById("val").innerText = quantidade_users

  let tabela = document.getElementById("tabelaLista")

  itens.forEach(d => {
    //  console.log(d)
    var linha = tabela.insertRow()
    let btn = document.createElement("button")
        btn.className = "btn btn-outline"
        btn.innerHTML = '<i class="bi bi-trash"></i>'//'<img src="trash.svg" alt="Excluir">'
   
    let first = `${d.name.first}`//d.name.first.toLowerCase().trim().replace(' ','_') +'_'+ d.name.last.toLowerCase().trim().replace(' ','_')
    let last = `${d.name.last}`

      while(first.includes(' ') || last.includes(' ')){
        first = first.toLowerCase().trim().replace(' ','_')
        last = last.toLowerCase().trim().replace(' ','_')
      }

      btn.id = `${first}_${last}`//d.name.first + d.name.last//d.id
      btn.onclick = function(){
        clickDelete(this.id)
      }
      linha.insertCell(0).append(btn)
      linha.insertCell(1).innerHTML =  d.name.first
      linha.insertCell(2).innerHTML = d.name.last
      linha.insertCell(3).innerHTML = d.email
      linha.insertCell(4).innerHTML = d.id
  })
}//end printar

function clickDelete(id){
  // console.log(id)

  firebase.database().ref('users/').child(id).remove()
  .then(() => {
    console.log("User Removido!");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
}

function limpaCampos(){
  document.getElementById("inNome").value = ""
  document.getElementById("inSobrenome").value = ""

}//end limpa campos

function salvarFirebase(){

  let key = firebase.database().ref().child("users").push().key;
  let val = firebase.database.ServerValue.increment(1);

  let path = getDados('path')

  firebase.database().ref(path).update({
    name: {"first": getDados('nome_first'),"last": getDados('nome_last')},
    email: getDados('email'),
    last_key: key,
    updates: val,
    id : lastId + 1
  })

  .then(() => {
    console.log("User salvo!");
    incrementId();
    recuperaID();

  })
  .catch((error) => {
    console.error("Error: ", error);
  });

  limpaCampos()
}//end salva firebase


function getDados(modo){
  let first = document.getElementById("inNome").value.toLowerCase().trim()//CONVERTE TEXTO EM CAIXA BAIXA E REMOVE ESPAÇOS
  let last = document.getElementById("inSobrenome").value.toLowerCase().trim()

  while(first.includes(' ') || last.includes(' ')){
    first = first.toLowerCase().trim().replace(' ','_')
    last = last.toLowerCase().trim().replace(' ','_')
  }//enquanto houver espaços ele troca por _

  let user_name = `${first}_${last}`
  let email =  `${first}_${last}@outlook.com` 
  let path = 'users/'+user_name


  if(modo == 'path'){
    return path;
  }
  if(modo == 'user_name'){
    return user_name
  }
  if(modo == 'nome_first'){
    return first
  }
  if(modo == 'nome_last'){
    return last
  }
  if(modo == 'email'){
    return email
  }

}//end get dados














  // firebase.firestore().collection("users").doc().set()


//OPERADOR TERNARIO

// let val = true
// val ? console.log("true"):console.log("false")
 
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



function botao() {


		let pet = {
			"nome"		: document.getElementById("inNome")				.value.toUpperCase().trim(),
			"idade"		: document.getElementById("inIdade")			.value.toUpperCase().trim(),
			"cor"		: document.getElementById("inCor")				.value.toUpperCase().trim(),
			"pelo"		: document.getElementById("inPelo")				.value.toUpperCase().trim(),
			"raca"		: document.getElementById("inRaca")				.value.toUpperCase().trim(),
			"peso"		: document.getElementById("inPeso")				.value.toUpperCase().trim(),
			"tipoIdade" : document.getElementsByTagName("tipoIdade")	.Id,
			"tipoPeso" 	: document.getElementsByTagName("tipoPeso")		.Id
		}//end pet obj


		// firebase.database().ref("valor").child("valor").set("valor")

		// firebase.database().ref(pet.nome).child("IDADE").set(pet.idade)
		// firebase.database().ref(pet.nome).child("COR")	.set(pet.cor)
		// firebase.database().ref(pet.nome).child("PELO")	.set(pet.pelo)
		// firebase.database().ref(pet.nome).child("RAÇA")	.set(pet.raca)
		// firebase.database().ref(pet.nome).child("PESO").set(pet.peso)

		firebase.database().ref(pet.nome).set(	{	
													IDADE 	: pet.idade +" " + pet.tipoIdade,
													COR 	: pet.cor,
													PELO 	: pet.pelo,
													RAÇA 	: pet.raca,
													PESO 	: pet.peso +" " + pet.tipoPeso
												})
		

							
		// LIMPA CAMPOS
		// 	// document.getElementById("inNome").value = ""
		// 	// document.getElementById("inIdade").value = ""
		// 	// document.getElementById("inCor").value = ""

		console.log(pet)
		// location.reload()


}//end fucn bot


function inicioPagina(){

	
}//end func pagina load


function botaoFalse(){

	document.getElementById("btnSalvar").setAttribute("onClick", "botao()")

	var test = document.getElementById("btnSalvar").getAttribute("onClick")
	console.log(test)

}


// function botao2(){

// 	var testK = document.getElementById("kilo").getAttribute("checked")
// 	var testG = document.getElementById("grama").getAttribute("checked")
// 	console.log(testK, testG)
	
// }


//REMOVENDO DADOS

//firebase.database().ref('VALOR').child('VALOR').remove()

// var adaRef = firebase.database().ref('users/ada');
// adaRef.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });


//INCLUINDO DAOS COM IDs

// firebase.database().ref('VALORt').push('VALOR')

// var messageListRef = firebase.database().ref('message_list');
// var newMessageRef = messageListRef.push();
// newMessageRef.set({
//   'user_id': 'ada',
//   'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
// });
// // We've appended a new message to the message_list location.
// var path = newMessageRef.toString();


//SETAR VALORES

// firebase.database().ref('users/ada/name').child('first').set('Ada').child('last').set('Lovelace')

// var adaNameRef = firebase.database().ref('users/ada/name');
// adaNameRef.child('first').set('Ada');
// adaNameRef.child('last').set('Lovelace');


//VERIFICANDO DADOS E SALVANDO 


// firebase.database().ref(pet.nome)/*.child() para buscar um dado especifico*/.transaction(function(dados) {
// 	if (dados === null) {
// 		return {};//quando vazio so retorna os dados, qnd preenchido salva os dados casa nao exista
// 		console.log('debug');
// 	} else {
// 		console.log('ja existe');
// 		return; // Abort the transaction.
// 	}
// 	}, function(error, committed, snapshot) {
// 	if (error) {
// 		console.log("falha", error);
// 	} else if (!committed) {
// 		console.log('ja salvo.');
// 	} else {
// 		console.log('adicionado');
// 	}
// 	console.log("dados: ", snapshot.val());
// 	})
// }



// function atualiza(){

// 	let pet = {
// 		"nome"		: document.getElementById("inNome")				.value.toUpperCase().trim(),
// 		"idade"		: document.getElementById("inIdade")			.value.toUpperCase().trim(),
// 		"cor"		: document.getElementById("inCor")				.value.toUpperCase().trim(),
// 		"pelo"		: document.getElementById("inPelo")				.value.toUpperCase().trim(),
// 		"raca"		: document.getElementById("inRaca")				.value.toUpperCase().trim(),
// 		"peso"		: document.getElementById("inPeso")				.value.toUpperCase().trim(),
// 		"tipoIdade" : document.getElementsByTagName("tipoIdade")	.Id,
// 		"tipoPeso" 	: document.getElementsByTagName("tipoPeso")		.Id
// 	}//end pet obj



// 	firebase.database().ref(pet.nome).transaction(function(dados) {
// 	if (dados === null) {
// 		return {	
// 			IDADE 	: pet.idade,
// 			COR 	: pet.cor,
// 			PELO 	: pet.pelo,
// 			RAÇA 	: pet.raca,
// 			PESO 	: pet.peso
// 		}//quando vazio so retorna os dados, qnd preenchido salva os dados casa nao exista
// 		console.log('debug');
// 	} else {
// 		console.log('ja existe');
// 		return; // Abort the transaction.
// 	}
// 	}, function(error, committed, snapshot) {
// 	if (error) {
// 		console.log("falha", error);
// 	} else if (!committed) {
// 		console.log('ja salvo.');
// 	} else {
// 		console.log('adicionado');
// 	}
// 	console.log("dados: ", snapshot.val());
// 	})
// }//end func atualiza
		
var resultado = ""

function obter(){
	let pet = {"nome": document.getElementById("inNome").value.toUpperCase().trim()	}//end pet obj

	firebase.database().ref(pet.nome).transaction(function(dados) {
	if (dados === null) {
		return {}//quando vazio so retorna os dados, qnd preenchido salva os dados casa nao exista
		console.log('debug');
	} else {
		console.log('ja existe');
		return; // Abort the transaction.
	}
	}, function(error, committed, snapshot) {
	if (error) {
		console.log("falha", error);
	} else if (!committed) {
		console.log('ja salvo.');
	} else {
		console.log('adicionado');
	}
	// console.log("dados: ", snapshot.val());
	resultado =  snapshot.val()
	console.log(resultado)
	})	

}//end func obter




// function recuperarDados(){
// 	firebase.database().ref("MAUI").once("value",function(snapshot){
// 		snapshot.foreach(
// 			function(childSnapshot){
// 				let test = childSnapshot.val().COR
// 				// let idade = childSnapshot.val().IDADE
// 				// let cor = childSnapshot.val().COR
// 				// let pelo = childSnapshot.val().PELO
// 				// let raca = childSnapshot.val().RACA
// 				// let peso = childSnapshot.val().PESO

// 				console.log(test)
// 			}
// 		)
// 	})
// }//END FUCN RECUP DADOS
// console.log("ok")



var firebaseConfig = {
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



function botao() {

		let pet = {
			"nome":document.getElementById("inNome")		.value.toUpperCase().trim(),
			"idade": document.getElementById("inIdade")		.value.toUpperCase().trim(),
			"cor": document.getElementById("inCor")			.value.toUpperCase().trim(),
			"pelo": document.getElementById("inPelo")		.value.toUpperCase().trim(),
			"raca": document.getElementById("inRaca")		.value.toUpperCase().trim(),
			"peso": document.getElementById("inPeso")		.value.toUpperCase().trim()
		}//end pet obj


		// firebase.database().ref("valor").child("valor").set("valor")

		// firebase.database().ref(pet.nome).child("IDADE").set(pet.idade)
		// firebase.database().ref(pet.nome).child("COR")	.set(pet.cor)
		// firebase.database().ref(pet.nome).child("PELO")	.set(pet.pelo)
		// firebase.database().ref(pet.nome).child("RAÇA")	.set(pet.raca)
		// firebase.database().ref(pet.nome).child("PESO").set(pet.peso)

		firebase.database().ref(pet.nome).set(	{	
													IDADE 	: pet.idade,
													COR 	: pet.cor,
													PELO 	: pet.pelo,
													RAÇA 	: pet.raca,
													PESO 	: pet.peso
												})
		


		// LIMPA CAMPOS
		// 	// document.getElementById("inNome").value = ""
		// 	// document.getElementById("inIdade").value = ""
		// 	// document.getElementById("inCor").value = ""

		console.log(pet)

}//end fucn bot


function inicioPagina(){
	// console.log("ok")
	
	
}//end func pagina load


function botaoFalse(){

	document.getElementById("btnSalvar").setAttribute("onClick", "botao()")

	var test = document.getElementById("btnSalvar").getAttribute("onClick")
	console.log(test)

}

	 

	


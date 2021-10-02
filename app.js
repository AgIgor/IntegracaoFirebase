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
	
	let valor = document.getElementById("inValor").value
	let nome = document.getElementById("inNome").value

	if(valor != "" && nome != ""){

		console.log(nome, valor) 
		firebase.database().ref(nome).set(valor)

		document.getElementById("inNome").value = ""
		document.getElementById("inValor").value = ""
	}else{
		console.log("Campo vazio")
	}
}
// //Initialize Firebase
var config = {
    apiKey: "AIzaSyAFhc-grSOcnOicd-FYECe4KbBnZMEssoU",
    authDomain: "translab-made.firebaseapp.com",
    databaseURL: "https://translab-made.firebaseio.com",
    projectId: "translab-made",
    storageBucket: "translab-made.appspot.com",
    messagingSenderId: "749339486306"
};
firebase.initializeApp(config);

//Login
// let currentUser = '';
function registerWithFirebase() {

    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value
    if (typeof(parseInt(passwordValue)) != 'number') {
        alert('Deben ser solo números')
        console.log(passwordValue)
    } else {
        firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
            // currentUser = firebase.auth().currentUser;
            // firebase.database().ref(`users/email`).push(`${currentUser.email}`)
            //     .once('value')
            .then(() => {
                console.log('usuario creado con exito')
                redirectFromLogin()
            })
            .catch((error) => {
                console.log('error de firebase > codigo ' + error.message)
                document.getElementById('message').innerHTML = error.message
            })
    }

}

function loginWithFirebase() {
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value; //traer los datos del document 

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then((e) => {
            console.log('usuario inicio sesion con exito')
            redirectFromLogin()
        })
        .catch((error) => {
            console.log('Error en firebase > Código > ' + error.code); //nos muestra el tipo de error que produce
            console.log('Error de firebase > Mensaje > ' + error.message);
        });
}

function redirectFromLogin() {
    location.href = "home.html";
}


/* --------- FUNCIONES DEL TEST  ------- */
window.validatePass = function(passwordValue) {

    if (typeof(parseInt(passwordValue)) != 'number') {
        return false;
    }
    if (passwordValue.length > 8) {
        return false;
    }
    return true;
}

window.calculateRate = function(balance, rate) {
    return balance - rate;
}

/*--------- FIN DEL TEST -----*/
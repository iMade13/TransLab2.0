// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFhc-grSOcnOicd-FYECe4KbBnZMEssoU",
    authDomain: "translab-made.firebaseapp.com",
    databaseURL: "https://translab-made.firebaseio.com",
    projectId: "translab-made",
    storageBucket: "translab-made.appspot.com",
    messagingSenderId: "749339486306"
};
firebase.initializeApp(config);

window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = firebase.auth().currentUser
        }
    });
}

//Login
function loginWithFirebase() {
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then((e) => {
            console.log('usuario inicio sesion con exito')

        })
        .catch((error) => {
            console.log('error de firebase > codigo ' + error.message)
        })
}

function redirectFromLogin() {
    location.href = "home.html";
}

/* --------- FUNCIONES DEL TEST  ------- */
window.validatePass = function(passwordValue) {
    const passwordValue = inputPassword.value
    if (typeof(parseInt(passwordValue)) != 'number') {
        return false;
    }
    if (passwordValue.legth > 8) {
        return false;
    }
    return true;
}

window.calculateRate = function(balance, rate) {
    return balance - rate;
}

/*--------- FIN DEL TEST -----*/


// function registerWithFirebase() {
//     firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
//         // let passwordValue = document.getElementById('inputPassword').value.length
//     const emailValue = inputEmail.value
//     const passwordValue = inputPassword.value
//         // if (passwordValue > 8 || typeof(parseInt(passwordValue)) != 'number') {
//         //     alert('Su password debe tener máximo 8 números')
//         .then(() => {
//             console.log('usuario creado con exito')
//             redirectFromLogin()
//         })
//         .catch((error) => {
//             console.log('error de firebase > codigo ' + error.message)
//         })
//     console.log(passwordValue);
// }
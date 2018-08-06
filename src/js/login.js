function registerWithFirebase() {

    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log('usuario creado con exito')
            redirectFromLogin()
        })
        .catch((error) => {
            console.log('error de firebase > codigo ' + error.message)
            document.getElementById('message').innerHTML = error.message
        })
}

function loginWithFirebase() {
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value; //traer los datos del document 

    firebase.auth().singInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log('Usuario inicio sesión con éxito');
            window.location = "home.html"
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
    if (passwordValue.legth > 8) {
        return false;
    }
    return true;
}

window.calculateRate = function(balance, rate) {
    return balance - rate;
}

/*--------- FIN DEL TEST -----*/
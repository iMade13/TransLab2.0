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
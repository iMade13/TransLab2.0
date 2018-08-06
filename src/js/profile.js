window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            userMail.innerText = user.email;
            // userPhoto.innerText = user.photoURL;
        } else {
            console.log('User > ' + JSON.stringify(user));
        }

        saveCard = () => {
            let numberCard = document.getElementById("cardNumber").value;
            firebase.database().ref(`users/${user.uid}`).child('Bip').push(numberCard);
        }
    });
}

function loginWithFirebase() {
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value; //traer los datos del document 

    firebase.auth().singInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log('Usuario inicio sesión con éxito');
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

const button = document.getElementById('btn-add');

button.addEventListener('click', () => {
    let cardBip = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').value = '';

    const contCard = document.getElementById('contCard');
    // const contNew = document.createElement('div');
    const contNew = document.createElement('select');
    const newCard = document.createElement('option');
    let numberCard = document.createTextNode(cardBip);
    newCard.appendChild(numberCard);
    // contNew.appendChild(newCard);
    // contCard.appendChild(contNew);

})
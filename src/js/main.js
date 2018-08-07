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
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            document.getElementById('userMail').innerText = user.email;
            userPhoto.innerText = `<img src="http://d28hp0i0mf9k3x.cloudfront.net/assets/default_person-3886b66ad5ca85d57ed2a0d12fd2b2e4.png"`
        } else {
            console.log('User > ' + JSON.stringify(user));
        }

    });
}

saveCard = () => {
    let numberCard = document.getElementById("cardNumber").value;
    document.getElementById('cardNumber').value = '';
    if (numberCard == "") {
        alert("Ingrese número de tarjeta")
    } else {
        firebase.database().ref(`users/${user.uid}`).child('NúmeroBip').push(numberCard).key;
    }

    const contCard = document.getElementById('contCard');
    const option = document.createElement('option');
    option.text = numberCard;
    contCard.add(option, contCard[0]);

    //document.getElementById('cardsSaldo').innerText = cards;
}
cargarAPI = () => {
    const numberCardBip = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').value = '';


    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)

            let amountBip = dataBip[2];
            document.getElementById("verSaldo").innerHTML =
                `<span class='col d-flex justify-content-center' id='txtCosto'>COSTO PASAJE</span>
                <span class='col d-flex justify-content-center' id='costoPasaje'>${amountBip}</span>`;
        })
        .then(function calcular(data) {


        })
}
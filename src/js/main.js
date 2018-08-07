var config = {
    apiKey: "AIzaSyAFhc-grSOcnOicd-FYECe4KbBnZMEssoU",
    authDomain: "translab-made.firebaseapp.com",
    databaseURL: "https://translab-made.firebaseio.com",
    projectId: "translab-made",
    storageBucket: "translab-made.appspot.com",
    messagingSenderId: "749339486306"
};
firebase.initializeApp(config);

let currentUser = '';
let numberCard = '';

window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            currentUser = firebase.auth().currentUser;
            console.log(currentUser)
            firebase.database().ref(`users/${currentUser.uid}`)
                .once('value')
                .then(() => {
                    document.getElementById('userMail').innerHTML = currentUser.email;
                    userPhotoo.innerHTML = "http://d28hp0i0mf9k3x.cloudfront.net/assets/default_person-3886b66ad5ca85d57ed2a0d12fd2b2e4.png"
                })
                .catch((error) => {
                    console.log("Database error > " + JSON.stringify(error));
                });
        }
        saveCard = (numberCard) => {
            numberCard = document.getElementById("cardNumber").value;
            document.getElementById('cardNumber').value = '';
            if (numberCard == "") {
                alert("Ingrese número de tarjeta")
            } else {
                const db = firebase.database();
                db.ref(`users/${currentUser.uid}`).child(`NumeroBip`).push(numberCard).key;

                const ref = firebase.database().ref(`users/${currentUser.uid}`)
                    //console.log(ref);
                ref.once('value')
                    //.limitToLast(4)
                    .then((data) => {
                        let saveData = Object.values(data.val());
                        console.log(saveData)
                        let values = Object.entries(saveData[0]);
                        console.log(values)
                        document.getElementById('contCard').innerHTML = '';
                        values.forEach(element => {
                            console.log(element[1]);
                            const option = document.createElement('option');
                            option.innerText = element[1];
                            contCard.appendChild(option);
                        });
                    })
            }
        }
    });
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

}





// ref(`users/${currentUser.uid}`).

// const contCard = document.getElementById('contCard');
// const option = document.createElement('option');
// option.text = numberCard;
// contCard.add(option, contCard[0]);
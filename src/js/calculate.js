const calcularSaldo = () => {
    const numberCardBip = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').value = '';
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)
            let saldoBip = dataBip[2];

            let saldoBipRep = Number(saldoBip.replace(/[$,.]+/g, ""));

            const combo = document.getElementById("selectHorarios");
            const horarios = combo.options[combo.selectedIndex].value;

            const saldoFinal = saldoBipRep - horarios;


            document.getElementById("costoPasaje").innerHTML =
                `<span class='col d-flex justify-content-center p-0 mt-4' id='txtCosto'>COSTO PASAJE</span>
            <span class='col d-flex justify-content-center p-0' id='costoPasaje'>${horarios}</span>`;
            document.getElementById("saldoFinal").innerHTML =
                `<span class='col d-flex justify-content-center p-0 mt-3' id='txtCosto'>SALDO FINAL</span>
            <span class='col d-flex justify-content-center p-0' id='costoPasaje'>${saldoFinal}</span>`;
        })
};

// var config = {
//     apiKey: "AIzaSyAFhc-grSOcnOicd-FYECe4KbBnZMEssoU",
//     authDomain: "translab-made.firebaseapp.com",
//     databaseURL: "https://translab-made.firebaseio.com",
//     projectId: "translab-made",
//     storageBucket: "translab-made.appspot.com",
//     messagingSenderId: "749339486306"
// };
// firebase.initializeApp(config);

// let currentUser = '';
// const ref = firebase.database().ref(`users/${currentUser.uid}`)
//     //console.log(ref);
// ref.once('value')
//     //.limitToLast(4)
//     .then((data) => {
//         let datos = Object.values(data.val());
//         console.log(datos)
//         let tarjetas = Object.entries(datos[0]);
//         console.log(valor)
//         document.getElementById('selectTarjetas').innerHTML = '';
//         tarjetas.forEach(e => {
//             console.log(e[1]);
//             const option = document.createElement('option');
//             option.innerText = e[1];
//             selectTarjetas.appendChild(option)
//         });
//     })
cargarAPI = () => {
    const numberCardBip = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').value = '';
    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)

            let amountBip = dataBip[2];
            document.getElementById("verSaldo").innerHTML =
                `<span class='col d-flex justify-content-center' id='txtCosto'>SALDO BIP</span>
              <span class='col d-flex justify-content-center' id='costoPasaje'>${amountBip}</span>`;
        })

}
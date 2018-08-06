function cargarAPI() {
    const numberCardBip = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').value = '';


    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)

            let amountBip = dataBip[2];
            document.getElementById("verSaldo").innerHTML = `Saldo total  </br> ${amountBip}`;
        })
}
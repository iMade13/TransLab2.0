const calcularSaldo = () => {
    const numberCardBip = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').value = '';
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberCardBip}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const dataBip = Object.values(data)
            const saldoBip = dataBip[2];

            const saldoBipRep = Number(saldoBip.replace(/[$,.]+/g, ""));

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
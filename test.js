window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) { //Si está logeado, mostraremos la opción loggedIn
            // console.log(user);
            perfil(user);
        }
    });
}

function perfil(user) {
    console.log(user);
    const perfilUsuario = document.getElementById('informacion-usuario');
    firebase.database().ref(`users/${user.uid}`) //ref es la ruta para llegar a los datos
        .once('value')
        .then((user) => {
            // const correo = user.val().correo;

            // // perfilUsuario.innerHTML = `<h6 style=" text-align:center; color: #4E4E4E;">${correo}</h6>`;
        })
        .catch((error) => {
            console.log("Database error > " + JSON.stringify(error));
        });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            currentUser = firebase.auth().currentUser;
            // console.log(currentUser)
            firebase.database().ref(`users/${currentUser.uid}`)
                .once('value')
                .then(() => {
                    document.getElementById('informacion-usuario').innerHTML = `<p >${currentUser.email}</p>`
                })
                .catch((error) => {
                    console.log("Database error > " + JSON.stringify(error));
                });
        }
    });

}
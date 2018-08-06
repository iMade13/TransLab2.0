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
            userMail.innerText = user.email;
            // userPhoto.innerText = user.photoURL;
        } else {
            console.log('User > ' + JSON.stringify(user));
        }
        saveCard = () => {
            let numberCard = document.getElementById("cardNumber").value;
            document.getElementById('cardNumber').value = '';
            firebase.database().ref(`users/${user.uid}`).child('NúmeroBip').push(numberCard);

            const contCard = document.getElementById('contCard');
            const option = document.createElement('option');
            option.text = numberCard;
            contCard.add(option, contCard[0]);
        }
    });
}
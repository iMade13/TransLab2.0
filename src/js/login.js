window.validatePass = function(password) {
    if (typeof(parseInt(password)) != 'number') {
        return false;
    }
    if (password.legth > 8) {
        return false;
    }
    return true;

}

window.calculateRate = function(balance, rate) {

    return balance - rate;
}
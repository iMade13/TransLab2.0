window.validatePass = function(password) {
    if (typeof(password) != 'number') {
        return false;
    }
    if (password.legth > 8) {
        return false;
    }
    return true;

}
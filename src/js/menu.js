$(function() {
    let boton = $('#btn-menu');
    let fondo_enlace = $('#fondo-enlace');

    boton.on('click', function(e) {
        fondo_enlace.toggleClass('active');
        $('#menu-lateral').toggleClass('active');
        e.preventDefault();
    });

    fondo_enlace.on('click', function(e) {
        fondo_enlace.toggleClass('active');
        $('#menu-lateral').toggleClass('active');
        e.preventDefault();
    });
}())
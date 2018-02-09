$(function () {
    // Zona Seleccion
    $('#sel1').on('change', cambiarPrecio);
    $('#anyadirReserva').on('click', mostrarAlertReserva);
    $('#cerrarAlertReserva').on('click', cerrarAlertReserva);

    // Zona Reservas
    $('#confirmarCompra').on('click', mostrarAlertConfirmarCompra);
    $('#botonConfirmarCompra').on('click', cerrarAlertConfirmarCompra);
    $('#botonDenegarCompra').on('click', cerrarAlertConfirmarCompra);
    $('#cerrarCompraCorrecto').on('click', cerrarAlertConfirmarCompraReservada);

    // Zona Favoritos Menús
    $('#botonConfirmarCompraFav').on('click', confirmarAlertConfirmarCompraFav);
    $('#botonDenegarCompraFav').on('click', cerrarAlertConfirmarCompraFav);
    $('#menuFavIncorrecto').on('click', mostrarIncorrectoPedidoFav);
    $('#cerrarFavCorrecto').on('click', cerrarCorrectoPedidoFav);
    $('#cerrarFavIncorrecto').on('click', cerrarIncorrectoPedidoFav);
    $('#menuFavCorrecto').on('click', mostrarAlertConfirmarCompraFav);

    // Zona Favoritos Añadir Menús
    $('#anyadirFavButton').on('click', mostrarAlertAnyadirFav);
    $('#confirmarAnyadirMenú').on('click', cerrarAlertAnyadirFav);
    $('#denegarAnyadirMenú').on('click', cerrarAlertAnyadirFav);

    // Ocultando elementos
    $(".alert").hide();
    $('#textoSeleccion').val("3.50 €");

    $('#cerrarAlertReserva').on('click', cerrarDescripcion);

    var cantidad = 1;
    var precioFinal = "3.50";

    function cambiarPrecio() {
        let precio = 3.50;
        cantidad = $('#sel1').val();
        precioFinal = precio * cantidad;

        $('#textoSeleccion').val(precioFinal + " €");
    }

    function mostrarAlertReserva() {
        $('#alertAnyadirReserva').slideDown();
        $("#seleccioncomida *").attr("disabled", "true");
        $('button#cerrarAlertReserva').removeAttr("disabled");

        $('#precio').text("Precio: "+precioFinal+"€");
        $('#cantidad').text(cantidad+"x Bocadillo "+getParameterValue('item'));
    }

    function cerrarAlertReserva() {
        $('#alertAnyadirReserva').slideUp();
        $('.seleccion *').removeAttr('disabled');
        $('.seleccion').hide(500);
        $('#menu').show(500);
    }

    function cerrarDescripcion() {
        $("#seleccioncomida").addClass("oculto");
    }

    function cerrarAlertConfirmarCompraReservada() {
        $('div#confirmarcompraRealizada').slideUp();
        $('button#confirmarCompra').removeAttr("disabled");
    }

    function cerrarAlertAnyadirFav() {
        $('div#alertAnyadirNuevoMenuFav').slideUp();
        $("#containerFav").children().removeAttr("disabled");
        $("div#anyadirFav").children().removeAttr("disabled");
    }

    function mostrarAlertAnyadirFav() {
        $('div#alertAnyadirNuevoMenuFav').slideDown();
        $("#containerFav").children().attr("disabled", "true");
        $("div#anyadirFav").children().attr("disabled", "true");
    }

    function cerrarAlertConfirmarCompra() {
        $('div#confirmarCompraAlert').slideUp();
        $('div#confirmarcompraRealizada').slideDown();
    }

    function confirmarAlertConfirmarCompraFav() {
        $('div#confirmarCompraFavAlert').slideUp();
        $("#containerFav").children().removeAttr("disabled");
        $("div#anyadirFav").children().removeAttr("disabled");
        mostrarCorrectoPedidoFav();
    }

    function cerrarAlertConfirmarCompraFav() {
        $('div#confirmarCompraFavAlert').slideUp();
        $("#containerFav").children().removeAttr("disabled");
        $("div#anyadirFav").children().removeAttr("disabled");
    }

    function cerrarIncorrectoPedidoFav() {
        $("div#falloPedidoFav").slideUp();
        $("#containerFav").children().removeAttr("disabled");
        $("div#anyadirFav").children().removeAttr("disabled");
    }

    function cerrarCorrectoPedidoFav() {
        $("div#correctoPedidoFav").slideUp();
        $("#containerFav").children().removeAttr("disabled");
        $("div#anyadirFav").children().removeAttr("disabled");
    }

    function mostrarCorrectoPedidoFav() {
        $("div#correctoPedidoFav").slideDown();
        $("#containerFav").children().attr("disabled", "true");
        $("div#anyadirFav").children().attr("disabled", "true");
    }

    function mostrarIncorrectoPedidoFav() {
        $("div#falloPedidoFav").slideDown();
        $("#containerFav").children().attr("disabled", "true");
        $("div#anyadirFav").children().attr("disabled", "true");
    }

    function mostrarAlertConfirmarCompra() {
        $('div#confirmarCompraAlert').slideDown();
        $('button#confirmarCompra').attr("disabled", "true");
    }

    function mostrarAlertConfirmarCompraFav() {
        $('div#confirmarCompraFavAlert').slideDown();
        $("#containerFav").children().attr("disabled", "true");
        $("div#anyadirFav").children().attr("disabled", "true");
    }

    function getParameterValueFromURL(name, url) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        return results == null ? null : results[1];
    }

    function getParameterValue(name) {
        return getParameterValueFromURL(name,window.location.href)
    }

    function currentDiv() {
        return getParameterValue("div");
    }

    function mostrarDiv(id) {
        $("#" + id).removeClass("oculto")
    }

    $(function () {
        var divActual = currentDiv() || 'paginaInicial';
        console.log(divActual);
        mostrarDiv(divActual);
    })

});

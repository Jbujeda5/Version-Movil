$(function () {
    //
    //
    //
    //    // Sliders
    //    $('#sliderPedido').on('click', irZonaPedidos);
    //
    //    // Zona Inicial
    //    $('#codigoqr').on('click', ocultarQR);
    //    $('#iconoBar').on('click', irInicio);
    //    $('a#iraInicio').on('click', irInicio);
    //    $('a#iraPedidos').on('click', irZonaPedidos);
    //
    //    // Zona Seleccion
    //    $('#sel1').on('change', cambiarPrecio);
    //    $('#anyadirReserva').on('click', mostrarAlertReserva);
    //    $('#cerrarAlertReserva').on('click', cerrarAlertReserva);
    //
    //    // Zona Seleccion de menús
    //    $('#comida').on('click', moverComida);
    //    $('#bebida').on('click', moverBebida);
    //    $('#juegos').on('click', moverJuego);
    //    $('#irBocadillo').on('click', moverBocadillo);
    //    $('#bocadilloSerrano').on('click', moverSeleccion);
    //    $('#risk').on('click', moverSeleccion);
    //
    //    // Zona Reservas
    //    $('#confirmarCompra').on('click', mostrarAlertConfirmarCompra);
    //    $('#botonConfirmarCompra').on('click', cerrarAlertConfirmarCompra);
    //    $('#botonDenegarCompra').on('click', cerrarAlertConfirmarCompra);
    //    $('#cerrarCompraCorrecto').on('click', cerrarAlertConfirmarCompraReservada);
    //    $('#tablaReserva').on('click', mostrarMensaje);
    //
    //    // Zona Favoritos Menús
    //    $('#botonConfirmarCompraFav').on('click', confirmarAlertConfirmarCompraFav);
    //    $('#botonDenegarCompraFav').on('click', cerrarAlertConfirmarCompraFav);
    //    $('#menuFavIncorrecto').on('click', mostrarIncorrectoPedidoFav);
    //    $('#cerrarFavCorrecto').on('click', cerrarCorrectoPedidoFav);
    //    $('#cerrarFavIncorrecto').on('click', cerrarIncorrectoPedidoFav);
    //    $('#menuFavCorrecto').on('click', mostrarAlertConfirmarCompraFav);
    //
    //    // Zona Favoritos Añadir Menús
    //    $('#anyadirFavButton').on('click', mostrarAlertAnyadirFav);
    //    $('#confirmarAnyadirMenú').on('click', cerrarAlertAnyadirFav);
    //    $('#denegarAnyadirMenú').on('click', cerrarAlertAnyadirFav);
    //
    //    // Ocultando elementos
    //    $(".alert").hide();
    //    $('div#menu').hide();
    //    $('div#zonaPedidos').hide();
    //    // $('div#menuEntrantes').hide();
    //    $('div#zonaComida').hide();
    //    $('div#zonaJuegos').hide();
    //    // $('div#menuBocadillos').hide();
    //
    //    $('#textoSeleccion').val("3.50 €"); // CAMBIAR LO QUE PONE EN EL TEXTO SELECCION
    //
    //
    //
    //    // Zona de Seleccion Compra
    //
    //    function cambiarPrecio() {
    //        let precio = 3.50;
    //        let cantidad = $('#sel1').val();
    //        let precioFinal = precio * cantidad;
    //
    //        $('#textoSeleccion').val(precioFinal + " €");
    //    }
    //
    //    function mostrarAlertReserva() {
    //        $('#alertAnyadirReserva').slideDown();
    //        $(".seleccion *").attr("disabled", "true");
    //        $('button#cerrarAlertReserva').removeAttr("disabled");
    //    }
    //
    //    function cerrarAlertReserva() {
    //        $('#alertAnyadirReserva').slideUp();
    //        $('.seleccion *').removeAttr('disabled');
    //        $('.seleccion').hide(500);
    //        $('#menu').show(500);
    //    }
    //
    //    // Movilidad en menús
    //
    //    // Comidas
    //    function moverComida() {
    //        console.log("Mover Comida");
    //        $('#menu').hide(500);
    //        $('#zonaComida').show(500);
    //    }
    //
    //    function moverBocadillo() {
    //        $('.menuComida').hide(500);
    //        $('#zonaBocadillos').show(500);
    //    }
    //
    //    function moverSeleccion() {
    //        $('.menuBocadillos').hide(500);
    //        $('.seleccion').show(500);
    //    }
    //
    //    // WIP Bebidas
    //    function moverBebida() {
    //        console.log("bebida :D");
    //    }
    //    // WIP Juegos
    //    function moverJuego() {
    //        $('#menu').hide(500);
    //        $('#zonaJuegos').show(500);
    //    }
    //
    //    // Funciones de movilidad por la barra de navegación
    //    function irInicio() {
    //        $("#bs-example-navbar-collapse-1").removeClass('in open');
    //        $('#zonaPedidos').hide(500);
    //        $('#paginaInicial').show(500);
    //    }
    //
    //    function irZonaPedidos() {
    //        $("#bs-example-navbar-collapse-1").removeClass('in open');
    //        $('#zonaPedidos').show(500);
    //        $('#paginaInicial').hide(500);
    //    }
    //
    //
    //    // Funcionalidades
    //    function mostrarMensaje() {
    //        console.log("Buenos días");
    //    }
    //
    //    function ocultarQR() {
    //        $('#codigo').hide(500);
    //        $('div#menu').show(500);
    //    }
    //
    //    function cerrarAlertConfirmarCompraReservada() {
    //        $('div#confirmarcompraRealizada').slideUp();
    //        $('button#confirmarCompra').removeAttr("disabled");
    //    }
    //
    //    function cerrarAlertAnyadirFav() {
    //        $('div#alertAnyadirNuevoMenuFav').slideUp();
    //        $("#containerFav").children().removeAttr("disabled");
    //        $("div#anyadirFav").children().removeAttr("disabled");
    //    }
    //
    //    function mostrarAlertAnyadirFav() {
    //        $('div#alertAnyadirNuevoMenuFav').slideDown();
    //        $("#containerFav").children().attr("disabled", "true");
    //        $("div#anyadirFav").children().attr("disabled", "true");
    //    }
    //
    //
    //    function cerrarAlertConfirmarCompra() {
    //        $('div#confirmarCompraAlert').slideUp();
    //        $('div#confirmarcompraRealizada').slideDown();
    //    }
    //
    //    function confirmarAlertConfirmarCompraFav() {
    //        $('div#confirmarCompraFavAlert').slideUp();
    //        $("#containerFav").children().removeAttr("disabled");
    //        $("div#anyadirFav").children().removeAttr("disabled");
    //        mostrarCorrectoPedidoFav();
    //    }
    //
    //    function cerrarAlertConfirmarCompraFav() {
    //        $('div#confirmarCompraFavAlert').slideUp();
    //        $("#containerFav").children().removeAttr("disabled");
    //        $("div#anyadirFav").children().removeAttr("disabled");
    //    }
    //
    //    function cerrarIncorrectoPedidoFav() {
    //        $("div#falloPedidoFav").slideUp();
    //        $("#containerFav").children().removeAttr("disabled");
    //        $("div#anyadirFav").children().removeAttr("disabled");
    //    }
    //
    //    function cerrarCorrectoPedidoFav() {
    //        $("div#correctoPedidoFav").slideUp();
    //        $("#containerFav").children().removeAttr("disabled");
    //        $("div#anyadirFav").children().removeAttr("disabled");
    //    }
    //
    //    function mostrarCorrectoPedidoFav() {
    //        $("div#correctoPedidoFav").slideDown();
    //        $("#containerFav").children().attr("disabled", "true");
    //        $("div#anyadirFav").children().attr("disabled", "true");
    //    }
    //
    //    function mostrarIncorrectoPedidoFav() {
    //        $("div#falloPedidoFav").slideDown();
    //        $("#containerFav").children().attr("disabled", "true");
    //        $("div#anyadirFav").children().attr("disabled", "true");
    //    }
    //
    //    function mostrarAlertConfirmarCompra() {
    //        $('div#confirmarCompraAlert').slideDown();
    //        $('button#confirmarCompra').attr("disabled", "true");
    //    }
    //
    //    function mostrarAlertConfirmarCompraFav() {
    //        $('div#confirmarCompraFavAlert').slideDown();
    //        $("#containerFav").children().attr("disabled", "true");
    //        $("div#anyadirFav").children().attr("disabled", "true");
    //    }

    function getParameterValueFromURL(name, url) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        return results == null ? null : results[1];
    }

    function currentDiv() {
        return getParameterValueFromURL("div", window.location.href);
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

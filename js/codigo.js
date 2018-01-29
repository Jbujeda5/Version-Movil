$(function() {
  // Zona Reservas
  $('#confirmarCompra').on('click', mostrarAlertConfirmarCompra);
  $('#botonConfirmarCompra').on('click', cerrarAlertConfirmarCompra);
  $('#botonDenegarCompra').on('click', cerrarAlertConfirmarCompra);

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




  $(".alert").hide();

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
    $('button#confirmarCompra').removeAttr("disabled");
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

});

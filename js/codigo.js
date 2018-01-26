$(function() {

  // $("#confirmarCompra").click(abrir);

  // $('button#borrarCompra').on('click', borrarCompra);

  $('#menuFavCorrecto').on('click', mostrarCorrectoPedidoFav);
  $('#menuFavIncorrecto').on('click', mostrarIncorrectoPedidoFav);
  $('#cerrarFavCorrecto').on('click', cerrarCorrectoPedidoFav);
  $('#cerrarFavIncorrecto').on('click', cerrarIncorrectoPedidoFav);
  $('#confirmarCompra').on('click', mostrarAlertConfirmarCompra);
  $('#botonConfirmarCompra').on('click', cerrarAlertConfirmarCompra);
  $('#botonDenegarCompra').on('click', cerrarAlertConfirmarCompra);



  $(".alert").hide();


function cerrarAlertConfirmarCompra(){
  $('div#confirmarCompraAlert').slideUp();
  $('button#confirmarCompra').removeAttr("disabled");

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

  function mostrarAlertConfirmarCompra(){
    $('div#confirmarCompraAlert').slideDown();
    $('button#confirmarCompra').attr("disabled", "true");
  }

});

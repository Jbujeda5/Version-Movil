$(function() {

  // $("#confirmarCompra").click(abrir);

  // $('button#borrarCompra').on('click', borrarCompra);

  $('#menuFavCorrecto').on('click', mostrarCorrectoPedidoFav);
  $('#menuFavIncorrecto').on('click', mostrarIncorrectoPedidoFav);
  $('#cerrarFavCorrecto').on('click', cerrarCorrectoPedidoFav);
  $('#cerrarFavIncorrecto').on('click', cerrarIncorrectoPedidoFav);



  $(".alert").hide();



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

});


$(function(){

  $("#confirmarCompra").click(abrir);

  $('button#borrarCompra').on('click', borrarCompra);


  function borrarCompra(){
      $('#dialog').dialog();
  }

  $("#dialog").hide();

    function abrir() {

		$("#dialog").show();

    $( "#dialog" ).dialog({
      dialogClass: "no-close",
      buttons: [
        {
          text: "OK",
          click: function() {
            $( this ).dialog( "close" );
          }
        }
      ]
    });
	}

});

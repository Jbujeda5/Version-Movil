
$(function(){
  $('button#confirmarCompra').on('click', confirmarCompra);
  $('button#borrarCompra').on('click', borrarCompra);


  function borrarCompra(){
    alert("Compra Borrada");
  }
  function confirmarCompra(){
    alert("Compra Confirmada");
  }
});
var video = document.querySelector("#videoElement");



navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
    })
    .catch(function (error) {
        console.log('error:' + error);
    });
//var video = document.querySelector("#videoElement");
//
//navigator.mediaDevices.getUserMedia({
//        video: true
//    })
//    .then(function (stream) {
//        video.src = window.URL.createObjectURL(stream);
//    })
//    .catch(function (error) {
//        console.log('error:' + error);
//    })

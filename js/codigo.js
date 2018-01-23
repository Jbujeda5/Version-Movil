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

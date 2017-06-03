
window.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('video');
    var mediaConfig =  { video: true };
    var errBack = function(e) {
    	console.log('An error has occurred!', e)
    };

	
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            
        });
    }

}, false);
song = "";

function preload() {
    song = loadsound("music.mp3");
}
function setup() {
canvas = createcanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw() {
    image(video, 0, 600, 500)
}

function play() {
    song.play();
    
}
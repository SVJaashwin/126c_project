function preload() {
    music = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();

}

function draw() {
    image(video, 0, 0, 500, 500)
}

function play_music() {
    music.play();

    music.setVolume(1);
    music.setrate(1);
}
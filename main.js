function preload() {
    music = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on("pose", gotPoses);
}


function draw() {
    image(video, 0, 0, 500, 500)
}

function song_name() {

}

function gotPoses(result) {
    console.log(result)
    leftWrist_x = result[0].pose.leftWrist.x;
    leftWrist_y = result[0].pose.leftWrist.y;
    rightWrist_x = result[0].pose.rightWrist.x;
    rightWrist_y = result[0].pose.rightWrist.y;
    console.log('left_wristx=', leftWrist_x, 'left_wristy=', leftWrist_y);
    console.log('right_wristx=', rightWrist_x, 'right_wristy=', rightWrist_y)

}
rightWristx="";
rightWristy="";
leftWristx="";
leftWristy=""; 
song1="";
song2="";
function preload() {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
         
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristx = "+rightWristx+" rightWristy = "+rightWristy);
    }
}
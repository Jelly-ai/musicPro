songStatus = "";
song= 0;
song2= 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftWrist = 0;
rightWrist = 0;
songStatusRight = "";
function preload(){
   song =  loadSound("music.mp3");
   song2 =  loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
   posenet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWrist = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x =" + leftWristX + "left wirst y =" + leftWristY);

        RightWrist =  results[0].pose.keypoints[10].score;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x =" + rightWristX + "right wirst y =" + rightWristY);
    }
}

function draw(){
image(video,0,0,600,500);
songStatus = song.isPlaying();
songStatusRight = song2.isPlaying();
if (leftWrist > 0.2){
fill("#FF0000");
stroke("#FF0000");
circle(leftWristX,leftWristY,20);
song2.stop();

if ( songStatus = false) {
song.play()
}

if (songStatus = true){
    document.getElementById("song").innerHTML = "Song Name: Harry Potter Theme Song "
}
}

if (rightWrist > 0.2){
    fill("#FF0000");
    stroke("#FF0000");
    circle(rightWristX,rightWristY,20);
    song.stop();
    
    if ( songStatusRight = false) {
    song2.play()
    }
    
    if (songStatusRight = true){
        document.getElementById("song").innerHTML = "Song Name: Peter Pan Theme Song "
    }
    }
    
}

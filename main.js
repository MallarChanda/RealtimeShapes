noseX = 0;
noseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;

function setup() {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}

function modelLoaded() {
console.log("poseNet is Initialized!");   
}

function gotposes(results) {
if (results.length>0) {
console.log(results);
noseX = results[0].pose.nose.x;  
noseY = results[0].pose.nose.y;
console.log('nose x= ' + noseX + 'nose y= ' + noseY);
LeftWristX = results[0].pose.leftWrist.x;
RightWristX = results[0].pose.rightWrist.x;
difference = LeftWristX - RightWristX;
console.log("Left Wrist X= " + LeftWristX + "Right Wrist X= " + RightWristX + "difference= " + difference); 
}    
}

function draw() {
background('#969A97');
document.getElementById("square_size").innerHTML = "Width & Height of Square will be = " + difference + "px";
fill('#F90093');
stroke('#F90093'); 
square(noseX,noseY,difference);  
}
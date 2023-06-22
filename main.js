noseX = 0;
noseY = 0;
function preload() {
 l_lips = loadImage('https://i.postimg.cc/9M8TSFkt/result-1.png'); 
}

function draw() {
 image(video,0,0,300,300);
image(l_lips,noseX,noseY,60,50);
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results) {
 if (results.length>0) {
  console.log(results);
  noseX = results[0].pose.nose.x -15;
  noseY = results[0].pose.nose.y +15;
  console.log("noseX="+noseX);
  console.log("noseY="+noseY);
 }   
}

function modelLoaded() {
 console.log('model is loaded');  
}

function take_snapshot() {
 save('myfilter.png');
}
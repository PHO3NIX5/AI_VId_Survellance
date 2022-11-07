vid="";
test=false;
function preload(){
vid=createVideo("video.mp4");
vid.hide();

}
function setup(){
canvas=createCanvas(700,500);
canvas.center();

}
function draw(){
image(vid,0,0,700,500);
if(test==true){
    
}
}
function start(){
    OD=ml5.objectDetector("cocossd",modeloaded)
    document.getElementById("Status").innerHTML='Status: Detecting Objects';
}
function modeloaded(){
    console.log("Model Loaded")
    test=true;
    vid.loop();
    vid.speed(1);
    vid.volume(0);
}

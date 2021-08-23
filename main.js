canvas=document.getElementById('myCanvas');
ctx=canvas.getContext('2d');

var rover_width=100;
var rover_height=90;
var background_image="mars.jpg";
var rover_image="rover.png";
var rover_x=10;
var rover_y=10;

function add() {
    background_image_tag= new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    rover_image_tag= new Image();
    rover_image_tag.onload=uploadRover;
    rover_image_tag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown());
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed='38'){
        up();
        console.log("up");
    }
    if(keypressed='40'){
        down();
        console.log("down");
    }
    if(keypressed='37'){
        left();
        console.log("left");
    }
    if(keypressed='39'){
        right();
        console.log("right");
    }
}
//lerp is start + percentage * (end - start)


let startX = 50;
let startY = 50;
let stopX = 300;
let stopY = 300;
let myX = startX;
let myY = startY;
let myLerpPercent = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  myX = lerp(myX, stopX, myLerpPercent);
  myY = lerp(myY, stopY, myLerpPercent*3);
  ellipse (myX, myY, 100, 100);
}
//lerp is start + percentage * (end - start)


let startX = 50;
let startY = 50;
let stopX = 300;
let stopY = 300;
let myX = startX;
let myY = startY;
let myLerpPercent = 0.01;
let lerpS1 = -0.0;
let lerpS2 = 0.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  myX = lerp(myX, stopX, myLerpPercent);
  myY = lerp(myY, stopY, myLerpPercent*(lerp(lerpS1, lerpS2, 0.1)));
  ellipse (myX, myY, 100, 100);
}

function mousePressed() {
  stopX = mouseX;
  stopY = mouseY;
}

/**
 * Pointillism
 * by Daniel Shiffman. 
 * 
 * Mouse horizontal location controls size of dots. 
 * Creates a simple pointillist effect using ellipses colored
 * according to pixels in an image. 
 */
 
// The next line is needed if running in JavaScript Mode with Processing.js
/* @pjs preload="moonwalk.jpg"; */ 

var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("data/moonwalk.jpg");
}


function setup() {
  createCanvas(640, 360);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() { 
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = int(random(img.width));
  var y = int(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}

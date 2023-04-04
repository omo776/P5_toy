let shapeColor;

function setup() {
  createCanvas(700, 500);
  
  shapeColor = color(255,200,200); //background
}

function draw() {
  background(96, 100, 200)
  text("Click the circle to change color", 30, 20)
  noStroke();
  fill(shapeColor);
  ellipse(width/2, height/2, 180,180);
  
}

function mousePressed(){
  shapeColor = color(random(255), random(255), random(255) );
}

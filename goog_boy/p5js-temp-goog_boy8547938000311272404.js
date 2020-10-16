let state = 0;
let x = 1;
let y = 3;
function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  if (state == 0) {
    background(120);
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } 
  else if (state == x){
    background(60);
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  }
  else{
    background(98);
    noStroke();
    fill(0, 0, 250);
    ellipse(mouseX, mouseY, 50, 50);
}
}
function mousePressed() {
  if ( state == 0) {
    state = 1;
  } else if (state == x){
    state = y;
  }else{
    state = 0;
  }
}
    
  

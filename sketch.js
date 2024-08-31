
let scaler = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  
}

function draw() {
  background(0);
  noFill();
  
  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    push();

    rotate(sin(frameCount + i) * 100);

    let r = map(sin(frameCount), -i, 1, 50, 255);
    let g = map(cos(frameCount / 2), -i, 1, 50, 255);
    let b = map(sin(frameCount / 4), -i, 1, 50, 255);

  
    stroke(r,g,b)

    rect(0, 0, scaler - i * 3, 600 - i * 3, 200 - i);

    pop();
  }
if( scaler < 1000){
  scaler += 1;
}else{
  scaler = 0
}


  console.log(scaler)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let adjust = 10;
var col = {
  r:0,
  b:0,
  g:0,
}
let song
let myFont

function preload() {
  myFont = loadFont('ITCGrouch.ttf');
  soundFormats('mp3')
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(30)
  noCursor();
  noStroke();
  textFont(myFont);
  // textSize(36);
  textAlign(CENTER, CENTER);
}

function draw() {
  // let time = millis();
  // // rotateX(time / 1000);
  // rotateZ(time / 100);
  col.r= random(0,255)
  col.g= random(0,255)
  col.b= random(0,255)

  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      adjust++;
    }
    else if (keyCode === DOWN_ARROW) {
      adjust--;
    }
  }

  if (adjust <= 3) {
    adjust = 3;
  }
  if (adjust >= 20) {
    adjust = 20;
  }

  ortho();
  background(0);

  if (mouseIsPressed) {
    background(col.r,col.g,col.b)
  }

  var t = adjust / 5

  for (let i = 0; i < adjust; i++) {
    for (let j = 0; j < adjust; j++) {
      let map_x = map(i, 0, adjust - 1, -width / t, width / t);
      let map_y = map(j, 0, adjust - 1, -height / t, height / t);
      trip(map_x, map_y);
      console.log(t)

      if (mouseIsPressed) {
        drawTrigger(map_x,map_y)
      }
      else {
        drawWarning(map_x,map_y)
      }
    }
  }
}

function trip(x, y) {
  // let time = millis();
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  push();

  translate(x, y);
  let m2mx = map(mouseX, 0, width, -width / 2, width / 2);
  let m2my = map(mouseY, 0, height, -height / 2, height / 2);
  let roff = dist(m2mx, m2my, x, y) / -2;
  rotateY(radians(mouseX));
  rotateX(radians(mouseY));
  let s = (width / adjust / 3.2) + roff;
  fill(255);

  if(mouseIsPressed) {
    fill(col.r,col.g,col.b);
  }
  box(s);

  fill(0);
  if(mouseIsPressed) {
    fill(0);
  }
  sphere(s * 0.6);

  pop();
}

function drawTrigger(x,y){
  push();

  translate(x,y);
  let mmx = map(mouseX, 0, width, -width / 2, width / 2);
  let mmy = map(mouseY, 0, height, -height / 2, height / 2);
  let roff = dist(mmx, mmy, x, y) / -2;
  rotateY(radians(mouseX));
  rotateX(radians(mouseY));
  let s = (width / adjust / 2) + roff;
  textSize(50)
  text('TRIP', 1, 1);

  pop();
}

function drawWarning(x,y){
  textSize(100)
  text('WARNING', 1, 1);
}

function keyPressed(){
  //m
  if (keyCode === 77){
    if (song.isPlaying()){
      song.stop();
    }
    else{
      song.play()
    }
  }
}
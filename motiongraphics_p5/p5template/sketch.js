
let x = 0,
    y = 0,
    e = .05,
    s = 150;;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

function draw() {
  background(200, e * 255);

  x = ease(mouseX, x, e);
  y = ease(mouseY, y, e);
  fill(255);
  circle(x, y, s);

  debugMouse();
}

function debugMouse() {
  let msg = "direct:\nx: " + nf(mouseX, 3, 1) + " / y: " + nf(mouseY, 3, 1);
  msg += "\n\nease:\nx: " + nf(x, 3, 1) + " / y: " + nf(y, 3, 1);
  fill(200);
  text(msg, x - s / 3, y - s / 5);
}
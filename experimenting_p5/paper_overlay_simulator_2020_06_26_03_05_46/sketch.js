const noiseR = 2;

function setup() {
  colorMode(HSL, 360, 100, 100);
  const baseColor = color(178, 66, 34);
  const h = hue(baseColor);
  const s = saturation(baseColor);
  const b = lightness(baseColor);
  createCanvas(1080, 1080);
  background(220);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const n = random(-noiseR, noiseR);
      set(x, y, color(h, s, constrain(b + n, 0, 100)));
    }
  }
  updatePixels();
}

function draw() {
  noLoop();
}
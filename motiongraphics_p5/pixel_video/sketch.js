let capture, thresholdAmount, scl,
    mx, my, ex, ey, easing = .03;

function setup() {
    createCanvas(1080, 1080);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide(); // hide raw camera
    noSmooth();
    imageMode(CENTER);
    mx = 100;
    my = 50;
    ex = my;
    ey = mx;
    scl = width / capture.width;
    thresholdAmount = 127;
}

function draw() {
    background(0, ey * .1);

    processMouse();
    processCamera();

    image(capture, width / 2, height / 2, capture.width * scl, capture.height * scl);
}

function processMouse() {
    if(mouseIsPressed) {
        mx = map(mouseX, 0, width, 0, 255);
        my = map(mouseY, 0, height, 0, 255);
    }
    ex = ease(mx, ex, easing);
    ey = ease(my, ey, easing);

    scl = ey / 10;
    thresholdAmount = ex

}

function processCamera() {
    capture.loadPixels();
    if(capture.pixels.length > 0) {
        let pixels = capture.pixels;

        let i = 0;
        for(var y = 0; y < capture.height; y++) {
            for(let x = 0; x < capture.width; x++) {
                let redValue = pixels[i];
                let outputValue = 0;
                if(redValue >= thresholdAmount) {
                    outputValue = 255;
                }

                pixels[i++] = abs((frameCount * .0012)) * mouseX % 255;
                pixels[i++] = abs((frameCount * .003)) * ex % outputValue;
                pixels[i++] = abs((frameCount * .0021)) * mouseY % 255;
                pixels[i++] = outputValue;

                pixels[i++] = 255;
                pixels[i++] = 255;
            }
        }
    }
    capture.updatePixels();
}
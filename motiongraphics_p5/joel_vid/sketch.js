let vid1;
let vid1playing = false;
let vid2;
let vid2playing = false;

function setup() {
    cnv = createCanvas(1000, 500, WEBGL);
    background(250);
}

function preload(){
    vid1 = createVideo('sloshmafia_8.mp4');
    vid1.mute
    vid1.hide();
    console.log("video")
    vid2 = createVideo('TinyDorm_Demo2copy.mp4');
    vid2.mute
    vid2.hide();
    console.log("video2")
}

function draw() {
    orbitControl();
    background(250);
    texture(vid1);
    plane(innerWidth/3, innerHeight/3);
    translate(0, 0, -20)
    texture(vid2)
    plane(innerWidth/3, innerHeight/3);
}

function mouseClicked(){
    toggleVid()
}

function mouseDragged(){
    vid1.pause();
    vid1playing = false;
    vid2.pause();
    vid2playing = false;
}

function toggleVid() {
    if (vid1playing){
        vid1.pause();
        vid1playing = false;
        vid2playing = true
        vid2.play()
    }
    else {
        vid2.pause();
        vid2playing = false;
        vid1.play();
        vid1playing = true;
        }
}

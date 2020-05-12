/*	_libs_voronoi // cc teddavis.org 2020 */

let libs = [
    'https://cdn.jsdelivr.net/npm/voronoi@1.0.0/rhill-voronoi-core.js' // remote
    , 'includes/demos-data/js/rhill-voronoi-core.js' // load locally (if offline)
    , 'includes/demos-data/js/voronoi-p5live.js'
];

let bbox, voronoi;
let sites = [],
    edges = [];
let initTypo = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bbox = {
        xl: 0,
        xr: width,
        yt: 0,
        yb: height
    };
    voronoi = new Voronoi();

    // pre-loading custom points from 'voronoi-p5live.js'
    typoPoints();

    stroke(255);
    strokeWeight(2);

}

function draw() {
    background(0);

    if(mouseIsPressed) {
        if(initTypo) {
            sites = [];
            initTypo = false;
        }
        addPoints(mouseX, mouseY);
    }

    beginShape(LINES)
    for(var i = 0; i < edges.length; i++) {
        let edge = edges[i];
        vertex(edge.va.x, edge.va.y);
        vertex(edge.vb.x, edge.vb.y);
    }
    endShape();
}

function addPoints(x, y) {
    sites.push({
        x: x,
        y: y
    });
    result = voronoi.compute(sites, bbox);
    edges = result.edges;
}

// custom preloaded points interpreter
function typoPoints() {
    for(let t of p5typo) {
        sites.push({
            x: t.x * width,
            y: t.y * height + height / 5
        });
    }
    result = voronoi.compute(sites, bbox);
    edges = result.edges;
}
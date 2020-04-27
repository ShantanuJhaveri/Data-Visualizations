function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);
  // pg = createGraphics(400, 250);
  const particlesLength = Math.floor(window.innerWidth/10);
  for(let i = 0; i < particlesLength; i++) {
  particles.push(new Particle());
  };
}

const particles = [];

class Particle {
  constructor() {
    this.pos = createVector(random(width),random(height));
    this.size = 10;
    this.vel = createVector(random(-20,+20),random(-20,+20))
  }

  update(){
    this.pos.add(this.vel);
    this.edges();
  }

  draw(){
    noStroke();
    fill(255, 204, 0,);
    circle(this.pos.x,this.pos.y,this.size)
  }

  edges(){
    if(this.pos.x < 0 || this.pos.x>width) {
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y>height) {
      this.vel.y *= -1;
    }
  }

  checkParticles(particles){
    //https://p5js.org/examples/simulate-particles.html
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if(d < 120){
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
        stroke(255,204,0)
      }
    })
  }
}

function draw(){
  background(238,238,238);
  particles.forEach((p, index) => {
      p.update()
      p.draw()
      p.checkParticles(particles.slice(index))
      }
  )
  mouseX = constrain(mouseX, 10, width)
  mouseY = constrain(mouseY, 10, height)

  arcsize1 = mouseY
  arcsize = mouseX

  // if (mouseIsPressed) {
  //   fill(0)
  // }else{
  //   fill(10)
  // }
  // fill(0,20);
  // rect(0, 0, width, height);
  // // fill(255);
  // noStroke();
  // ellipse(mouseX, mouseY, 60, 60);

  noFill();
  stroke(20);

  var r = random()

  strokeWeight(66);
  arcL = map(mouseY, 0, mouseY, 0, TWO_PI)
  arc(width/2,height/2, arcsize1,arcsize1,0,arcL);

  stroke(255, 204, 0);
  arc(width/2,height/2, arcsize1/1.1,arcsize1/1.1,0,arcL)

  stroke(255, 204, 255);
  arc(width/2,height/2, arcsize1/1.5,arcsize1/1.5,0,arcL)

  stroke(255, 204, 155);
  arc(width/2,height/2, arcsize1/2,arcsize1/2.1,0,arcL)

  stroke(255, 204, 255);
  arc(width/2,height/2, arcsize1/3,arcsize1/3.1,0,arcL)

  arcL2 = map(mouseX, 0, mouseX, 0, TWO_PI)

  stroke(0, 0, 0);
  arc(0,0, arcsize/1.2,arcsize/1.2,0,arcL2)

  stroke(0, 0, 0);
  arc(0,height, arcsize/1.2,arcsize/1.2,0,arcL2)

  stroke(0, 0, 0);
  arc(width,0, arcsize/1.2,arcsize/1.2,0,arcL2)

  stroke(0,0,0);
  arc(width,height,arcsize/1.2,arcsize/1.2,0,arcL2)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}


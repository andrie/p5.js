if (typeof knitr_width === 'undefined' || knitr_width === null) {
    var knitr_width = 1024;
}

if (typeof knitr_height === 'undefined' || knitr_height === null) {
    var knitr_height = 768;
}


function setup() {
  createCanvas(knitr_width, knitr_height);
  background(255);
}

t = 0;
i = 0;
n = 300; // increments before pause
p = 5000; // pause time in milliseconds
tinc = 0.01;

var pausetime;

function draw() {
  if (i == 1) {
    print(t);
  }
  if (i < n ) {
    bezier_curves();
  }
  if (i == n) {
    pausetime = millis();
  }
  if (i > n & millis() > pausetime + p) {
    clear();
    i = 0;
  }
  i++;
}



function bezier_curves () {

  noFill();

  c1 = noise(1 + t*0.5) * 255;
  c2 = noise(2 + t*0.5) * 255;
  c3 = noise(3 + t*0.5) * 255;
  stroke(c1, c2, c3, 100);

  bx = width * 1.2;
  by = height * 1.2;
  s = 0.25;
  x1 = noise(t+0) * width;
  y1 = noise(t+1) * height;
  x2 = noise(t+2) * width;
  y2 = noise(t+3) * height;

  c1x = noise(s*t+1) * bx - 0.5 * bx;
  c1y = noise(s*t+5) * by - 0.5 * by;
  c2x = noise(s*t+2) * bx - 0.5 * bx;
  c2y = noise(s*t+6) * by - 0.5 * by;


  beginShape();
  vertex(x1, y1);
  bezierVertex(
    x1 + c1x,
    y1 + c1y,
    x2 + c2x,
    y2 + c2y,
    x2, y2
  );
  bezierVertex(
    x2 - c2x,
    y2 - c2y,
    x1 - c1x,
    y1 - c1y,
    x1, y1
  );
  endShape();


  t += tinc;

}

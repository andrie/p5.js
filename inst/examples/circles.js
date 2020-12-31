if (typeof knitr_width === 'undefined' || knitr_width === null) {
    var knitr_width = 1024;
}

if (typeof knitr_height === 'undefined' || knitr_height === null) {
    var knitr_height = 768;
}

var t, t_inc;

function setup() {
  createCanvas(knitr_width, knitr_height);
  t = 0;
  t_inc = 0.005;
}

function draw() {
  translate(0, height / 2);
  fill(noise(t + 0) * 255, noise(t + 1) * 255, noise(t + 2) * 255);
  ellipse(width * 1 / 4, 0, height * 4 / 10);
  //p.fill(noise(t + 0.1) * 255, noise(t + 1.1) * 255, noise(t + 2.1) * 255);
  //p.ellipse(width * 2 / 4, 0, height * 5 / 10);
  //p.fill(noise(t + 0.2) * 255, noise(t + 1.2) * 255, noise(t + 2.2) * 255);
  //p.ellipse(width * 3 / 4, 0, height * 6 / 10);
  t += t_inc;
}


var t, t_inc;
if (typeof knitr_width === 'undefined' || knitr_width === null) {
    var knitr_width = 1024;
}

if (typeof knitr_height === 'undefined' || knitr_height === null) {
    var knitr_height = 768;
}

function setup() {
  p.createCanvas(knitr_width, knitr_height);
  t = 0;
  t_inc = 0.005;
}

function noiseColor(t, r = 0, g = 1, b = 1) {
  return p.color(
    p.noise(t + r) * 255, 
    p.noise(t + g) * 255, 
    p.noise(t + b) * 255
  );
}

function draw() {
  p.translate(0, p.height / 2);
  p.fill(noiseColor(t));
  p.ellipse(p.width * 3 / 4, p.height * 2/10, p.height * 4 / 10);
  p.fill(noiseColor(t + 0.1));
  p.ellipse(p.width * 2 / 4, p.height * 1/10, p.height * 5 / 10);
  p.fill(noiseColor(t + 0.2));
  p.ellipse(p.width * 1 / 4, 0, p.height * 6 / 10);
  t += t_inc;
}

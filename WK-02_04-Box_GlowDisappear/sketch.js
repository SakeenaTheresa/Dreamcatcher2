let boxColor = 255;
let colorChange = 1;
let bgColor = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(20, 100, 100);
    rectMode(CENTER);

    if (boxColor > 255 || boxColor < bgColor) {
      colorChange = -colorChange;
    }
    boxColor = boxColor + colorChange;
    noFill();
    stroke(boxColor);

  line(200, 0, 200, 40);
circle(200, 100, 120);
  circle(200, 130, 60);
  circle(200, 70, 60);
  circle(230, 100, 60);
  circle(170, 100, 60);
  circle(178, 120, 60);
  circle(178, 80, 60);
  circle(222, 120, 60);
  circle(222, 80, 60);
  line(200, 160, 200, 165);
circle(200, 210, 90);
  circle(200, 232, 45);
  circle(200, 188, 45);
  circle(178, 212, 45);
  circle(222, 212, 45);
  circle(185, 226, 45);
  circle(215, 226, 45);
  circle(185, 194, 45);
  circle(215, 194, 45);
  line(200, 255, 200, 260);
circle(200, 290, 60);
  circle(215, 290, 30);
  circle(185, 290, 30);
  circle(200, 305, 30);
  circle(200, 275, 30);
  circle(190, 300, 30);
  circle(190, 280, 30);
  circle(210, 300, 30);
  circle(210, 280, 30);
  line(200, 320, 200, 325);
circle(200, 340, 30);
  circle(200, 348, 15);
  circle(200, 332, 15);
  circle(192, 340, 15);
  circle(208, 340, 15);
circle(100, 160, 30);
  circle(100, 168, 15);
  circle(100, 152, 15);
  circle(92, 160, 15);
  circle(108, 160, 15);
circle(300, 160, 30);
  circle(300, 168, 15);
  circle(300, 152, 15);
  circle(292, 160, 15);
  circle(308, 160, 15);
 arc(200, 145, 200, 250, PI, TWO_PI);

}

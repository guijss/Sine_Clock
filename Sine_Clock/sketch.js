var ph;
var w;
var timesec;
var y;
var h;
var m;
var s;
var posx = 0;
var posy = 0;

function setup() {
  createCanvas(800, 200);
  stroke(255);
}

function draw() {
  background(50);
  translate(0, 100);
  line(0, 0, 800, 0);
  line(400, -50, 400, 50);
  timesec = hour()*3600 + minute()*60 + second();
  w = map(timesec, 0, 86400, 0, 400); // HERE!!!!
  ph = map(timesec, 0, 86400, 0, TWO_PI);
  for (var x = 0; x <= 800; x+=5) {
    y = sin(x*0.01566666+ph)*40;
    if (x > 0) {
      line(posx, posy, x, y);
    }
    posx = x;
    posy = y;
  }

  push()
  strokeWeight(4);
  line(800-w, -90, 800-w, -80);
  line(790-w, -90, 800-w, -90);

  line(800-w, 90, 800-w, 80);
  line(790-w, 90, 800-w, 90);

  line(400-w, -90, 400-w, -80);
  line(410-w, -90, 400-w, -90);

  line(400-w, 90, 400-w, 80);
  line(410-w, 90, 400-w, 90);
  pop()

  push()
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(12);
  if (hour() < 10) {
    h = "0"+str(hour());
  } else {
    h = hour();
  }
  if (minute() < 10) {
    m = "0"+str(minute());
  } else {
    m = minute();
  }
  if (second() < 10) {
    s = "0"+str(second());
  } else {
    s = second();
  }
  text(h +":"+ m +":"+ s, 400, -60);
  pop()

  push()
  noStroke();
  fill(255);
  textAlign(LEFT);
  textSize(12);
  text("Today: " + month() + "/" + day() + "/" + year(), 410-w, -75);
  pop()
}

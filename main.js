function preload() {
}

function setup() {
  canvas = createCanvas(600, 400);
  canvas.position(120, 300);
  video = createCapture(VIDEO);
  video.hide();
  
}


function take_snapshot() {
  save("snapshot.png");
}

function draw() {
  image(video, 0, 0, 600, 400);
  circle(10, 10, 20);
  circle(10, 30, 20);
  circle(10, 50, 20);
  circle(10, 70, 20);
  circle(10, 90, 20);
  circle(10, 110, 20);
  circle(10, 130, 20);
  circle(10, 150, 20);
  circle(10, 170, 20);
  circle(10, 190, 20);
  circle(10, 210, 20);
  circle(10, 230, 20);
  circle(10, 250, 20);
  circle(10, 270, 20);
  circle(10, 290, 20);
  circle(10, 310, 20);
  circle(10, 330, 20);
  circle(10, 350, 20);
  circle(10, 370, 20);
  circle(10, 390, 20);
  circle(10, 410, 20);
  circle(10, 150, 20);


  circle(590, 10, 20);
  circle(590, 30, 20);
  circle(590, 50, 20);
  circle(590, 70, 20);
  circle(590, 90, 20);
  circle(590, 110, 20);
  circle(590, 130, 20);
  circle(590, 150, 20);
  circle(590, 170, 20);
  circle(590, 190, 20);
  circle(590, 210, 20);
  circle(590, 230, 20);
  circle(590, 250, 20);
  circle(590, 270, 20);
  circle(590, 290, 20);
  circle(590, 310, 20);
  circle(590, 330, 20);
  circle(590, 350, 20);
  circle(590, 370, 20);
  circle(590, 390, 20);
  circle(590, 410, 20);
  circle(590, 150, 20);

}
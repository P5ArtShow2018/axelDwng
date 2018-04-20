
var x = 500
var y = 500



function setup() {
 createCanvas(windowWidth,windowHeight)
 background(255,0,0)
}

function draw() {
  line(0,0,x,y)
if(keyIsDown(UP_ARROW))
y += 5

if(keyIsDown(DOWN_ARROW))  {
y -= 5
}

if(keyIsDown(LEFT_ARROW)) {
  x -= 5
}

if(keyIsDown(RIGHT_ARROW)) {
  x += 5
}

}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

let moonColor = '#ffee89';
let bgColor = '#1C1B2F';
var radius = 200;
var frames = 30;

var delay = 0;

var dayNumber = 1;


function setup() {
  createCanvas(400,400);
  frameRate(30);
}

function draw() {
  background(bgColor);

push();
translate(100,100);
      fill(255);
      text(dayNumber, 50, 200);  
      pop();
      
  push();
  
    //  translate(0, 0);
      drawMoon(dayNumber, width/2, height/2);

    
      pop();



if ((frameCount % 20) == 1) {
	if (dayNumber < 30){
		        dayNumber = dayNumber+1;
	}else{
        	dayNumber = 1;
        }
                  console.log(dayNumber);
}
  
     

  
}

function drawMoon( dayNumber,  moonXPos,  moonYPos) {
//  var t = (((frameCount/50)%frames)/frames);
var t = map(dayNumber, 1, 30, 0.0, 1.0);

//if (frameCount % 100) {

//}


  translate(moonXPos, moonYPos);
  //Moon growing to full moon
  if (t < 0.5) { 
    var tt = map(t, 0, 0.5, 0, 1); 
    if (tt < 0.5) { 
     
      var r = map(tt, 0, 0.5, radius, 0);
      fill(moonColor);
      arc(0, 0, radius, radius, PI/2, PI*1.5); //left moon
      fill(bgColor);
      arc(0, 0, r, radius, PI/2, PI*1.5); //left background shrinking
    } else {
      
      var r = map(tt, 0.5, 1, 0, radius);
      fill(moonColor);
      arc(0, 0, r, radius, -PI/2, PI/2); //right moon growing
      arc(0, 0, radius, radius, PI/2, PI*1.5); //left moon
    }
    //Moon shrinking to new moon
  } else {
    var tt = map(t, 0.5, 1, 0, 1);
    if (tt < 0.5) {
      var r = map(tt, 0, 0.5, radius, 0); 
      fill(bgColor);
      arc(0, 0, radius, radius, PI/2, PI*1.5); //left background
      fill(moonColor);
      arc(0, 0, radius, radius, -PI/2, PI/2); //right moon
      arc(0, 0, r, radius, PI/2, PI*1.5); //left moon shrinking
    } else {
      var r = map(tt, 0.5, 1, 0, radius); 
      fill(moonColor);
      arc(0, 0, radius, radius, -PI/2, PI/2); //right moon
      fill(bgColor);
      arc(0, 0, r, radius, -PI/2, PI/2); //right background growing
    }
  }
}
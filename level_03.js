let fuck;
let notreffa;
let mouseF;
var nextLevel;
let cursa;
let schein;
let beginn;


function preload(){
  fuck = loadImage('chemnitz.jpg');
 notreffa = loadImage('nope_31.png');
  mouseF = loadImage('curzaNEU.png');
 schein = loadImage('schein_30_2.png');
beginn = loadImage('beginn_2_2.png');
   
 }

  
function setup() {
    
    let canvas = createCanvas(3196, 631);                
    canvas.position(50,150);
    nextLevel = createImg('animation_6_2.gif');
   
    
noStroke();
noCursor();
  
 
}


function draw() {
    
  
  hintergrund();

if (mouseX<12 && mouseY>250 && mouseY<375){
    
   image(beginn,10,10);
  }
	

  if (((((mouseIsPressed)&&(mouseX>64)&&(mouseX<72)&&(mouseY>548)&&(mouseY<561))))){


     
   noLoop();
    image(schein,30,505);
    nextLevel.position(11,420);


       }
       
 
  if ((mouseIsPressed) && (mouseX<64)){
    image(notreffa, mouseX-120, mouseY-190);
 		//rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }
  if ((mouseIsPressed) && (mouseX>72)){
    image(notreffa, mouseX-120, mouseY-190);
 		//rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }
    if ((mouseIsPressed) && (mouseY<548)){
    image(notreffa, mouseX-120, mouseY-190);
 		//rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }
      if ((mouseIsPressed) && (mouseY>561)){
    image(notreffa, mouseX-120, mouseY-190);
 		//rect(0,0,3196,631);  
   	//fill(255,0,0,50);
  }

       }

function hintergrund() {
  image(fuck,0,0);
	image(mouseF,mouseX-29,mouseY-40,80,80);
    


}

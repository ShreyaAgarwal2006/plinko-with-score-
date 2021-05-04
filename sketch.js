var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var divisions = [];
var push;
var score = 0;
var particle;
var count = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {


  background("black");
  if(gameState === "play" ){
  text("(" + mouseX + "," + mouseY + ")" , mouseX,mouseY);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(count >= 5){
     gameState = "end";
   }

   if(particle != null){
    particle.display(); 

    if(particle.body.position.y > 760){

      if(particle.body.position.x<300){

        score = score + 500;
        particle = null;
      }else if(particle.body.position.x>300 && particle.body.position.x<560){

        score = score + 1000;
        particle = null;
      }else{
        score = score +200;
        particle = null;
      }
    }
   }

   textSize(30);
   text("score  : " + score,600,50);
   text("500",15,700);
   text("500",100,700);
   text("500",180,700);
   text("500",245,700);
   text("1000",325,700);
   text("1000",405,700);
   text("1000",490,700);
   text("200",580,700);
   text("200",660,700);
   text("200",740,700);
   
  }else{
    textSize(40);
    text("GAME OVER",350,400);
  }

  // drawSprites();
}

function mousePressed(){
  if(gameState != "end"){
    particle = new Particle(mouseX,10,10,10);
    count++;
  }

}
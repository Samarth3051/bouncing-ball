const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.x);
  var balloptions ={
    restitution:1.0
  }
  ball = Bodies.circle(200,100,20,balloptions);
  World.add(world,ball);
  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,40);
}
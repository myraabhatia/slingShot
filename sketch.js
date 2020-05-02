const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder1,holder2;
var ball1
var block1,block2;


function setup(){
   var  canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

holder1 = new holder(390,300,300,20)
holder2 = new holder(700,200,300,20);
block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);



ball = new Ball(mouseX,mouseY,20,20)


}

function draw(){
    background("blue")
    Engine.update(engine);
holder1.display();
holder2.display();
ball.display();

block1.display();
block2.display();



}
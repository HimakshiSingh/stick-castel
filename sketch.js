const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ground,rectangle,rectangle1,rectangle2
var circle,circle1,circle2
var tri

function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20)
   rectangle = new Rectangle(200,320,60,120)
   rectangle1 = new Rectangle(245,305,30,150)
   rectangle2 = new Rectangle(155,305,30,150)

   circle = new Circle(155,210,20,20)
   circle1 = new Circle(245,210,20,20)
   circle2 = new Circle (200,230,30,30)
    tri = new Triange (100,200,20,20,20,20)
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  rectangle.display();
  rectangle1.display();
  rectangle2.display();
  circle.display();
  circle1.display();
  circle2.display();
  tri.display();
  
}
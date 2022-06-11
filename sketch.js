const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg,ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var monster;

function preload (){
backgroundImg = loadImage ("GamingBackground.jpg")
}

function setup (){
    canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;

    monster = new Monster(1100,400,300,300)
    ground = new Ground(600,800,1200,20);
    hero   = new Hero (400,100,350,350)

    box1   = new Boxes (700,100,70,70);
    box4   = new Boxes (700,100,70,70);
    box5   = new Boxes (700,100,70,70);
    box6   = new Boxes (700,100,70,70);
    box7   = new Boxes (700,100,70,70);
    box8   = new Boxes (700,100,70,70);
    box9   = new Boxes (700,100,70,70);
    box10   = new Boxes (700,100,70,70);

    box2  = new Boxes (800,100,70,70);
    box11   = new Boxes (800,100,70,70);
    box12  = new Boxes (800,100,70,70);
    box13   = new Boxes (800,100,70,70);
    box14   = new Boxes (800,100,70,70);
    box15  = new Boxes (800,100,70,70);
    box16   = new Boxes (800,100,70,70);

    box3   = new Boxes (900,100,70,70);
    box17   = new Boxes (900,100,70,70);
    box18   = new Boxes (900,100,70,70);
    box19   = new Boxes (900,100,70,70);
    box20   = new Boxes (900,100,70,70);
    box21   = new Boxes (900,100,70,70);
    
}

function draw (){
    background(backgroundImg);
    Engine.update(engine);

    ground.show();
    box1.show();
    box2.show();
    box3.show();
    box4.show();   
    box5.show(); 
    box6.show();   
    box7.show();   
    box8.show();   
    box9.show();   
    box10.show();  
    box11.show();
    box12.show();   
    box13.show(); 
    box14.show();   
    box15.show();   
    box16.show();   
    box17.show(); 
    box18.show();
    box19.show();   
    box20.show();
    box21.show();
    monster.show();
    hero.show();
}















































































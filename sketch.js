const E = Matter.Engine
const W = Matter.World
const B = Matter.Bodies

var en, wo
var b1, b2

function setup(){
 createCanvas(400,600);

 //create an engine
 en  = E.create()

 //accesing the world
 wo = en.world
 console.log(wo)

//object name = new Classname()
b1 = new Box(100,20)
b2 = new Box(200,50)


}
function draw()
{
  background(0);
  E.update(en)
 
  b1.display()
  b2.display()

  
}

//rectangle  => rect
//circle => ellipse()
//pentagon => vertex()

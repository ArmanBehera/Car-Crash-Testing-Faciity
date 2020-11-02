var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = "blue";

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeCOlor = (80, 80, 80);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;

  deformation = 0.5 * speed * speed * weight / 22500;
}

function draw() {
  background(255,255,255);
  
  console.log(deformation);

  if (wall.x - car.x <= wall.width / 2 + car.width / 2){

    car.velocityX = 0;

    if (deformation < 100){

      car.shapeColor = "green";

    }

    else if(deformation > 100 && deformation < 180){

      car.shapeColor = "yellow";
    }

    else{
      
      car.shapeColor = "red";
    }
    

  }

  drawSprites();
}
var INN = 0,
  SET = 1,
  PLAY = 2,
  END = 3;
var gameState = INN;

var bk, bkk1, bkk2, bkk3, bkk4;

var alien, alienR, alienJ, alienD;

var invisibleG;

var info, infobk;

var devil, devilbk, devilGroup;

var skull, skullbk, skullGroup;

var diamond, diamondbk, diamondGroup;

var emerald, emeraldbk, emeraldGroup;

var ruby, rubybk, rubyGroup;


var pack4, packItem4 = 0,
packbk4;

var pack5, packItem5 = 0,
packbk5;

var pack6, packItem6 = 0,
packbk6;

var score = 0;

var hold;

var jump, jumpbk;

var rbk, mbk, obk, qbk;

var redB, myB, opB, qpB, redBb, myBb, opBb, qpBb;

var startbk;
 var innbk;

 var du, dubk;

function preload() {

  bkk1 = loadImage("wp5317006.jpg");

  bkk2 = loadImage("cartoon-sci-fi-game-seamless-background-alien-planet-landscape-mountain-crater-visualization-fantasy-nature-view_1284-41500.jpg");

  bkk3 = loadImage("Open-Star-Cluster-NGC-299.jpg");

  bkk4 = loadImage("quantum realm.jpg");

  alienR = loadImage("alien 2.png");

  alienJ = loadImage("alien jump.png");

  alienD = loadImage("alien duck.png");

  infobk = loadImage("info.png");

  devilbk = loadImage("devil.png");

  skullbk = loadImage("skull.png");

  diamondbk = loadImage("diamond.png");

  emeraldbk = loadImage("emarald.png");

  rubybk = loadImage("ruby.png");


  packbk4 = loadImage("diamond.png");

  packbk5 = loadImage("emarald.png");

  packbk6 = loadImage("ruby.png");

  jumpbk = loadImage("jump button.png");

  dubk = loadImage("down.png")

  mbk = loadImage("mbk.png");

  rbk = loadImage("rbk.png");

  obk = loadImage("obk.png");

  qbk = loadImage("qbk.png");

  startbk = loadImage("start.png");

  innbk = loadImage("innbk.jpg");


}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background("black");

  bk = createSprite(width/2, 200, 400, 400);
  bk.addImage(innbk);

  //bk.scale = 0.75;
  //bk.velocityX = -5;

  info = createSprite(35, 35, 10, 10);
  info.addImage(infobk);
  info.scale = 0.07

  alien = createSprite(50, 310, 50, 35);
  alien.addImage(alienR);
  alien.setCollider("rectangle", 0, 0, 65, 85, 0)

  //alien.debug = true

  invisibleG = createSprite(60, 350, 100, 10);
  invisibleG.visible = false;

  jump = createSprite(50, height/2 + 160, 30, 30);
  jump.addImage(jumpbk);
  jump.scale = 0.15;
  //jump.debug = true;

  du = createSprite(130, height/2 + 160, 30, 30);
  du.addImage(dubk);
  du.scale = 0.30;
  //jump.debug = true;



  devilGroup = createGroup();

  skullGroup = createGroup();

  batGroup = createGroup();

  emeraldGroup = createGroup();

  diamondGroup = createGroup();

  rubyGroup = createGroup();


  pack4 = createSprite(info.x + 40, info.y, 20, 20);
  pack4.addImage(packbk4);
  pack4.scale = 0.25

  pack5 = createSprite(info.x + 125, info.y, 20, 20);
  pack5.addImage(packbk5);
  pack5.scale = 0.25

  pack6 = createSprite(info.x + 205, info.y, 20, 20);
  pack6.addImage(packbk6);
  pack6.scale = 0.25
    
  hold = createSprite(width/2, 60,width,5);
  hold.shapeColor = rgb(253, 96, 0);

  redB = createSprite(width/2 - 300, height/2, 50, 100);
  redB.addImage(rbk)
  redB.scale = 0.40
  redB.visible = true

  redBb = createSprite(width/2 - 310, height/2 + 80, 100, 25);
  //redBb.visible = false


  myB = createSprite(width/2 - 100, height/2, 50, 100);
  myB.addImage(mbk)
  myB.scale = 0.40
  myB.visible = true

  myBb = createSprite(width/2 - 110, height/2 + 80, 100, 25);
  myBb.visible = true;

  opB = createSprite(width/2 + 100, height/2, 50, 100);
  opB.addImage(obk)
  opB.scale = 0.40
  opB.visible = true

  opBb = createSprite(width/2 + 100, height/2 + 80, 100, 25);
  //opBb.visible = false

  qpB = createSprite(width/2 + 300, height/2, 50, 100);
  qpB.addImage(qbk)
  qpB.scale = 0.40
  qpB.visible = true

  qpBb = createSprite(width/2 + 300, height/2 + 80, 100, 25);
  qpBb.visible = false

  start = createSprite(width/2, height/2, 100, 50);
  start.addImage(startbk);

}

function draw() {

  background("black");

  drawSprites();
  
  text("Score: " + score, width - 200, 35, fill("white"),textSize(20));

  alien.collide(invisibleG);
  
  //alien.bounceOff(hold);


  if (mouseIsOver(info)) {
    
    text("press the jump buttion to jump from the obstacles", 10, 55, fill("white"),textSize(17.5));

    text("and obtain", 10, 70, fill("white"),textSize(17.5));

    text("the gems to boost your power packs", 10, 85, fill("white"),textSize(17.5));

    text("and keep exploring!!", 10, 115, fill("white"),textSize(17.5));

    
    text("Remember, as you go high, try not to touch the red line which would", 10, 145, fill("white"),textSize(17.5));
  
    text("kill u off.", 10, 160, fill("white"),textSize(17.5));
  }

  text("you", alien.x + 35, alien.y - 40, fill("white"), textSize(20));

  text("= " + packItem4, pack4.x + 20, pack4.y + 5);

  text("= " + packItem5, pack5.x + 20, pack5.y + 5);

  text("= " + packItem6, pack6.x + 20, pack6.y + 5);

  if (gameState === INN){

    redB.visible = false
    myB.visible = false
    opB.visible = false
    qpB.visible = false
    redBb.visible = false
    myBb.visible = false
    opBb.visible = false
    qpBb.visible = false



    start.visible = true;

    if(mousePressedOver(start)){
      gameState = SET;
    }

  }



  if (gameState === SET) {
    packItem = 0;
    bk.velocityX = 0;

    text("Choose your destination:", width/2 - 150, 100, fill("white"),textSize(25))
    //text("The red planet: press 'r'", width/2 - 95, 125, fill("white"),textSize(25))
    //text("The mystical planet: press 'm'", width/2 - 125, 150, fill("white"),textSize(25))
    //text("The open space: press 'o'", width/2 - 100, 175, fill("white"),textSize(25))
    start.visible = false;
    redB.visible = true
    myB.visible = true
    opB.visible = true
    qpB.visible = true
    redBb.visible = false
    myBb.visible = false
    opBb.visible = false
    qpBb.visible = false



    if (mousePressedOver(myBb)) {
      bk.addImage(bkk1)
      gameState = PLAY;
      
    }

    if (mousePressedOver(redBb)) {
      bk.addImage(bkk2)
      gameState = PLAY;
      
    }

    if (mousePressedOver(opBb)) {
      bk.addImage(bkk3)
      gameState = PLAY;
      
    }

    if (mousePressedOver(qpBb)) {
      bk.addImage(bkk4)
      gameState = PLAY;
      
    }


  }

  if (gameState === PLAY) {

    start.visible = false;
    redB.visible = false
    myB.visible = false
    opB.visible = false
    qpB.visible = false
    redBb.visible = false
    myBb.visible = false
    opBb.visible = false
    qpBb.visible = false
    
    score = score + Math.round(setFrameRate() / 60);
    
    bk.velocityX = -(8 + 3 * score / 100);

    if (bk.x < 0) {
      bk.x = bk.width / 2;
    }




    if (mousePressedOver(jump) && alien.y >= 120) {
      alien.velocityY = -13;
    }



    

    if(alien.y < 275){
      alien.addImage(alienJ)
    }

    if(alien.y > 275){
      alien.addImage(alienR);
      
      if (mousePressedOver(du)) {
        alien.addImage(alienD)
        alien.y = 310 + 15
        alien.scale = 0.8
      }
      else{
        alien.scale = 1
      }
    }

    alien.velocityY = alien.velocityY + 0.8

    evil1();

    evil2();

    Diamond();

    Emerald();

    Ruby();


    if (diamondGroup.isTouching(alien)) {
      packItem4 = packItem4 + 1
    }

    if (emeraldGroup.isTouching(alien)) {
      packItem5 = packItem5 + 1
    }

    if (rubyGroup.isTouching(alien)) {
      packItem6 = packItem6 + 1
    }


    if(skullGroup.isTouching(alien)){
      gameState = END;
      alien.velocityY = 0;
      alien.scale = 1
      
    }
    
    if(devilGroup.isTouching(alien)){
      score = 0;
      packItem4 = 0;
      packItem5 = 0;
      packItem6 = 0;


    }
    
    if(alien.isTouching(hold)){
      gameState = END;
      alien.velocityY = 0;
    }

  }

  if (gameState === END){
    bk.velocityX = 0;


    start.visible = false;
    redB.visible = false
    myB.visible = false
    opB.visible = false
    qpB.visible = false
    redBb.visible = false
    myBb.visible = false
    opBb.visible = false
    qpBb.visible = false


    alien.addImage(alienR);
    
    devilGroup.setVelocityXEach(0);
    devilGroup.destroyEach();
    
    skullGroup.setVelocityXEach(0);
    skullGroup.destroyEach();

    diamondGroup.setVelocityXEach(0);
    diamondGroup.destroyEach();

    emeraldGroup.setVelocityXEach(0);
    emeraldGroup.destroyEach();

    rubyGroup.setVelocityXEach(0);
    rubyGroup.destroyEach();
    
    devilGroup.setLifetimeEach(-1);
    skullGroup.setLifetimeEach(-1);
    diamondGroup.setLifetimeEach(-1);
    emeraldGroup.setLifetimeEach(-1);
    rubyGroup.setLifetimeEach(-1);



    
    text("click on the alien to restart",width/2 - 150,200, textSize(30));
    
    if (mousePressedOver(alien)){
      replay();
    }
  }
  
}

function evil1() {

  if (frameCount % 230 === 0) {
    devil = createSprite(width, 220, 20, 20);
    devil.addImage(devilbk);
    devil.scale = 0.21;
    devil.velocityX = -(8 + 3 * score / 100);
    
    devil.setCollider("rectangle",0,0,350,375,0);

    
    devil.lifetime = width/-(8 + 3 * score / 100);
    
    devilGroup.add(devil);
    

  }
}

function evil2() {

  if (frameCount % 100 === 0) {
    skull = createSprite(width, 220, 20, 20);
    skull.addImage(skullbk);
    skull.scale = 0.25;
    skull.velocityX = -(8 + 3 * score / 100);
    
    skull.setCollider("rectangle",0,0,350,375,0);
    
    skull.lifetime = width/-(8 + 3 * score / 100);
    
    skullGroup.add(skull);

  }
}

function Diamond() {

  if (frameCount % 280 === 0) {
    diamond = createSprite(width, 110, 20, 20);
    diamond.addImage(diamondbk);
    diamond.scale = 0.75;
    diamond.velocityX = -(8 + 3 * score / 100);

    diamond.setCollider("circle", 0, 0, 40);

    diamond.lifeItem = width/-(8 + 3 * score / 100);
    
    diamondGroup.add(diamond);
  }

}

function Emerald() {

  if (frameCount % 310 === 0) {
    emerald = createSprite(width, 110, 20, 20);
    emerald.addImage(emeraldbk);
    emerald.scale = 0.75;
    emerald.velocityX = -(8 + 3 * score / 100);

    emerald.setCollider("circle", 0, 0, 40);

    emerald.lifeItem = width/-(8 + 3 * score / 100);
    
    emeraldGroup.add(emerald);
  }

}

function Ruby() {

  if (frameCount % 250 === 0) {
    ruby = createSprite(width, 110, 20, 20);
    ruby.addImage(rubybk);
    ruby.scale = 0.75;
    ruby.velocityX = -(8 + 3 * score / 100);

    ruby.setCollider("circle", 0, 0, 40);

    ruby.lifeItem = width/-(8 + 3 * score / 100);
    
    rubyGroup.add(ruby);
  }

}


function replay (){
  
  gameState = SET;

  packItem4 = 0;

  packItem5 = 0;

  packItem6 = 0;

  
  score = 0;
  
  alien.y = 300;
  
}
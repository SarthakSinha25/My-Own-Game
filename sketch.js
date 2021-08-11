const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,database;
var player,bg_img2,player_animation,player_animation_left,still_img_right,still_img_left,bg_img,bg_img3;
var level1_img,level2_img,level3_img,level4_img,level5_img,level6_img,closedDoor,openDoor,closedDoor_img,
    level7_img,level8_img,level9_img,level10_img,lockedLevel_img,end_level_img,openDoor_img,levelComplete,
    level_1,level_2,level_3,level_4,level_5,level_6,level_7,level_8,level_9,level_10,level_locked,end_level
var gameState = 0,stateGame/*, spike*/, spike_img, stop_box;
var spike2, spike3, spike4, spike5, spike6, spike7, spike8, spike9, spike10;
var levelComplete1 = 0, dot, dot_img, dot2 , allThingsGroup, box, box_img, gravity;
var x = -500
var grassBlock,grassSlab,grassSlope,block,ore1,ore2,ore3,box,inviGround,inviGround2,inviGround3,inviGround4,darkBlock_img,
    grassBlock_img,grassSlab_img,grassSlope_img,block_img,ore1_img,ore2_img,ore3_img,box_img,darkBlock,levelComplete_img;
var game, inviGroundL1, inviGroundL2, inviGroundL3, inviGroundL4, inviGroundL5, inviGroundL6;
var playButton;
var displayWidth, displayHeight;
var lev=0;

function preload(){

    player_animation = loadAnimation("img/PC1.png","img/PC2.png","img/PC3.png","img/PC4.png",
                                        "img/PC5.png","img/PC6.png","img/PC7.png","img/PC8.png");
    player_animation_left = loadAnimation("img/PC1 left.png","img/PC2  left.png","img/PC3  left.png"
                                            ,"img/PC4  left.png","img/PC5  left.png","img/PC6  left.png"
                                            ,"img/PC7  left.png","img/PC8  left.png");
    still_img_right = loadImage("img/PC4.png");
    still_img_left = loadImage("img/PC4  left.png");
    bg_img = loadImage("img/mainmenu1.png");
    bg_img2 = loadImage("img/selectbg.png");
    bg_img3 = loadImage("img/bg.png");
    level1_img = loadImage("img/level1.png");
    level2_img = loadImage("img/level2.png");
    level3_img = loadImage("img/level3.png");
    level4_img = loadImage("img/level4.png");
    level5_img = loadImage("img/level5.png");
    level6_img = loadImage("img/level6.png");
    level7_img = loadImage("img/level7.png");
    level8_img = loadImage("img/level8.png");
    level9_img = loadImage("img/level9.png");
    level10_img = loadImage("img/level10.png");
    lockedLevel_img = loadImage("img/lockedlevel.png");
    end_level_img = loadImage("img/endlevel.png");
    levelComplete_img = loadImage("img/Level Complete.png");
    openDoor_img = loadImage("img/opendoor.png");
    closedDoor_img = loadImage("img/closedoor.png");
    grassBlock_img = loadImage("img/grassblock.png");
    grassSlab_img = loadImage("img/grassSlab.png");
    grassSlope_img = loadImage("img/grassSlope.png");
    block_img = loadImage("img/block.png");
    darkBlock_img = loadImage("img/Dark Block.png");
    ore1_img = loadImage("img/ore1.png");
    ore2_img = loadImage("img/ore2.png");
    ore3_img = loadImage("img/ore3.png");
    box_img = loadImage("img/box.png");
    dot_img = loadImage("img/Blueorb.png");
    spike_img = loadImage("img/spike.png");
    box_img = loadImage("img/box.png");

}

function setup(){

    createCanvas(displayWidth,displayHeight);


    database = firebase.database();
    engine = Engine.create();
    world = engine.world;

    game = new Game();

    //player = new Player(displayWidth/2-600,590,100,100)

    dot = createSprite(displayWidth/2+160, displayHeight/2+165,20,20);
    dot.addImage(dot_img);
    dot.scale = 0.2;
    dot.visible = false;

    dot2 = createSprite(displayWidth/2+400, displayHeight/2+60,20,20);
    dot2.addImage(dot_img);
    dot2.scale = 0.2;
    dot2.visible = false;

    box = createSprite(displayWidth/2+160, displayHeight/2-31,30,30);
    box.addImage(box_img);
    box.scale = 1
    box.visible = false;

    stop_box = createSprite(507.5,347,30,30);
    stop_box.visible = false;


    spike2 = createSprite(displayWidth/2-40,displayHeight/2+263);
    spike2.addImage(spike_img);
    spike2.scale = 0.25;
    spike2.visible = false;

    spike3 = createSprite(displayWidth/2,displayHeight/2+263);
    spike3.addImage(spike_img);
    spike3.scale = 0.25;
    spike3.visible = false;

    spike4 = createSprite(displayWidth/2+40,displayHeight/2+263);
    spike4.addImage(spike_img);
    spike4.scale = 0.25;
    spike4.visible = false;

    spike5 = createSprite(displayWidth/2+80,displayHeight/2+263);
    spike5.addImage(spike_img);
    spike5.scale = 0.25;
    spike5.visible = false;

    spike6 = createSprite(displayWidth/2+120,displayHeight/2+263);
    spike6.addImage(spike_img);
    spike6.scale = 0.25;
    spike6.visible = false;

    spike7 = createSprite(displayWidth/2+160,displayHeight/2+263);
    spike7.addImage(spike_img);
    spike7.scale = 0.25;
    spike7.visible = false;

    spike8 = createSprite(displayWidth/2+200,displayHeight/2+263);
    spike8.addImage(spike_img);
    spike8.scale = 0.25;
    spike8.visible = false;

    spike9 = createSprite(displayWidth/2+240,displayHeight/2+263);
    spike9.addImage(spike_img);
    spike9.scale = 0.25;
    spike9.visible = false;

    spike10 = createSprite(displayWidth/2+280,displayHeight/2+263);
    spike10.addImage(spike_img);
    spike10.scale = 0.25;
    spike10.visible = false;

    spike11 = createSprite(displayWidth/2+320,displayHeight/2+263);
    spike11.addImage(spike_img);
    spike11.scale = 0.25;
    spike11.visible = false;

    spike12 = createSprite(displayWidth/2+360,displayHeight/2+263);
    spike12.addImage(spike_img);
    spike12.scale = 0.25;
    spike12.visible = false;

    spike13 = createSprite(displayWidth/2+400,displayHeight/2+263);
    spike13.addImage(spike_img);
    spike13.scale = 0.25;
    spike13.visible = false;

    spike14 = createSprite(displayWidth/2+440,displayHeight/2+263);
    spike14.addImage(spike_img);
    spike14.scale = 0.25;
    spike14.visible = false;

    spike15 = createSprite(displayWidth/2+480,displayHeight/2+263);
    spike15.addImage(spike_img);
    spike15.scale = 0.25;
    spike15.visible = false;

    spike16 = createSprite(displayWidth/2+520,displayHeight/2+263);
    spike16.addImage(spike_img);
    spike16.scale = 0.25;
    spike16.visible = false;

    spike17 = createSprite(displayWidth/2+560,displayHeight/2+263);
    spike17.addImage(spike_img);
    spike17.scale = 0.25;
    spike17.visible = false;

    spike18 = createSprite(displayWidth/2+600,displayHeight/2+263);
    spike18.addImage(spike_img);
    spike18.scale = 0.25;
    spike18.visible = false;

    spike19 = createSprite(displayWidth/2+640,displayHeight/2+263);
    spike19.addImage(spike_img);
    spike19.scale = 0.25;
    spike19.visible = false;

    inviGround = createSprite(displayWidth/2-650,displayHeight/2+275,1850,20);
    inviGround.visible = false;

    inviGround2 = createSprite(displayWidth/2+450,displayHeight/2+150,240,20);
    inviGround2.visible = false;

    inviGround3 = createSprite(displayWidth/2+120,displayHeight/2+40,240,20);
    inviGround3.visible = false;

    inviGround4 = createSprite(displayWidth/2-390,displayHeight/2-55,600,20);
    inviGround4.visible = false;

    inviGroundL1 = createSprite(displayWidth/2-380,displayHeight/2+275,640,20);
    inviGroundL1.visible = false;

    inviGroundL2 = createSprite(displayWidth/2+50, displayHeight/2-5,500,10);
    inviGroundL2.visible = false;

    inviGroundL3 = createSprite(displayWidth/2-200, displayHeight/2-50,10,100);
    inviGroundL3.visible = false;

    inviGroundL4 = createSprite(displayWidth/2-243, displayHeight/2-100,96,10)
    inviGroundL4.visible = false;

    inviGroundL5 = createSprite(displayWidth/2-290, displayHeight/2-80,10,50);
    inviGroundL5.visible = false;

    inviGroundL6 = createSprite(displayWidth/2-485, displayHeight/2-55, 400,10)
    inviGroundL6.visible = false;

    levelComplete = createSprite(displayWidth/2,displayHeight/2,100,100);
    levelComplete.addImage(levelComplete_img);
    levelComplete.scale = 2
    levelComplete.x = 700;
    levelComplete.y = 400;
    levelComplete.visible = false;

    player = createSprite(displayWidth/2-600,590,100,100);
    player.addAnimation("ok",player_animation);
    player.visible = false;

    closedDoor = createSprite(displayWidth/2-600,590,100,100);
    closedDoor.addImage(closedDoor_img);
    closedDoor.scale = 1
    closedDoor.visible = false;

    openDoor = createSprite(displayWidth/2-600,260,100,100);
    openDoor.addImage(openDoor_img);
    openDoor.scale = 1
    openDoor.visible = false;

    allThingsGroup = new Group();

    game.getState();

    if(gameState === 2){
        levels1();
        console.log("true")
    }

    playButton = createSprite(displayWidth/2+3,displayHeight/2+275,150,130);
    playButton.visible = false;
    
    if (gameState === 0){
        game.start();
    }

}

function draw(){

    Engine.update(engine);

    if (mousePressedOver(playButton)){
        game.update(1);
    }
    if (gameState === 1){
        background(bg_img2);
        drawSprites();
        if (mousePressedOver(level_1)){
            game.update(2);
            player.visible = true;
            lev+=1;
            hide();    
        }
        if(/*levelComplete1 === 1 &&*/ mousePressedOver(level_2)){
            game.level2();
            game.update(4);
            lev+=4;
            hide();
        }
        if (lev === 4){
            levels2();
            lev+=1;
        }
        if (lev===1)  {
            levels1();
            lev+=1;
        }

    }
    
    if (gameState === 2){
       background(bg_img3)
        
        drawSprites();
        player.display();
        player.collide(inviGround);
        player.collide(inviGround2);
        player.collide(inviGround3);
        player.collide(inviGround4);


        //levelComplete.visible = false;
        move();

        closedDoor.visible = true;
        openDoor.visible = true;


    }
    if (player.isTouching(openDoor) && gameState === 2){
        winner();
        background(bg_img3);
        levelComplete1 +=1; 
        window.location.href = "http://127.0.0.1:5500/Level2.html"
    }

    if (gameState === 3 ){
        closedDoor.visible = false;
        openDoor.visible = false;
        clear();
        allThingsGroup.destroyEach();
        background(bg_img3);
        removeLevel1();
        console.log("Sunny")
        levelComplete.visible = true;
        drawSprites();
    }

    if(gameState === 4){
        background(bg_img3);
        player.visible = true;
        closedDoor.visible = true;
        openDoor.visible = true;
        //applyForceOnBox();
        restart();
        player.collide(inviGroundL1);
        player.collide(inviGroundL2);
        player.collide(inviGroundL3);
        player.collide(inviGroundL4);
        player.collide(inviGroundL5);
        player.collide(inviGroundL6);
        box.collide(inviGroundL3);
        box.collide(inviGroundL4);
        spike2.visible = true;
        spike3.visible = true;
        spike4.visible = true;
        spike5.visible = true;
        spike6.visible = true;
        spike7.visible = true;
        spike8.visible = true;
        spike9.visible = true;
        spike10.visible = true;
        spike11.visible = true;
        spike12.visible = true;
        spike13.visible = true;
        spike14.visible = true;
        spike15.visible = true;
        spike16.visible = true;
        spike17.visible = true;
        spike18.visible = true;
        spike19.visible = true;
        box.visible = true;
        dot.visible = true;
        dot2.visible = true;
        if(box.x === 843){
            box.collide(player);
        }else{
            player.collide(box);
        }


        moveLevel2();
        drawSprites();
    }   
        if (player.isTouching(openDoor) && gameState === 4){
        winnerL2();
        console.log("uhhh");
        window.location.href = "http://127.0.0.1:5500/ThankYou.html"
    }

}


function hide(){
    level_1.visible = false;
    level_2.visible = false;
    // level_3.remove();
    // level_4.remove();
    // level_5.remove();
    // level_6.remove(); 
    // level_7.remove(); 
    // level_8.remove();
    // level_9.remove(); 
    // level_10.remove(); 
    // level_locked.remove();
    console.log("hided")
}

function removeLevel1(){
    // grassBlockGroup.removeSprites();
    // grassSlabGroup.removeSprites();
    // blockGroup.removeSprites();
    // oreGroup.removeSprites();
}

function move(){
    if(keyIsDown(UP_ARROW) && player.y >= 615) {
        player.velocityY = -15;
    }
    if(keyIsDown(UP_ARROW) && player.y === 492.5 || player.y === 494.5 || player.y === 491.5) {
        player.velocityY = -15;
    }

    if(keyIsDown(UP_ARROW) && player.y === 382.5 || player.y === 384.5) {
        player.velocityY = -15;
    }

    player.velocityY = player.velocityY + 0.8

    if(keyIsDown(RIGHT_ARROW)){
        player.x = player.x + 20;
        player.addAnimation("ok",player_animation);

    }else{
        player.velocityX = 0;
    }
    if(keyIsDown(LEFT_ARROW)){
        player.velocityX = -20;
        player.addAnimation("ok",player_animation_left);
    }else{
        player.velocityX = 0;
        
    }

}


function winner(){
    if (player.isTouching(openDoor)){
        console.log("working")
        game.update(1);
        game.updatelevel(1);
        background(bg_img3);
        level_1.visible = true;
        level_2.visible = true;
    }
}
function moveLevel2(){
    if(keyIsDown(UP_ARROW) && player.y >= 615 || player.y === 495.5) {
        player.velocityY = -10;
    }

    if(keyIsDown(UP_ARROW) && player.isTouching(stop_box) && player.y === 303) {
        player.velocityY = -10;
    }

    if(keyIsDown(UP_ARROW) && player.y === 492.5 || player.y === 493.5) {
        player.velocityY = -10;
    }

    if(keyIsDown(UP_ARROW) && player.y === 342.5 || player.y === 341.5) {
        player.velocityY = -10;
    }

    player.velocityY = player.velocityY + 0.8

    if(keyIsDown(RIGHT_ARROW)){
        player.x = player.x + 20;
        player.addAnimation("ok",player_animation);

    }else{
        player.velocityX = 0;
    }
    if(keyIsDown(LEFT_ARROW)){
        player.velocityX = -20;
        player.addAnimation("ok",player_animation_left);
    }else{
        player.velocityX = 0;
        
    }
}
function keyPressed(){
    if (player.isTouching(dot)){
        player.velocityY = -11;
        console.log("key pressed")
    }
    if (player.isTouching(dot2)){
        player.velocityY = -12;
        console.log("key pressed")
    }
}

function restart(){
    if(player.isTouching(spike2) ||player.isTouching(spike3) ||player.isTouching(spike4) ||
    player.isTouching(spike5) ||player.isTouching(spike6) ||player.isTouching(spike7) ||player.isTouching(spike8) ||
    player.isTouching(spike9) ||player.isTouching(spike10) ||player.isTouching(spike11) || player.isTouching(spike12) ||
    player.isTouching(spike13) ||player.isTouching(spike14) ||player.isTouching(spike15) ||player.isTouching(spike16)
    ||player.isTouching(spike17) ||player.isTouching(spike18) ||player.isTouching(spike19)){
        player.x = displayWidth/2-600;
        player.y = 590;
    }
}
function winnerL2(){
    
    console.log("working")
    game.update(1);
    game.updatelevel(2);
    inviGroundL1.remove();
    inviGroundL2.remove();
    inviGroundL3.remove();
    inviGroundL4.remove();
    inviGroundL5.remove();
    inviGroundL6.remove();
    box.remove();
    spike2.remove();
    spike3.remove();
    spike4.remove();
    spike5.remove();
    spike6.remove();
    spike7.remove();
    spike8.remove();
    spike9.remove();
    spike10.remove();
    spike11.remove();
    spike12.remove();
    spike13.remove();
    spike14.remove();
    spike15.remove();
    spike16.remove();
    spike17.remove();
    spike18.remove();
    spike19.remove();
    inviGroundL1.visible = false;
    inviGroundL2.visible = false;
    inviGroundL3.visible = false;
    inviGroundL4.visible = false;
    inviGroundL5.visible = false;
    inviGroundL6.visible = false;
    box.visible = false;
    spike2.visible = false;
    spike3.visible = false;
    spike4.visible = false;
    spike5.visible = false;
    spike6.visible = false;
    spike7.visible = false;
    spike8.visible = false;
    spike9.visible = false;
    spike10.visible = false;
    spike11.visible = false;
    spike12.visible = false;
    spike13.visible = false;
    spike14.visible = false;
    spike15.visible = false;
    spike16.visible = false;
    spike17.visible = false;
    spike18.visible = false;
    spike19.visible = false;

}
var grassSlab01,grassSlab02,grassSlab03,grassSlab04,grassSlab05,grassSlab06
var grassBlock01;

function levels2(){
    grassSlab01 = createSprite(displayWidth/2-230,displayHeight/2+305);
    grassSlab01.addImage(grassSlab_img);
    grassSlab01.scale = 0.7;

    grassSlab02 = createSprite(displayWidth/2-530,displayHeight/2+305);
    grassSlab02.addImage(grassSlab_img);
    grassSlab02.scale = 0.7;

    grassSlab03 = createSprite(displayWidth/2+170, displayHeight/2+20);
    grassSlab03.addImage(grassSlab_img);
    grassSlab03.scale = 0.55;

    grassSlab04 = createSprite(displayWidth/2-70, displayHeight/2+20);
    grassSlab04.addImage(grassSlab_img);
    grassSlab04.scale = 0.55;

    grassSlab05 = createSprite(displayWidth/2-385, displayHeight/2-38);
    grassSlab05.addImage(grassSlab_img);
    grassSlab05.scale = 0.4;

    grassSlab06 = createSprite(displayWidth/2-575, displayHeight/2-38);
    grassSlab06.addImage(grassSlab_img);
    grassSlab06.scale = 0.4;

    grassBlock01 = createSprite(displayWidth/2-244, displayHeight/2-47);
    grassBlock01.addImage(grassBlock_img);
    grassBlock01.scale = 0.9;
}

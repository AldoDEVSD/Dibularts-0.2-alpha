var col = 0;
var backgroundCol = 214;
var tool = "pencil";
var backgroundPaleta,blueCol,redCol,blackCol,whiteCol,yellowCol,greenCol,brownCol,orangeCol,backgroundHerramientas,pencil,pencilImg,eraser,eraserImg,cubeta,cubetaImg;

function Paint(){
    if(tool === "pencil"){
        if(mouseIsPressed === true){
            if(mouseButton === LEFT){
                var Pixel = createSprite(mouseX,mouseY,10,10)
                Pixel.shapeColor = col;
                if(Pixel.isTouching(backgroundHerramientas) || Pixel.isTouching(backgroundPaleta)){
                    Pixel.destroy();
                }
            }
        }
    }

    if(tool === "eraser"){
        if(mouseIsPressed === true){
             if(mouseButton === LEFT){
                var del = createSprite(mouseX,mouseY,60,60)
                del.shapeColor = backgroundCol;
                if(del.isTouching(backgroundHerramientas)){
                    del.destroy();
                }
                if(del.isTouching(backgroundPaleta)){
                    del.destroy();
                }
             }
        }
    }
    if(tool === "bucket"){
        backgroundCol = col;
    }

    //activate tools
    if(mousePressedOver(pencil)){
        tool = "pencil";
    }
    if(mousePressedOver(eraser)){
        tool = "eraser";
    }
    if(mousePressedOver(cubeta)){
        tool = "bucket";
    }
}

function preload(){
    pencilImg = loadImage("lapiz.png")
    eraserImg = loadImage("borrador.png")
    cubetaImg = loadImage("Cubeta.png")
}


function setup(){
    createCanvas(800,800)

    background(backgroundCol);

    backgroundPaleta = createSprite(750,400,150,500)
    backgroundPaleta.shapeColor = 150;

    blackCol = createSprite(705,200,50,50)
    blackCol.shapeColor = 0;

    whiteCol = createSprite(770,200,50,50)
    whiteCol.shapeColor = 255;

    blueCol = createSprite(770,270,50,50)
    blueCol.shapeColor = "blue";
    
    redCol = createSprite(705,270,50,50)
    redCol.shapeColor = "red";

    yellowCol = createSprite(705,340,50,50)
    yellowCol.shapeColor = "yellow";
    
    greenCol = createSprite(770,340,50,50)
    greenCol.shapeColor = "green";

    brownCol = createSprite(770,410,50,50)
    brownCol.shapeColor = "#623412";

    orangeCol = createSprite(705,410,50,50)
    orangeCol.shapeColor = "orange";

    backgroundHerramientas = createSprite(400,750,400)
    backgroundHerramientas.shapeColor = 150;

    pencil = createSprite(260,750,50,50)
    pencil.addImage(pencilImg);
    pencil.scale = 0.2

    eraser = createSprite(400,750,50,50)
    eraser.addImage(eraserImg);
    eraser.scale = 0.2  

    cubeta = createSprite(520,750,50,50)
    cubeta.addImage(cubetaImg);
    cubeta.scale = 0.2  
     cubeta.visible = false;
}

function draw(){


    if(mousePressedOver(blackCol)){
        col = 0;
    }
    if(mousePressedOver(whiteCol)){
        col = 255;
    }
    if(mousePressedOver(blueCol)){
        col = "blue";
    }
    if(mousePressedOver(redCol)){
        col = "red";
    }
    if(mousePressedOver(yellowCol)){
        col = "yellow";
    }
    if(mousePressedOver(greenCol)){
        col = "green";
    }
    if(mousePressedOver(brownCol)){
        col = "#623412";
    }
    if(mousePressedOver(orangeCol)){
        col = "orange";
    }


    Paint();
    drawSprites();
}

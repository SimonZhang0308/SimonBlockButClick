let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
document.addEventListener("mousedown",clicked);
document.addEventListener("keydown",keydownHandler);

cnv.width = 800;
cnv.height = 600;
let box = [];
box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,1,1,getRandomColor()));
let t = 0;

function randomInt(low,high){
    return Math.floor(Math.random() * (high - low) + low);
}

requestAnimationFrame(draw);
function draw(){
    t += 1;
    ctx.clearRect(0,0,cnv.width,cnv.height);
    for (let i = 0; i < box.length; i++){
        drawbox(box[i]);
        moveBubble(box[i]);
    }
    if (t === 400){
        let l = randomInt(0,5);
        if (l === 0){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,1,1,getRandomColor()));
        }
        else if (l === 1){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,1,-1,getRandomColor()));
        }
        else if (l === 2){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,-1,-1,getRandomColor()));
        }
        else if (l === 3){
            box.push(newbox(randomInt(0,766),randomInt(0,566),35,35,-1,1,getRandomColor()));
        }
        t = 0;
    }
    requestAnimationFrame(draw);
}

function newbox(initX, initY, initW, initH,initspeedx,initspeedy, initColor){
    return{
        x:initX,
        y:initY,
        w:initW,
        h:initH,
        sx:initspeedx,
        sy:initspeedy,
        color: initColor
    };
}

function drawbox(aBubble){
    fill(aBubble.color);
    rect1(aBubble.x,aBubble.y,aBubble.w,aBubble.h,"fill");
}

function clicked(){
    let mousex = event.clientX;
    let mousey = event.clientY;
    var width = window.innerWidth;
    for (let i = 0; i < box.length; i++){
        if (mousex-(width/2-400) >= box[i].x && mousex-(width/2-400)<= box[i].x+35 && mousey-10 >= box[i].y && mousey-10 <= box[i].y+35){
            box[i].sx *= -1;
            box[i].color = getRandomColor();
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveBubble(aBubble){
    aBubble.y += aBubble.sy;
    aBubble.x += aBubble.sx;
    if (aBubble.y >= 566){
        aBubble.sy = -0.7;
    }
    if (aBubble.y <= 0){
        aBubble.sy = 0.7;
    }
    if (aBubble.x >= 766){
        aBubble.sx = -0.7;
    }
    if (aBubble.x <= 0){
        aBubble.sx = 0.7;
    }
}


function keydownHandler(event){
    if (event.keyCode === 39){
        added();
    }
    else if (event.keyCode === 37){
        removed();
    }
}
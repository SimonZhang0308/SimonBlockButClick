function stroke(color){
    ctx.strokeStyle = color;
}
function fill(color){
    ctx.fillStyle = color;
}

function rect1(x,y,w,h,mode){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if (mode == "fill"){
        ctx.fill();
    }
    else if (mode == "stroke"){
        ctx.stroke();
    }
}

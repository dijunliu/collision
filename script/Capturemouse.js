function Capturemouse (element) {
    var mouse={x:null,y:null};
    element.addEventListener('mousemove',function (event) {
        var x, y;
        if(event.pageX || event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
            y = event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
        }
        x -=element.offsetLeft;
        y -=element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    },false);
    return mouse;
}
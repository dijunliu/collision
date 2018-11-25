window.onload = function () {
    canvas = document.getElementById('collCanvas');
    context = canvas.getContext('2d');
    circles = [];
    numcircle = 20;
    for (var circle,i=0;i<numcircle;i++){
        var x = Math.random()*canvas.width;
        var y = Math.random()*canvas.height;
        var vx = -Math.random()*6 + 3;
        var vy = -Math.random()*6 + 3;
        var color = Math.random()*0xffffff;
        var radius = Math.random()*50 + 5;
        circle = new Circle(x,y,vx,vy,color,radius);
        circles.push(circle);
    }
    drawAnimation();
}

function move(circle) {
    circle.x += circle.vx;
    circle.y += circle.vy;

    if(circle.y  < -circle.radius){
        circle.y = canvas.height + circle.radius;
    }else if(circle.y > canvas.height + circle.radius){
        circle.y = -circle.radius;
    }
    if(circle.x < -circle.radius){
        circle.x = canvas.width + circle.radius;
    }else if(circle.x > canvas.width + circle.radius){
        circle.x = -circle.radius;
    }
}
function draw(circle,i) {
    for(var j=i+1;j<numcircle;j++){
        if(Intersect(circle,circles[j])){
            var angle = getTPI(circle,circles[j]).angle;
            var  distance = getTPI(circle,circles[j]).distance;
            circle.x = circles[j].x + Math.cos(angle)*(circle.radius+circles[j].radius);
            circle.y = circles[j].y + Math.sin(angle)*(circle.radius+circles[j].radius);
            circle.vx *= -1;
            circle.vy *= -1;

            circles[j].x = circle.x - Math.cos(angle)*(circle.radius+circles[j].radius);
            circles[j].y = circle.y - Math.sin(angle)*(circle.radius+circles[j].radius);
            circles[j].vx *= -1;
            circles[j].vy *= -1;

        }
    }
    circle.draw(context);
}
function Intersect(circleA,circleB) {
    var dx = circleA.x-circleB.x;
    var dy = circleA.y-circleB.y;
    var distance = Math.sqrt(dx*dx+dy*dy);
    return distance < (circleA.radius + circleB.radius);
}

function getTPI(pointA,pointB) {
    var dx = pointA.x-pointB.x;
    var dy = pointA.y-pointB.y;
    var angle = Math.atan2(dy,dx);
    var distance = Math.sqrt(dx*dx+dy*dy);
    var infor = {angle:angle,distance:distance};
    return infor;
}



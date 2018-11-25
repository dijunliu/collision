function Circle(x,y,vx,vy,color,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.color = "#"+parseInt(color);
}

Circle.prototype.draw = function(context){
    context.save();
    context.fillStyle = this.color;
    context.translate(this.x,this.y);
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2,false);
    context.fill();
    context.restore();
}
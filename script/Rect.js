function Rect(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Rect.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.fillRect(0,0,this.width,this.height);
    context.restore();
}
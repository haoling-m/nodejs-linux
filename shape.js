Function shape(){
    this.X=0;
    this.Y=0;
    this.move=function(x,y){
	this.X=x;
	this.Y=y;}
    this.distance_from_origin=function(){
	return Math.aqrt(this.X*this.X+this.Y*this.Y)}
}
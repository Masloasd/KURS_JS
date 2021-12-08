function Punkt(x,y){
    this.x=x;
    this.y=y;
}
function Odcinek(p1, p2){
    this.p1=p1;
    this.p2=p2;
}
var p1 = new Punkt(0,0);
var p2 = new Punkt(10,10);
var ab = new Odcinek(p1,p2);
Punkt.prototype.wspolrzedne = function(){
    console.log("X: "+ this.x + " ; Y: " + this.y);
} 
Odcinek.prototype.wspolrzedne = function(){
    console.log("P1(x,y) = (" + this.p1.x + "," + this.p1.y + "); P2(x,y) = (" + this.p2.x + "," + this.p2.y + ")");
}
Odcinek.prototype.dlugosc = function(){
    var x1x2=this.p2.x-this.p1.x;
    var y1y2=this.p2.y-this.p1.y;
    var dl_p1p2=Math.sqrt((Math.pow(x1x2,2))+(Math.pow(y1y2,2)));
    console.log(dl_p1p2);
}
p1.wspolrzedne();
p2.wspolrzedne();
ab.wspolrzedne();
ab.dlugosc();

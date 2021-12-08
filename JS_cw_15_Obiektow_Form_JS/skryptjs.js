function oblicz(){
    var x1,x2,y1,y2;
    x1 = document.getElementById("x1").value;
    x2 = document.getElementById("x2").value;
    y1 = document.getElementById("y1").value;
    y2 = document.getElementById("y2").value;
    function Punkt(x,y){
        this.x=x;
        this.y=y;
    }
    function Odcinek(p1,p2){
        this.p1=p1;
        this.p2=p2;
    }
    //1. wyświetlamy współrzędne punktów
    Punkt.prototype.wpolrzedne = function(){
        console.log("P(x,y) = ("+ this.x +","+ this.y +")");
    }
    //2. wyświetlamy współrzędne obu punktów
    Odcinek.prototype.wpolrzedne = function(){
        console.log("P(x,y) = ("+ this.p1.x +","+ this.p1.y +"), P(x,y) = ("+ this.p2.x +","+ this.p2.y +")");
        var wynik = "P1(x,y) = ("+ this.p1.x +","+ this.p1.y +"), P2(x,y) = ("+ this.p2.x +","+ this.p2.y +")";
        document.getElementById("punkt").innerHTML=wynik;
    }
    Odcinek.prototype.dlugosc = function(){
        var xx=this.p1.x-this.p2.x;
        var yy=this.p1.y-this.p2.y;
        var pp=Math.sqrt( Math.pow(xx,2) + Math.pow(yy,2) );
        var wynik=(Math.round(pp*1000,3)/1000);
        document.getElementById("wynik").innerHTML=wynik;
        console.log(pp)
    }   
    var p1 = new Punkt(x1,y1);
    var p2 = new Punkt(x2,y2);
    var ab = new Odcinek(p1,p2);
    p1.wpolrzedne();
    p2.wpolrzedne();
    ab.wpolrzedne();
    ab.dlugosc();
}
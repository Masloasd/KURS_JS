function losuj(){
    var los=Math.round((Math.random()*10));
    if(los==0){
        los=10;
    }
    //console.log(los);
    return los;
}
var a,b,c,buf,tab;
a=losuj();
b=losuj();
c=losuj();
tab = [0,a,b,c];
console.log(a+" "+b+" "+c+" ");
if(a+b>c && a+c>b && b+c>a){
    console.log("Możesz utworzyć trójkąt");
    for(var i=0;i<3;i++){
        if(tab[i]>=tab[i+1]){
            buf=tab[i+1];
            tab[i+1]=tab[i];
            tab[i]=buf;
        }
    }
    //console.log( "Przeciwprostokątna: "+tab[3]);
    var przeciwp = Math.sqrt(Math.pow(tab[1],2)+Math.pow(tab[2],2));
    if(przeciwp==tab[3]){
        var pole=(tab[1]*tab[2])/2;
        console.log("Pole trójkąta prostokątnego wynosi P = "+pole);
    } else {
        console.log("To nie jest trójkąt prostokątny");
	}
} else {
    console.log("BRAK TRÓJKĄTA");
}


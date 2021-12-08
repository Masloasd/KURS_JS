{
//s.1
var obiekt1={
    imie:"Krzysztof",
    name:"Czyż",
    wiek:180
    };
console.log(obiekt1.imie+" "+obiekt1.name+" "+obiekt1.wiek);

function pokaz1(){
    document.getElementById("wynik").innerHTML=obiekt1.imie;
}
window.onload=pokaz1;
}
// s.2 - użycie konstruktorów
{
var osoba = new Object();
osoba.imie = "Krzysztof";
osoba.name = "Czyż";
osoba.wiek = 18
console.log(osoba.imie+" "+osoba.name+" "+osoba.wiek);
}
function pokaz(){
    document.getElementById("wynik").innerHTML=osoba.imie;
window.onload=pokaz;
}
//s.3 funkcja konstruująca
function pokaz(){
    console.log("W salonie znajduje się pojazd o parametrach: "+auto.model+" "+auto.marka+" "+auto.rocznik+" "+auto.kolor);
}
function salon(marka,model,rocznik,kolor){
    this.marka=marka;
    this.model=model;
    this.rocznik=rocznik;
    this.kolor=kolor;
    this.pokaz=pokaz;
}
var a = ["Fiat","Opel","Suzuki","Ford"];
var b = ["Tipo","Astra","Switf","Ka"];
var c = [2020,2012,1999,1961];
var d = ["szary","Biały","Niebieski","Tęczowy"];
for(var i=0;i<a.length;i++){
    var auto = new salon(a[i],b[i],c[i],d[i]);
    pokaz();
}
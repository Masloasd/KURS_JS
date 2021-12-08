function koloruj(){
    var r=document.getElementById("r").value;
    var g=document.getElementById("g").value;
    var b=document.getElementById("b").value;
    document.getElementById("kolor").style.background-color = "rgb("+r+" "+g+" "+b+");";
}
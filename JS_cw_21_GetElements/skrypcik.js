function zmiana1(){
    var tab1=document.getElementsByClassName("level1");
    tab1[0].innerHTML = "Hello World!";
    tab1[1].innerHTML = "Wersja polska: Witaj Świecie";
}
function zmiana2(){
    var tab2 = document.getElementsByName("p2")[0].tagName;
    var tab3 = document.getElementsByName("p2")[1].innerHTML;
    document.getElementById("lista").innerHTML = tab2;
    document.getElementById("lista2").innerHTML = tab3;
}
function zmiana3(){
    var tab4 = document.getElementsByTagName("LI");
	var napis="";
	console.log(tab4.length);
	for (var i=0;i<tab4.length;i++){
		napis += tab4[i].innerHTML+" ";
	}
	document.getElementById("napoj").innerHTML = napis;
}
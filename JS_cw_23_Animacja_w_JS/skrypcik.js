function animuj(){
    var blok=document.getElementById("anime");
    // if(parseInt(blok.style.left)<50){
        var x = blok.style.left;
    // } else {
    //     blok.style.left=(parseInt(blok.style.left)-3)+"px";
    // }
}
window.setInterval(animuj(),100);
function kolor(form){
    var r=form.r.value;
    var g=form.g.value;
    var b=form.b.value;
    if(r==''){
        document.getElementById('wynik').innerHTML='Podaj kolor R:';
        form.r.focus();
        return false;
    } else if(g==''){
        document.getElementById('wynik').innerHTML='Podaj kolor G:';
        form.g.focus();
        return false;
    } else if(b==''){
        document.getElementById('wynik').innerHTML='Podaj kolor B:';
        form.b.focus();
        return false;
    } else if(r<0 || r>255){
        document.getElementById('wynik').innerHTML='Podaj właściwy kolor R:';
        form.r.focus();
        return false;
    } else if(g<0 || g>255){
        document.getElementById('wynik').innerHTML='Podaj właściwy kolor G:';
        form.g.focus();
        return false;
    } else if(b<0 || b>255){
        document.getElementById('wynik').innerHTML='Podaj właściwy kolor B:';
        form.b.focus();
        return false;
    } else {
        document.getElementById("wynik").innerHTML='';
        document.getElementById('but').innerHTML='<button type="submit" style="background-color:rgb('+r+' '+g+' '+b+')">Zmień kolor</button>';
        return false;
    }
    return true;
    }
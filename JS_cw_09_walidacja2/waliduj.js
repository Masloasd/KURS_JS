function sprawdz(form){
    var sprzet=form.sprzet.value;
    var barwa=form.kolor.value;
    var regul=form.regulamin.checked;
    if(sprzet==1){
        document.getElementById("wynik").innerHTML="Musisz wybrać artykuł";
        form.sprzet.focus();
        return false;
    } else if(barwa==1){
        document.getElementById("wynik").innerHTML="Musisz wybrać kolor artykułu";
        form.sprzet.focus();
        return false;
    } else  if(regul!=1){
        document.getElementById("wynik").innerHTML="Musisz zaakceptować regulamin sklepu";
        form.regulamin.focus();
        return false;
    } else {}
    return true;
}
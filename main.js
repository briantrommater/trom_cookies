
var pusha = 0, pushb = 0, pushc = 0;
var lem = Cookies.get('lemon');
var choc = Cookies.get('choco');
var sug = Cookies.get('sug');
function setCook() {
    if (lem){
        Cookies.set('lemon', pusha);
    } else {
    Cookies.set('lemon', 0);
    }
}
setCook();
function count1() {
    pusha = pusha + 1;
    Cookies.set('lemon', pusha);
    console.log(Cookies.get('lemon'));
    document.querySelector('#lemcount').innerHTML = "You have selected " + pusha + " lemon cookie";    
}

function count2() {
    pushb = pushb + 1;
    Cookies.set('choco', pushb);
    document.querySelector('#choccount').innerHTML = "You have selected " + pushb + " chocolate cookie";
}

function count3() {
    pushc = pushc + 1;
    Cookies.set('sugar', pushc);
    document.querySelector('#sugcount').innerHTML = "You have selected " + pushc + " sugar cookie";
}



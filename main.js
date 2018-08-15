//initialize cookie counts to zero &
//get current Icookie counts

var pusha = 0, pushb = 0, pushc = 0;
var lem = Cookies.get('lemon');
var choc = Cookies.get('choco');
var sug = Cookies.get('sugar');

//3 fxs to set # Icookies stored 
//equal to # cookies clicked on

function setCookL() {
    if (lem){
        Cookies.set('lemon', pusha);
    } else {
    Cookies.set('lemon', 0);
    }
}

function setCookC() {
    if (choc){
        Cookies.set('choco', pushb);
    } else {
    Cookies.set('choco', 0);
    }
}

function setCookS() {
    if (sug){
        Cookies.set('sugar', pushc);
    } else {
    Cookies.set('sugar', 0);
    }
}

//3 fxs to count cookies on current visit
//also set Icookies to increase upon clicking

function count1() {
    pusha = pusha + 1;
    Cookies.set('lemon', pusha);
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

//will reset users visible cookie count onclick 
//& will reset internet cookie count to zero when refresh

function reset() {
    document.querySelector('#lemcount').innerHTML = "You have not selected any lemon cookies";
    document.querySelector('#choccount').innerHTML = "You have not selected any chocolate cookies";
    document.querySelector('#sugcount').innerHTML = "You have not selected any sugar cookies";
    Cookies.set('lemon', 0);
    Cookies.set('choco', 0);
    Cookies.set('sugar', 0);
}



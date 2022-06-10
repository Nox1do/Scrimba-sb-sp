let score = 0;

let onePEl = document.getElementById("scoreH");
let twoPEl = document.getElementById("scoreH");
let threePEl = document.getElementById("scoreH");
let onePElG = document.getElementById("scoreG");
let twoPElG = document.getElementById("scoreG");
let threePElG = document.getElementById("scoreG");
let newGame1 = document.getElementById("scoreH");
let newGame2 = document.getElementById("scoreG");
//HOME TEAM
function oneP(){
    score += 1;
    onePEl.textContent = score;  
}
function twoP(){
    score += 2;
    twoPEl.textContent = score;  
}
function threeP(){
    score += 3;
    threePEl.textContent = score; 
    //GUEST TEAM 
}
function onePG(){
    score += 1;
    onePElG.textContent = score;  
}
function twoPG(){
    score += 2;
    twoPElG.textContent = score;  
}
function threePG(){
    score += 3;
    threePElG.textContent = score;  
}
function newGame() {
    newGame1.textContent = 0
    newGame2.textContent = 0
    score = 0
}


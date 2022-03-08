'use strict';
const player0EL=document.querySelector(".player--0")
const player1EL=document.querySelector(".player--1")

const score0EL=document.querySelector("#score--0");
const score1EL=document.getElementById("score--1");
const current0EL=document.getElementById("current--0");
const current1EL=document.getElementById("current--1");


const btng= document.querySelector(".btn--green");
const btnb= document.querySelector(".btn--blue");
const btnp= document.querySelector(".btn--pink");
const btny=document.querySelector(".btn--yellow")
const diceEl=document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold= document.querySelector(".btn--hold");
const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent= 0;
    activePlayer=activePlayer === 0 ? 1 : 0 ;
    currentscore=0;
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
}

let scores, currentscore,activePlayer,playable;
const start= function(){
    scores = [0, 0];
    currentscore = 0;
    activePlayer = 0;
    playable = true;
  
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');

}
start()


btnRoll.addEventListener('click',function(){
if(playable){
//1. Generate a random dice roll
let dice=Math.trunc(Math.random()*6)+1;
console.log(dice)

//2. Display dice
diceEl.classList.remove("hidden");
diceEl.src = `dice-${dice}.png`;



//3. If its 1, switch next player 
if(dice !== 1){
//Add dice to the current score 
currentscore += dice ;
document.getElementById(`current--${activePlayer}`).textContent= currentscore;
}
else{
switchPlayer()

}}}) 

btnHold.addEventListener('click',function(){
// Add current score to activa players score
scores[activePlayer]+=currentscore;
document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];

// Check if players score is >100 or not

if(scores[activePlayer]>= 50) {
    console.log(activePlayer)
    playable=false;
diceEl.classList.add("hidden");
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        if(activePlayer==0)
{
    var div=document.getElementById('tll')
    div.innerHTML +=   '🏆<br>'
    var div=document.getElementById('trr')
    div.innerHTML +=   '💢<br>'
}

    if(activePlayer==1)
{
var div=document.getElementById('tll')
 div.innerHTML +=   '💢<br>'
var div=document.getElementById('trr')
div.innerHTML +=   '🏆<br>'
}                       


}
else{
switchPlayer();
}

btnNew.addEventListener('click',start);



})
btng.addEventListener('click',function(){
document.body.style.backgroundImage = "linear-gradient(to top left, #462247 , #15ff00 )"
console.log("convertedg")
document.querySelector(".current").style.backgroundColor = "#058c13";
document.querySelector(".current2").style.backgroundColor = "#058c13";})

btnb.addEventListener('click',function(){
document.body.style.backgroundImage = "linear-gradient(to top left, #5c5151 , #4400ff )"
console.log("convertedb")
document.querySelector(".current").style.backgroundColor = "#4400ff";
document.querySelector(".current2").style.backgroundColor = "#4400ff";})

btnp.addEventListener('click',function(){
    document.body.style.backgroundImage = "linear-gradient(to top left, #753682 , #ff0008 )";
    console.log("converteddefaultn")
    document.querySelector(".current").style.backgroundColor = "#c7365f";
    document.querySelector(".current2").style.backgroundColor = "#c7365f";})
    

btny.addEventListener('click',function(){
document.body.style.backgroundImage = "linear-gradient(to top left, #1b9e5d , #faf600)"
console.log("convertedy")
document.querySelector(".current").style.backgroundColor = "#bbb943";  
document.querySelector(".current2").style.backgroundColor = "#bbb943";})


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
let dice=0;
let ratio=Math.floor(Math.random() * 99)+1;
console.log(ratio)
{
if(ratio>0 && ratio<=18){dice=2;}

else if(ratio>18 && ratio<=36) {dice=3;}

else if(ratio>36 && ratio<=54){dice=4;}

else if(ratio>54 && ratio<=74){dice=1;}

else if(ratio>74 && ratio<=87){dice=5;}

else if(ratio>87 && ratio<=100){dice=6;}
}
console.log(dice)
//2. Display dice
diceEl.classList.remove("hidden");
diceEl.src = `/img/dice-${dice}.png`;



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


const capscore = document.getElementById("lname").value;
console.log(typeof capscore)
if(typeof capscore !='string' || capscore<10){
    alert("Please write only numbers bigger than 10");
    start();
}
else{

// Check if players score is > capscore or not

if(scores[activePlayer]>= capscore) {
    console.log(activePlayer)
    playable=false;
diceEl.classList.add("hidden");
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

setTimeout(() => {start(); }, 1500);


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
}
btnNew.addEventListener('click',start);


/*
})
btng.addEventListener('click',function(){
document.body.style.backgroundImage = "linear-gradient(to top left, #462247 , #15ff00 )"
console.log("convertedg")
document.querySelector(".current").style.backgroundColor = "#058c13";
document.querySelector(".current2").style.backgroundColor = "#058c13";
document.querySelector(".table--left").style.backgroundColor="rgba(255, 255, 255, 0.35)"
document.querySelector(".table--right").style.backgroundColor="rgba(255, 255, 255, 0.35)"

document.querySelector(".btn").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--roll").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--hold").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".table--score").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector("#tname--2").style.color="black"
document.querySelector("#tname--1").style.color="black"
document.querySelector(".btn").style.color="#444"
document.querySelector(".btn--roll").style.color="black"
document.querySelector(".btn--hold").style.color="black"




})


 btnb.addEventListener('click',function(){

document.body.style.backgroundImage = "linear-gradient(to top left, #5c5151 , #4400ff )"
console.log("convertedb")
document.querySelector(".current").style.backgroundColor = "#4400ff";
document.querySelector(".current2").style.backgroundColor = "#4400ff";

document.querySelector(".btn").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--roll").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--hold").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".table--score").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector("#tname--2").style.color="black"
document.querySelector("#tname--1").style.color="black"
document.querySelector(".btn").style.color="#444"
document.querySelector(".btn--roll").style.color="black"
document.querySelector(".btn--hold").style.color="black"
document.querySelector(".player--active").style.backgroundColor="rgba(255, 255, 255, 0.4)"



})


btnp.addEventListener('click',function(){
document.body.style.backgroundImage = "linear-gradient(to top left, #753682 , #ff0008 )";
console.log("converteddefaultn")
document.querySelector(".current").style.backgroundColor = "#c7365f";
document.querySelector(".current2").style.backgroundColor = "#c7365f";
    
document.querySelector(".btn").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--roll").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--hold").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".table--score").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector("#tname--2").style.color="black"
document.querySelector("#tname--1").style.color="black"
document.querySelector(".btn").style.color="#444"
document.querySelector(".btn--roll").style.color="black"
document.querySelector(".btn--hold").style.color="black"
document.querySelector(".player--active").style.backgroundColor="rgba(255, 255, 255, 0.4)"


})


btny.addEventListener('click',function(){
document.body.style.backgroundImage = "linear-gradient(to top left, #1b9e5d , #faf600)"
console.log("convertedy")
document.querySelector(".current").style.backgroundColor = "#bbb943";  
document.querySelector(".current2").style.backgroundColor = "#bbb943"; 

document.querySelector(".btn").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--roll").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".btn--hold").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector(".table--score").style.backgroundColor="rgba(255, 255, 255, 0.6)"
document.querySelector("#tname--2").style.color="black"
document.querySelector("#tname--1").style.color="black"
document.querySelector(".btn").style.color="#"
document.querySelector(".btn--roll").style.color="black"
document.querySelector(".btn--hold").style.color="black"
document.querySelector(".player--active").style.backgroundColor="rgba(255, 255, 255, 0.4)"


})
*/

const modal=document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal= document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".btn--help"); 


const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

const open = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

btnsOpenModal.addEventListener('click',open)
btnCloseModal.addEventListener('click',close)
document.querySelector(".overlay").addEventListener('click',close)
})

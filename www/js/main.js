console.log("Up and running!");
var cards = [
{
  rank : 'queen',
  suit : "hearts",
  cardImage : "images/queen-of-hearts.png"
},
{
  rank : "queen",
  suit : "diamonds",
  cardImage : "images/queen-of-diamonds.png"
},
{
  rank : "king",
  suit :"hearts",
  cardImage : "images/king-of-hearts.png"

},
{
  rank : "king",
  suit :"diamonds",
  cardImage : "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

var score = 0;
function checkForMatch(){



  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  score++;
document.getElementById('score').textContent ='SCORE: '+ score;


} else {

  alert("Sorry, try again.") ;

}
}

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var nums = shuffle([0,1,2,3]);
var resetBoard =function(){
  cardsInPlay =[];
document.getElementById('game-board').innerHTML = "";
for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src' , "images/back.png");
  cardElement.setAttribute('data-id' , i);
  cardElement.addEventListener('click' , flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
nums = shuffle([0,1,2,3]);
}



function flipCard(){
var id = nums[nums.length-1];

var cardId =   id;
  cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);;

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

this.setAttribute('src' , cards[cardId].cardImage);



if (cardsInPlay.length === 2 ){

  checkForMatch();

}

  nums.pop();
}

var check = function(){
flipCard();



}



var createBoard = function(){

for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src' , "images/back.png");
  cardElement.setAttribute('data-id' , i);
  cardElement.addEventListener('click' , flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();




var reset = document.getElementById('butt');
reset.addEventListener('click', resetBoard);

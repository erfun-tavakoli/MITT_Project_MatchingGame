const ul = document.querySelector('.deck');
const card = document.querySelectorAll('.card');
const open = document.getElementsByClassName('open');
const matched = document.getElementsByClassName('match');

const flip = function (card) {
  card.classList.add('show', 'open');
}

const hide = function () {
  open[1].classList.remove('show', 'open');
  open[0].classList.remove('show', 'open');
}

const match = function () {
  open[1].classList.add('match');
  open[0].classList.add('match');
}

function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const shuffleCards = function() {
  const cardsArray = Array.from(card);
  shuffle(cardsArray);

  for (let index = card.length - 1; index >= 0; index--) {
    card[index].remove();
  }

  for (let index = 0; index < cardsArray.length; index++){
    ul.appendChild(cardsArray[index]);
  }
}

shuffleCards();

ul.addEventListener('click', function (event) {  
  if  (event.target.className === 'card') {
    if (open.length < 2 && event.target.classList.contains('card')) {
      flip(event.target);
    }
  } 

  if  (open.length === 2) {  
    if (open[0].innerHTML === open[1].innerHTML) {
      match();
      hide();
    } else {
      setTimeout(hide, 750);
    }
  }

  if  (card.length === matched.length) {
    alert(
      `congrats
      you have won the game!`
    );
  }
});

const restart = document.querySelector('.restart');

restart.addEventListener('click', function (event) {
  for (let index = (card.length - 1); index >= 0; index--) {
    card[index].classList.remove('show', 'open', 'match');
    shuffleCards();
  }
});
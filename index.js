let itsYourTurn = 'circle';
const turn = document.querySelector('#turn');

const move = (event) => {
  if (itsYourTurn === 'circle') {
    event.target.disabled = true;
    event.target.classList.add('game__field--circle');
    itsYourTurn = 'cross';
    turn.src = 'cross.svg';
  } else {
    event.target.disabled = true;
    itsYourTurn = 'circle';
    event.target.classList.add('game__field--cross');
    turn.src = 'circle.svg';
  }
  console.log(event);
};

const buttons = document.querySelectorAll('.game__field button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}

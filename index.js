const buttons = document.querySelectorAll('.empty');
const players = ['circle', 'cross'];
let a = 0;

const move = (evt) => {
  evt.target.classList.add(`game__field--${players[a]}`);
  evt.target.disabled = true;

  a += 1;
  if (a === players.length) {
    a = 0;
  }
  document.querySelector('#turn').src = `images/${players[a]}.svg`;
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'křížkem';
  } else if (field.classList.contains('board__field--circle')) {
    return 'kolečkem';
  }
};

const boardSize = 10;
const fields = document.querySelectorAll('.game__field--btn');

const getField = (row, column) => {
  return fields[row * boardSize + column];
};

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;

  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

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

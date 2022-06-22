// CSS at a glance

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game;

const render = () => {
  // puzzleEl.textContent = game.puzzle; <p>*** **** ******</p>
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game.statusMessage;

  //challenge area
  //1. for each character or letter in the string, add a span tags into #puzzle
  //2. the spans text should contain a letter itself
  game.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span'); //<span></span>
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
    //<p>
    //<span>*</span>
    //<span>*</span>
    //<span>*</span>
    //</p>
  });
};

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle('3');
  game = new Hangman(puzzle, 3); //integrating the api getPuzzle function onto our app

  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

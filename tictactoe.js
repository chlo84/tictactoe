// create a bunch of divs of boxes for the player to put x's and o's in.
const gameBoard = document.querySelector('.game-board');
function handledBoxClicked (e){
    e.target.innerText = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
}
for(let i = 0; i < 9; i++){
 
const box = document.createElement('div');

box.setAttribute('class', 'box');
box.setAttribute('data', i);
box.addEventListener('click', handledBoxClicked);

gameBoard.appendChild(box);

}

let playerTurn = document.querySelector('.player-turn');
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
playerTurn.innerHTML = currentPlayer + "'s turn";
let winningConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    for(let i = 0; i < boxes.length; i++){
    let currentBox = boxes[i];
    currentBox.innerText = '';
    }
})



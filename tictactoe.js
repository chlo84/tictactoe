// create a bunch of divs of boxes for the player to put x's and o's in.
const gameBoard = document.querySelector('.game-board');
let playerTurn = document.querySelector('.player-turn');
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
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
playerTurn.innerHTML = currentPlayer + "'s turn";

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  for(let i = 0; i < boxes.length; i++){
    let currentBox = boxes[i];
    currentBox.innerText = '';
    currentPlayer = 'X';
    gameActive = true;
    playerTurn.innerHTML = currentPlayer + " 's turn";
    gameState = ["", "", "", "", "", "", "", "", ""];

  }
})

function handledBoxClicked (e){
  if(gameActive === false)return
  if(e.target.innerText !== '')return 
  e.target.innerText = currentPlayer;
  gameState[e.target.getAttribute('data')] = currentPlayer
  
  checkWin()
  if(gameActive === false){
    return
  }
  //currentPlayer = currentPlayer === 'X' ? 'O': 'X';
  playerSwitch()
}
function playerSwitch(){
  if(currentPlayer === 'X'){
    currentPlayer = 'O'
  }else{
    currentPlayer = 'X'
  }
  playerTurn.innerHTML = currentPlayer + "'s turn";
}

function checkWin(){
  for(let i = 0; i < winningConditions.length; i++){
    let condition = winningConditions[i]
    //[2,4,6]
    if(
      gameState[condition[0]] === gameState[condition[1]] &&
      gameState[condition[0]] === gameState[condition[2]] &&
      gameState[condition[0]] !== "" 
      ){
      console.log('winner')
      playerTurn.innerHTML = currentPlayer + " Won!";
      gameActive = false
    }
  }  
}

for(let i = 0; i < 9; i++){
  const box = document.createElement('div');

  box.setAttribute('class', 'box');
  box.setAttribute('data', i);
  box.addEventListener('click', handledBoxClicked);

  gameBoard.appendChild(box);
}


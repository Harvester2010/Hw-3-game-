function isGame() {
    let user = prompt('Please, enter your name');
  
    if (user === '') {
      user = 'user';
    }
  
    function checkSign() {
      const sign = prompt('Rock, Scissors, Paper... Please make your move');
      if (sign === null) {
        alert('You aborted this game. To start new game just refresh the page.');
        return isfinish();
      } if (sign === 'rock' || sign === 'scissors' || sign === 'paper') {
        return sign;
      }
      return checkSign();
    }
  
    checkSign();
  
    function moveComputer() {
      const arr = ['rock', 'scissors', 'paper'];
      const integerMove = Math.floor(Math.random() * arr.length);
      const computerChoice = arr[integerMove];
  
      return computerChoice;
    }
  
    function moveComputerResult(callback) {
      return alert(`Computer move is: ${callback()}`);
    }
    moveComputerResult(moveComputer);
  
    let userScore = 0;
    let computerScore = 0;
    function isBattle(callback1, callback2) {
      while (userScore <= 3 || computerScore <= 3) {
        switch (callback1()) {
          case 'rock':
            if (callback2() === 'rock') {
              return isGame();
            } if (callback2() === 'scissors') {
              userScore += 1;
              return alert(`You won this round: Current count is : ${user}: ${userScore}: Computer ${computerScore}`);
            }
            computerScore += 1;
            return alert(`You won this round: Current count is : ${user}: ${userScore}: Computer ${computerScore}`);
  
          case 'scissors':
            if (callback2() === 'scissors') {
              return isGame();
            } if (callback2() === 'paper') {
              userScore += 1;
              return alert(`You won this round: Current count is : ${user}: ${userScore}: Computer ${computerScore}`);
            }
            computerScore += 1;
            return alert(`You won this round: Current count is : ${user}: ${userScore}: Computer ${computerScore}`);
  
          case 'paper':
            if (callback2() === 'paper') {
              return isGame();
            } if (callback2() === 'rock') {
              userScore += 1;
              return alert(`You won this round: Current count is : ${user}: ${userScore}: Computer ${computerScore}`);
            }
            computerScore += 1;
            return alert(`You won this round: Current count is : ${user}: ${userScore}: Computer ${computerScore}`);
        }
      }
    }
    isBattle(checkSign, moveComputer);
    function isfinish() {
      if (userScore === 3) {
        alert(`Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`);
      } else if (computerScore === 3) {
        alert(`Sorry. You lost this game. Count - You: ${userScore} : ${computerScore}`);
      } else {
        alert('You aborted this game. To start new game just refresh the page.');
      }
    }
    return confirm('Do you want to start new game?') ? isGame() : false;
  }
  isGame();
  

 

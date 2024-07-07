  const score = {
    Wins : 0 ,
    Losses: 0 ,
    Ties: 0
  };
  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3 ) {
      computerMove ='Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
      computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1 ){
      computerMove ='Scissors';
    }
    return computerMove;
      
 };

 function playGame(playerMove){
  const computerMove = pickComputerMove();

    let results = '';
    if(playerMove === 'Rock'){
      if( computerMove === 'Rock') {
        results = 'Its a Tie';
      }
      else if( computerMove === 'Paper') {
        results = 'You Lose';
      }
      else if ( computerMove === 'Scissors'){
        results = 'You Win';
      }
    }
      else if(playerMove === 'Paper'){
        if( computerMove === 'Rock') {
          results = 'You Win';
        }
        else if( computerMove === 'Paper') {
          results = 'Its a Tie';
        }
        else if ( computerMove === 'Scissors'){
          results = 'You Lose';
        }
      }
      else if (playerMove === 'Scissors'){
        if( computerMove === 'Rock') {
          results = 'You Lose';
        }
        else if( computerMove === 'Paper') {
            results = 'You Win';
        }
        else if ( computerMove === 'Scissors'){
            results = 'Its a Tie';
        }
      }

      if(results === 'You Win' ){
        score.Wins += 1 ;
      }
      else if(results === 'You Lose' ){
        score.Losses += 1 ;
      }
      else if (results === 'Its a Tie' ){
        score.Ties += 1 ;
      }
    alert( ` You picked ${playerMove}. Computer picked ${computerMove}. ${results}
    Wins:${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)
  };
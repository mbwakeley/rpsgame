// //Instructions: Let's play a game of rock paper scissors! Each player passes in either "rock" "paper" or "scissors". 
//You have to return which player won! In case of a draw return Draw.

function rpsGame(player1, player2){
  if (player1 === "rock" && player2 ==="scissors"){
    return "Player 1 wins"
  } else if (player1 ==="scissors" && player2 ==="paper"){
    return "Player 1 Wins"
  } else if (player1 === 'paper' && player2 === 'rock'){
    return 'Player 1 Wins!!'
  } else if (player1 === player2){
    return "It's a draw!"
  } else{
    return "Player 2 Wins!!"
  }
}

rpsGame("paper", "paper")

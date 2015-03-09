
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return  move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    
    /*player wins cases */
    if(playerMove == "rock" && computerMove == "scissors")
    {winner="player";}
    else if(playerMove == "scissors" && computerMove == "paper")
    {winner="player";}
    else if(playerMove == "paper" && computerMove == "rock")
    {winner="player";}

    /*computer wins cases */
    else if(playerMove == "rock" && computerMove == "paper")
    {winner="computer";}
    else if(playerMove == "scissors" && computerMove == "rock")
    {winner="computer";}
    else if(playerMove == "paper" && computerMove == "scissors") 
    {winner="computer";}
    
    /*tie cases */
    else if(playerMove == computerMove)
    {winner="tie";}
    return winner;
}

function playTo(maxGames) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
   

    while(playerWins<maxGames || computerWins<maxGames) {
        var result = getWinner(getPlayerMove(), getComputerMove());
        if(result == 'player'){
            playerWins++;
            console.log("player wins! You have won "+playerWins+" times, and the computer has won "+computerWins+" times.");
        } else if(result == 'computer'){
            computerWins++;
            console.log("computer wins! You have won "+playerWins+" times, and the computer has won "+computerWins+" times.");
        } else if(result =='tie'){
            console.log("Its a Tie! You have won "+playerWins+" times, and the computer has won "+computerWins+" times.");
        } 
        
        else {console.log("thats not how you play!");
        }
    }

    return [playerWins, computerWins];

}

playTo(5);

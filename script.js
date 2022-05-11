function computerSelection(){
    choices = ['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*choices.length)]
}
function playerSelection(){
    choice = prompt("Enter your choice:");
    return choice.toLowerCase();
}

function playGame(compChoice = computerSelection(),playerChoice = playerSelection()){
    let winner = false;
    if(compChoice=='rock' && playerChoice=='scissor'){
        console.log("rock beats scissor!!");
        winner = false;
    }
    else if (compChoice=='scissor' && playerChoice=='rock'){
        console.log("rock beats scissor!!");
        winner = true;
    }
    else if(compChoice=='scissor' && playerChoice=='paper'){
        console.log("scissor cuts paper!!");
        winner = false;
    }
    else if (compChoice=='paper' && playerChoice=='scissor'){
        console.log("scissor cuts paper!!");
        winner = true
    }
    else if(compChoice=='paper' && playerChoice=='rock'){
        console.log("paper covers rock!!");
        winner = false;
    }
    else if (compChoice=='rock' && playerChoice=='paper'){
        console.log("paper covers rock!!");
        winner = true;
    }
    else console.log("Try again!!");

    return winner == true ? "Player" : "Computer";
}

function game(rounds = 5){
    playerScore = 0;
    compScore = 0;
    for (let i=1;i<=rounds;i++){
        console.log("Round"+i);
        compChoice = computerSelection();
        playerChoice = playerSelection();
        console.log("Computer plays " + compChoice);
        console.log("Player plays " + playerChoice);
        winner = playGame(compChoice,playerChoice);
        console.log("Winner is " + winner + "!!");
        if (winner=="Player")
            playerScore += 1;
        if (winner=="Computer")
            compScore += 1;
    }
    if (playerScore>compScore)
        console.log("Player wins the game!! :)");
    else console.log("Computer wins the game. :(");
    
}
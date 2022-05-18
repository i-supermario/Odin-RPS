function computerSelection(){
    choices = ['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*choices.length)]
}
var result = document.querySelector(".resulttext");
var scores = document.querySelectorAll(".scoretext");
var gif = document.querySelector(".gif");

function playGame(compChoice = computerSelection(),playerChoice,event){
    var playerScore = parseInt(scores[0].textContent);
    var compScore = parseInt(scores[1].textContent);
    let winner = false;
    if(compChoice=='rock' && playerChoice=='scissor'){
        result.textContent = "rock beats scissor!!";
        gif.src = "https://media3.giphy.com/media/JQAXhJMw2WbKWYjn8g/giphy.gif";
        winner = false;
    }
    else if (compChoice=='scissor' && playerChoice=='rock'){
        result.textContent = "rock beats scissor!!";
        gif.src = "https://media3.giphy.com/media/JQAXhJMw2WbKWYjn8g/giphy.gif";
        winner = true;
    }
    else if(compChoice=='scissor' && playerChoice=='paper'){
        result.textContent = "scissor cuts paper!!";
        gif.src = "https://cdn.dribbble.com/users/729829/screenshots/4189148/galshir-cutting-paper-dirbbble.gif";
        winner = false;
    }
    else if (compChoice=='paper' && playerChoice=='scissor'){
        result.textContent = "scissor cuts paper!!";
        gif.src = "https://cdn.dribbble.com/users/729829/screenshots/4189148/galshir-cutting-paper-dirbbble.gif";
        winner = true
    }
    else if(compChoice=='paper' && playerChoice=='rock'){
        result.textContent = "paper covers rock!!";
        gif.src = "https://c.tenor.com/mpdRJ7wlNNIAAAAM/rock-paper.gif";
        winner = false;
    }
    else if (compChoice=='rock' && playerChoice=='paper'){
        result.textContent = "paper covers rock!!";
        gif.src = "https://c.tenor.com/mpdRJ7wlNNIAAAAM/rock-paper.gif";
        winner = true;
    }
    else {
        result.textContent = "try again";
        gif.src = "https://media0.giphy.com/media/4Z1FfSmDgdAZIqvIOg/giphy.gif";
        return;
    }
    winner == true ? playerScore++ : compScore++;
    scoreUpdate(playerScore,compScore);
    
}

function scoreUpdate(p,c){
    scores[0].textContent =  p.toString();
    scores[1].textContent = c.toString();
    var check = 0;
    if(p == 5){
        result.textContent = "Player Wins";
        check = 1;
    }
    if(c == 5){
        result.textContent = "Computer Wins";
        check = 1;
    }
    if(check == 1){
        scores[0].textContent = "0";
        scores[1].textContent = "0";
    } 
}
var rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click',(evt) => playGame(computerSelection(),playerChoice = "rock",evt));
var paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click',(evt) => playGame(computerSelection(),playerChoice = "paper",evt));
var scissorBtn = document.querySelector('.scissor');
scissorBtn.addEventListener('click',(evt) => playGame(computerSelection(),playerChoice = "scissor",evt));

// getComputerChoice func to randomly choose rock paper scissors
//playerSelection for now hard coded with rock --> slowly change to prompt from user
//playerSelection should not be case sensitive hence use lower() 
//https://stackoverflow.com/questions/71506000/rock-paper-and-scissor-picks-answers-randomly
//the link uses a hashmap, using hashmap implementation reduces all the if else statements make it cleaner
let computerScore=0, playerScore=0,totalGame=0;
function getComputerChoice(){
    //store rock paper scissors and use random 
    //Math.floor rounds down ensure the random is [0,1,2] because 
    // random return any value equal to 0 and less than 1.
    const random = Math.floor(Math.random() * 3)
    if (random === 0)
        return 'rock';
    else if (random === 1 )
        return 'scissors';
    else if (random === 2 )
        return 'paper';
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerChoice = playerSelection.toLowerCase();
    //draw
    if (playerChoice === computerSelection) 
    // to use concatenating string of ${} need use ` ` and not "" or ''
        console.log(`Draw ${playerChoice} vs ${computerSelection}`);

    //if player loses to computer    
    else if ((playerChoice === 'rock' && computerSelection ==='paper') || 
            (playerChoice === 'scissors' && computerSelection ==='rock') ||
            (playerChoice === 'paper' && computerSelection ==='scissors')){
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`)
        computerScore++;
        }
    //player wins to computer   
    else{
        console.log(`You win! ${playerChoice} beats ${computerSelection}`)
        playerScore++;
    }
    console.log(`Player: ${playerScore} Computer ${computerScore}`)
  }
   
function game(){
    for(let i =0;i<5;i++){
        const playerSelection = prompt("Choose rock paper scissors: ")
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(`total games played: ${i}`)
    }
}

game()
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection,playerSelection)
// console.log(playRound(playerSelection, computerSelection));
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computerSelection = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
    console.log(computerSelection);
    return computerSelection;
}

function playerPlay() {
    const playerInput = prompt("Please enter rock, or paper, or scissors to start the game.");
    const playerSelection = playerInput.trim().toLowerCase();
    // if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    //     return playerSelection;
    // } else {
    //     window.alert("Invalid input. Please type in your choice using correct spelling of the word.")
    // }
    // if (!((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors"))) {
    //     alert("Invalid choice. Please choose rock paper or scissors before continuing!");
    // }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {

        return "It's a tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!";
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {

    for (let round = 1; round <= 5; round++) {
        const playerSelection = playerPlay();
        if (!((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors"))) {
            alert("Invalid choice. Please choose rock paper or scissors before continuing!");
            round--;
        }
        const computerSelection = computerPlay();
        let gameRound = playRound(playerSelection, computerSelection);
        console.log(gameRound);
        console.log("-----------")
        if (gameRound == "Computer wins!") {
            computerScore++;
        } else if (gameRound == "You win!") {
            playerScore++;
        }
    }

    if (computerScore > playerScore) {
        console.log("Final result: COMPUTER WINS!!");
    } else if (playerScore > computerScore) {
        console.log("Final result: PLAYER WINS!!");
    } else {
        console.log("Final result: IT'S A TIE");
    }


    return computerScore;
    return playerScore;

}

game();
let playAgain = confirm("Play again?");
playAgain ? location.reload() : alert("Okay, see you again!");
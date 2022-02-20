function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function play(player, comp){
    let caseInsenstive = player.toLowerCase();
    let caseInsenstiveComp = comp.toLowerCase();
    if (caseInsenstive === "rock"){
        if (caseInsenstiveComp === "rock"){
            return "Tie!";
        }
        else if (caseInsenstiveComp === "paper"){
            return "You Lose! Paper beats Rock!";
        }
        else if (caseInsenstiveComp === "scissors"){
            return "You Win! Rock beats Scissors";
        }
    }
    else if (caseInsenstive === "paper"){
        if (caseInsenstiveComp === "rock"){
            return "You Win! Paper beats Rock!";
        }
        else if (caseInsenstiveComp === "paper"){
            return "Tie!";
        }
        else if (caseInsenstiveComp === "scissors"){
            return "You Lose! Scissors beats Paper!";
        }
    }
    else if (caseInsenstive === "scissors"){
        if (caseInsenstiveComp === "rock"){
            return "You Lose! Rock beats Scissors!";
        }
        else if (caseInsenstiveComp === "paper"){
            return "You Win! Scissors beats Paper";
        }
        else if (caseInsenstiveComp === "scissors"){
            return "Tie!";
        }
    }
}

function game(){
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let results = document.getElementById("results");
    let resultsPlay = document.getElementById("player-score");
    let resultsComp = document.getElementById("comp-score");
    let player = 0;
    let comp = 0;
    rock.addEventListener("click", () => {
        let answer = play("rock", computerPlay())
        results.innerHTML = answer;
        if (answer.substring(4, 8) === "Win!"){
            player++;
        }
        else if (answer.substring(4, 8) === "Lose"){
            comp++
        }
        resultsPlay.innerHTML = `Player: ${player}`;
        resultsComp.innerHTML = `Computer: ${comp}`;
        if (player === 5){
            alert("Player Wins");
            player = 0;
            comp = 0;
        }
        else if (comp === 5){
            alert("Computer Wins");
            player = 0;
            comp = 0;
        }
    });
    paper.addEventListener("click", () => { 
        let answer = play("paper", computerPlay())
        results.innerHTML = answer;
        if (answer.substring(4, 8) === "Win!"){
            player++;
        }
        else if (answer.substring(4, 8) === "Lose"){
            comp++
        }
        resultsPlay.innerHTML = `Player: ${player}`;
        resultsComp.innerHTML = `Computer: ${comp}`;
        if (player === 5){
            alert("Player Wins");
            player = 0;
            comp = 0;
        }
        else if (comp === 5){
            alert("Computer Wins");
            player = 0;
            comp = 0;
        } 
    });
    scissors.addEventListener("click", () => { 
        let answer = play("scissors", computerPlay())
        results.innerHTML = answer;
        if (answer.substring(4, 8) === "Win!"){
            player++;
        }
        else if (answer.substring(4, 8) === "Lose"){
            comp++
        }
        resultsPlay.innerHTML = `Player: ${player}`;
        resultsComp.innerHTML = `Computer: ${comp}`;
        if (player === 5){
            alert("Player Wins");
            player = 0;
            comp = 0;
        }
        else if (comp === 5){
            alert("Computer Wins");
            player = 0;
            comp = 0;
        } 
    });
}

game();

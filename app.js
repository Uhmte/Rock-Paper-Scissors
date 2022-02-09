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
    for (let i = 0; i < 5; i++){
        let player = prompt("Rock Paper Or Scissors.")
        console.log(player);
        console.log(play(player, computerPlay()));
    }
}

game();

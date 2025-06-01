let a = document.getElementById("rock");
let b = document.getElementById("paper");
let c = document.getElementById("scissor");
let d = document.getElementById("res");
let e = document.getElementById("ps");
let f = document.getElementById("cs");
let playerscore = 0;
let computerscore = 0;
function play(event) {
    let compchoices = ["rock", "paper", "scissor"];
    let compchoice = compchoices[Math.floor(Math.random() * 3)];
    let playerchoice = event.target.id;
    if (playerchoice === compchoice) {
        d.textContent = "It's a Draw!";
    } else if (
        (compchoice === "rock" && playerchoice === "scissor") ||
        (compchoice === "scissor" && playerchoice === "paper") ||
        (compchoice === "paper" && playerchoice === "rock")
    ) {
        d.textContent = "Computer Wins!";
        computerscore++;
    } else {
        d.textContent = "Player Wins!";
        playerscore++;
    }
    f.textContent = `Computer Score: ${computerscore}`;
    e.textContent = `Player Score: ${playerscore}`;
}

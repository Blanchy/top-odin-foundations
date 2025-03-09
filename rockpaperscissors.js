const rpsBtn = document.querySelector("#rpsbtn");
const scoreLog = document.querySelector("#game-log");

var round = 0;
var usr_score = 0;
var cmp_score = 0;

rpsBtn.addEventListener("click", () => {
    // reset score
    var round = 1;
    usr_score = 0;
    cmp_score = 0;


    while (round <= 5) {
        let usr = usrTurn(round);
        let cmp = compTurn();

        let result = isUserWin(usr, cmp);
        let summary = `Round ${round}\nUser: ${usr} | Computer: ${cmp}\n`;
        if (result == 1) {
            alert(summary + "You win!");
            usr_score++;
        } else if (result == 0) {
            alert(summary + "Computer wins!");
            cmp_score++;
        } else {
            alert(summary + "Draw!");
        }

        scoreLog.innerText = gameStr;
        round++;
    }

    // final tally
    if (usr_score == cmp_score) {
        alert("It's a draw!")
    } else if (usr_score > cmp_score) {
        alert("Player wins!");
    } else alert("Computer wins!");

    scoreLog.innerText = `Round ${round}:\nUser ${usr_score} -- Computer ${cmp_score}`;
        
})

// 0 false
// 1 true
// -1 draw
function isUserWin(usr, cmp) {
    if (usr == cmp) return -1;
    else if ( (usr == "rock" && cmp == "scissors") ||
              (usr == "scissors" && cmp == "paper") ||
              (usr == "paper" && cmp == "rock") ) return 1;
    else return 0;
}

// Computer's turn
function compTurn() {
    let num = Math.floor(Math.random() * (3 - 1) + 1);
    console.log("number: " + num);
    switch (num) {
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        default: return "scissors"; break;
    }
}

function usrTurn(round) {
    let usr_input = prompt(`Round ${round}/5: Rock, paper, or scissors?`);
    console.log("input val:" + usr_input);
    if (usr_input.toLowerCase() != "rock" && usr_input.toLowerCase() != "paper" && usr_input.toLowerCase() != "scissors") {
        alert("Invalid input. Try again.");
        usrTurn(round);
    } else return usr_input.toLowerCase();
    
}
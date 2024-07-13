let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let restart = document.querySelector("#Restart");
let score = document.querySelectorAll(".para");

let Y = 0, X = 0;
let player = "X";

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btn.forEach((cli) => {
    cli.addEventListener("click", () => {
        console.log("clicked");
        cli.innerHTML = player;
        player = player === "X" ? "O" : "X";
        cli.disabled = true;
        winner();
    });
});

restart.addEventListener("click", () => {
    for (let btns of btn) {
        btns.innerHTML = "";
        btns.disabled = false;
    }
    
    score[2].innerHTML = "No winner yet";
});

reset.addEventListener("click", () => {
    for (let btns of btn) {
        btns.innerHTML = "";
        btns.disabled = false;
    }
    player = "X";
    Y = 0;
    X = 0;
    score[0].innerHTML = "Wins of X : 0";
    score[1].innerHTML = "Wins of O : 0";
    
});


const winner = () => {
    for (let pattern of wins) {
        let pos1val = btn[pattern[0]].innerHTML;
        let pos2val = btn[pattern[1]].innerHTML;
        let pos3val = btn[pattern[2]].innerHTML;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner is", pos1val);
                for (let btns of btn) {
                    btns.disabled = true;
                }
                if (pos1val == "X") {
                    X++;
                    score[0].innerHTML = "Wins of X : " + X;
                } else {
                    Y++;
                    score[1].innerHTML = "Wins of O : " + Y;
                }
                score[2].innerHTML = "Winner is: " + pos1val;
            }
        }
    }
};

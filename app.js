// Select DOM buttons
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");
const scoreSelect = document.querySelector("#playTo");

// Select Player Scores
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

// Create variables for player scores
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

// Click event listeners for player buttons

scoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
});

p1Button.addEventListener("click",function() {
    if(!gameOver) {
        p1Score += 1;
        if(p1Score === winningScore) { 
            gameOver = true;
            p1Display.classList.add("has-text-primary");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click",function() {
    if(!gameOver) {
        p2Score += 1;
        if(p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("has-text-primary");
            p1Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", reset);

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("has-text-primary","has-text-danger");
    p2Display.classList.remove("has-text-primary","has-text-danger");
    p1Button.disabled = false;
    p2Button.disabled = false;
}
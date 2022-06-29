
const holes = document.querySelectorAll(".hole");
const displayTime = document.querySelector(".time");
const displayScore = document.querySelector(".score");
const startBtn = document.querySelector(".start");
const mole = document.querySelector(".mole");

let score = 0;
let time = 30;
let currentPos;

holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if(parseInt(hole.getAttribute("data-index")) === currentPos){
            score++;
            displayScore.innerHTML = score;
        }
    })
});

startBtn.addEventListener("click", start);

function start(){
    let startGame = setInterval(() => {
        holes.forEach(hole => {
            hole.innerHTML = "";
        });

        currentPos = Math.floor(Math.random() * 9);
        holes[currentPos].innerHTML = "mole";

        time--;
        displayTime.innerHTML = time;
        if(time === 0){
            clearInterval(startGame);
            setTimeout(() => {
                alert("Game Over!");
            }, 100)
        }

    }, 1000);
}



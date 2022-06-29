const displayTime = document.querySelector(".time");
const displayScore = document.querySelector(".score");

const hole = document.querySelectorAll(".hole");
const mole = document.querySelector(".mole");

let score;
let currentTime;
let hitPosition;
let oneHit;
let timerMole;
let timerTime;

function randomHole(){
    hole.forEach(className => {
        className.classList.remove("mole")
    });
    let randomPosition = hole[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
    oneHit = -1;
}

function countDown(){
    currentTime--;
    displayTime.textContent = currentTime;
    if(currentTime === 0){
        clearInterval(timerMole);
        clearInterval(timerTime);
    } 
}    

let initGame = () => {
    score = 0;
    clearInterval(timerMole);
    clearInterval(timerTime);

    currentTime = 60;
    displayScore.textContent = 0;

    timerMole = setInterval(randomHole, 500)
    timerTime = setInterval(countDown, 1000)

    hole.forEach(hole => {
        hole.addEventListener("mouseup", () => {
            if(hole.id === hitPosition & oneHit != hitPosition){
            score++;
            displayScore = score;
            oneHit = hitPosition
        }
        })
    })
}


    
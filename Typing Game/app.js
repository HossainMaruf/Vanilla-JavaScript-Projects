const sentence = document.querySelector('.words').textContent;
const words = sentence.split(" ");
var time = document.querySelector(".time");
var score = document.querySelector(".score");
function getRandomIndex() {
    return Math.floor(Math.random()*words.length);
}
// console.log(getRandomIndex());
function printRandomWord() {
    document.querySelector(".text").innerText = words[getRandomIndex()];
}
function getDifficulty() {
    return document.querySelector("select").value;
}

document.querySelector(".text").innerText = words[getRandomIndex()];
function Checker() {
    const writtenValue = document.querySelector("input").value;
    if(document.querySelector(".text").textContent == writtenValue) {
        // console.log('Match');
        printRandomWord();
        score.textContent = parseInt(score.textContent) + 1;
        time.textContent = parseInt(time.textContent) + ((getDifficulty() == "medium") ? 3 : (getDifficulty() == "hard") ? 2 : 5);
        document.querySelector("form").reset();
    } else {
        // console.log('Doesn\'t Match');
    }
}

const Timer = setInterval(function() {
    time.textContent = parseInt(time.textContent) - 1;
    if(time.textContent == 0) {
        clearInterval(Timer);
        Array.from(document.querySelectorAll(".hide")).forEach(function(element) {
            element.style.display = "none";
        });
        document.querySelector(".pop-up").style.display = "block";
        document.querySelector(".result").textContent = score.innerText;
    }
}, 1000);

document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
});


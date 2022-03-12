// Array of words
const ourWords = ["code", "hello", "programming"];

let playGame = document.querySelector(".start");
let words = document.querySelector(".word");
let textwords = document.querySelector(".text-word");
let writtenText = document.querySelector(".writing");
let cond = document.querySelector(".condition");
let conditions = document.querySelector(".conditions");
let congrats = document.querySelector(".congrats");
let gameover = document.querySelector(".gameover");
let good = document.querySelector(".good");
var levels = document.querySelector(".levels");

var i = 0,
    a = 0,
    c = "";
conditions.textContent = 0;


//function start playing
function play() {
    writtenText.focus();
    playGame.remove();
    transition();
    letsstart();
    changeword();
    interval = setInterval(changeword, 4000);

}

//function to display words
function display() {
    words.innerHTML = `<div class="displayletters">
<h4 class="display-word">${ourWords[i]}</h4>
    </div>`;
}



//function to display each word of array using timer
function changeword() {
    letsstart();
    if (i < 3) {
        display();
        i++;
        writtenText.value = "";
    } else {
        clearInterval(interval);
        writtenText.value = "";
        writtenText.remove();
    }
}



var increase = setInterval(() => {
    for (let j = 0; j < ourWords.length; j++) {
        if (writtenText.value == ourWords[j]) {
            a++;
            conditions.textContent++;
            level();
        }
    }


}, 4000);


function letsstart() {
    var timeleft = 3;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 1) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = timeleft;
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}




function level() {
    if (a == 3) {
        congrats.classList.add("active");
    }
}


function transition() {
    textwords.remove();
}
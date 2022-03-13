//Array of words
const words = [
    "atom",
    "angular",
    "pugjs",
    "reactnative",
    "github",
    "twitter",
    "bootstrap",
    "java",
    "code",
    "css",
    "html"
];


//setting levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2,
};

//Default Level
let defaultLevelName = "Normal";//Change Level From Here
let defaultLevelSeconds = lvls[defaultLevelName];//3

//Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");//kelme tazhar
let upcomingWords = document.querySelector(".upcoming-words");//kell el words
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");//time
let scoreGot = document.querySelector(".score .got");//score
let scoreTotal = document.querySelector(".score .total");//3ala
let finishMessage = document.querySelector(".finish");//last div


// Setting Level NAme + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;//3
timeLeftSpan.innerHTML = defaultLevelSeconds;//3
scoreTotal.innerHTML = words.length;

//Disable Paste Event
input.onpaste = function () {
    return false;
}

//start Game
startButton.onclick = function () {
    this.remove();
    input.focus();
    //Generate Word Function
    genWords();
}

function genWords() {
    //Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];//twitter
    //Get Word Index
    let wordIndex = words.indexOf(randomWord);//7
    //Remove WordFrom Array
    words.splice(wordIndex, 1);// remove twitter
    //show The Random Word
    theWord.innerHTML = randomWord;// put the randomword in the box
    //Empty Upcoming Words
    upcomingWords.innerHTML = '';// fadde el div..ma 5asso
    //Generate Words
    for (let i = 0; i < words.length; i++) { // generate all words
        //Create Div ELement
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);//put all words in upcomingwords BOX
    }
    //call start play function
    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;//bthet el wa2et 3 degre // default
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--; // kell senye na2es 1
        if (timeLeftSpan.innerHTML === "0") {
            //stop Timer
            clearInterval(start);//m7i el wa2et
            //Compare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) { // random word === input value
                //empty Input Filed
                input.value = '';
                //Increase Score 
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    //call Generate Word Function
                    genWords();
                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    //Remove upcoming words box
                    upcomingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}



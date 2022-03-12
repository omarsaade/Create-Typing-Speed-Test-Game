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
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector("upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
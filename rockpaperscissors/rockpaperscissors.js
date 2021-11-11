let playerScore = 0
let compScore = 0
let scoreObj = {
    rock: {rock: 0.5, paper: 0, scissors: 1},
    paper: {rock: 1, paper: 0.5, scissors: 0},
    scissors: {rock: 0, paper: 1, scissors: 0.5}
}
let rps = ["rock", "paper", "scissors"]
let comp = document.getElementById("computer")
let player = document.getElementById("playerScore")
let compu = document.getElementById("computerScore")
let gamestate = document.getElementById("gameState")
let currentSymbol = null

let PlayerNum = prompt("Number of players: 1 or 2?")
let PlayerX = prompt("Player X, please imput your username!");
if(PlayerNum == 2){
    let PlayerO = prompt("Player Y, please imput your username!");
}

function gameRock(){
    if(PlayerNum == 1)
    {
        let compRPS = rps[Math.floor(Math.random()*3)]
        comp.innerHTML = "Computer plays: " + compRPS
        playerScore += Number(scoreObj.rock[compRPS])
        compScore += Number(scoreObj[compRPS].rock)
        player.innerHTML = "Your score: " + playerScore
        compu.innerHTML = "Computer score: " + compScore
    
        if(Number(scoreObj.rock[compRPS])==0){
            gamestate.innerHTML = "Computer Win!"
            gamestate.style.color = "red"
            setTimeout(function(){ resetState(); }, 2000);
        }
        if(Number(scoreObj.rock[compRPS])==0.5){
            gamestate.innerHTML = "Draw!"
            gamestate.style.color = "blue"
            setTimeout(function(){ resetState(); }, 2000);
        }
        if(Number(scoreObj.rock[compRPS])==1){
            gamestate.innerHTML = "Player Win!"
            gamestate.style.color = "green"
            localStorage.setItem("RPSscore", Number(localStorage.getItem("RPSscore"))+1)
            console.log(localStorage.getItem("RPSscore"))
            setTimeout(function(){ resetState(); }, 2000);
        }
    }
    else
    {
        if(currentSymbol == "scissors")
        {
            gamestate.innerHTML = "Player 2 Win!"
            gamestate.style.color = "red"
            setTimeout(function(){ resetState(); }, 2000);
        }
        else if(currentSymbol == "rock")
        {
            gamestate.innerHTML = "Draw!"
            gamestate.style.color = "blue"
            setTimeout(function(){ resetState(); }, 2000);
        }
        else if(currentSymbol == "paper")
        {
            gamestate.innerHTML = "Player 1 Win!"
            gamestate.style.color = "green"
            localStorage.setItem("RPSscore", Number(localStorage.getItem("RPSscore"))+1)
            console.log(localStorage.getItem("RPSscore"))
            setTimeout(function(){ resetState(); }, 2000);
        }
        else
        {
            currentSymbol = "rock"
        }
    }
}

function gamePaper(){
    if(PlayerNum == 1)
    {
        let compRPS = rps[Math.floor(Math.random()*3)]
        comp.innerHTML = "Computer plays: " + compRPS
        playerScore += Number(scoreObj.paper[compRPS])
        compScore += Number(scoreObj[compRPS].paper)
        player.innerHTML = "Your score: " + playerScore
        compu.innerHTML = "Computer score: " + compScore

        if(Number(scoreObj.paper[compRPS])==0){
            gamestate.innerHTML = "Computer Win!"
            gamestate.style.color = "red"
            setTimeout(function(){ resetState(); }, 2000);
        }
        if(Number(scoreObj.paper[compRPS])==0.5){
            gamestate.innerHTML = "Draw!"
            gamestate.style.color = "blue"
            setTimeout(function(){ resetState(); }, 2000);
        }
        if(Number(scoreObj.paper[compRPS])==1){
            gamestate.innerHTML = "Player 1 Win!"
            gamestate.style.color = "green"
            localStorage.setItem("RPSscore", Number(localStorage.getItem("RPSscore"))+1)
            console.log(localStorage.getItem("RPSscore"))
            setTimeout(function(){ resetState(); }, 2000);
        }
    }
    else
    {
        if(currentSymbol == "rock")
        {
            gamestate.innerHTML = "Player 2 Win!"
            gamestate.style.color = "red"
            setTimeout(function(){ resetState(); }, 2000);
        }
        else if(currentSymbol == "paper")
        {
            gamestate.innerHTML = "Draw!"
            gamestate.style.color = "blue"
            setTimeout(function(){ resetState(); }, 2000);
        }
        else if(currentSymbol == "scissors")
        {
            gamestate.innerHTML = "Player 1 Win!"
            gamestate.style.color = "green"
            localStorage.setItem("RPSscore", Number(localStorage.getItem("RPSscore"))+1)
            console.log(localStorage.getItem("RPSscore"))
            setTimeout(function(){ resetState(); }, 2000);
        }
        else
        {
            currentSymbol = "paper"
        }
    }
}

function gameScissors(){
    if(PlayerNum == 1)
    {
        let compRPS = rps[Math.floor(Math.random()*3)]
        comp.innerHTML = "Computer plays: " + compRPS
        playerScore += Number(scoreObj.scissors[compRPS])
        compScore += Number(scoreObj[compRPS].scissors)
        player.innerHTML = "Your score: " + playerScore
        compu.innerHTML = "Computer score: " + compScore

        if(Number(scoreObj.scissors[compRPS])==0){
            gamestate.innerHTML = "Computer Win!"
            gamestate.style.color = "red"
            setTimeout(function(){ resetState(); }, 2000);
        }
        if(Number(scoreObj.scissors[compRPS])==0.5){
            gamestate.innerHTML = "Draw!"
            gamestate.style.color = "blue"
            setTimeout(function(){ resetState(); }, 2000);
        }
        if(Number(scoreObj.scissors[compRPS])==1){
            gamestate.innerHTML = "Player 1 Win!"
            gamestate.style.color = "green"
            localStorage.setItem("RPSscore", Number(localStorage.getItem("RPSscore"))+1)
            console.log(localStorage.getItem("RPSscore"))
            setTimeout(function(){ resetState(); }, 2000);
        }
    }
    else
    {
        if(currentSymbol == "paper")
        {
            gamestate.innerHTML = "Player 2 Win!"
            gamestate.style.color = "red"
            setTimeout(function(){ resetState(); }, 2000);
        }
        else if(currentSymbol == "scissors")
        {
            gamestate.innerHTML = "Draw!"
            gamestate.style.color = "blue"
            setTimeout(function(){ resetState(); }, 2000);
        }
        else if(currentSymbol == "rock")
        {
            gamestate.innerHTML = "Player 1 Win!"
            gamestate.style.color = "green"
            localStorage.setItem("RPSscore", Number(localStorage.getItem("RPSscore"))+1)
            console.log(localStorage.getItem("RPSscore"))
            setTimeout(function(){ resetState(); }, 2000);
        }
        else
        {
            currentSymbol = "scissors"
        }
    }
}

function resetState() {
    gamestate.innerHTML = ""
    gamestate.style.color = ""
}
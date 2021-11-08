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

function gameRock(){
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
        setTimeout(function(){ resetState(); }, 2000);
    }
}

function gamePaper(){
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
        gamestate.innerHTML = "Player Win!"
        gamestate.style.color = "green"
        setTimeout(function(){ resetState(); }, 2000);
    }
}

function gameScissors(){
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
        gamestate.innerHTML = "Player Win!"
        gamestate.style.color = "green"
        setTimeout(function(){ resetState(); }, 2000);
    }
}

function resetState() {
    gamestate.innerHTML = ""
    gamestate.style.color = ""
}
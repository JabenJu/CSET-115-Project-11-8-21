let playerScore = 0
let compScore = 0
let scoreObj = {
    rock: {rock: 0.5, paper: 0, scissors: 1},
    paper: {rock: 1, paper: 0.5, scissors: 0},
    scissors: {rock: 0, paper: 1, scissors: 0.5}
}

function gameRock(){
    let rps = ["rock", "paper", "scissors"]
    let compRPS = rps[Math.floor(Math.random()*3)]
    let comp = document.getElementById("computer")
    let player = document.getElementById("playerScore")
    let compu = document.getElementById("computerScore")
    comp.innerHTML = "Computer plays: " + compRPS
    playerScore += Number(scoreObj.rock[compRPS])
    compScore += Number(scoreObj[compRPS].rock)
    player.innerHTML = "Your score: " + playerScore
    compu.innerHTML = "Computer score: " + compScore
    

}

function gamePaper(){
    let rps = ["rock", "paper", "scissors"]
    let compRPS = rps[Math.floor(Math.random()*3)]
    let comp = document.getElementById("computer")
    let player = document.getElementById("playerScore")
    let compu = document.getElementById("computerScore")
    comp.innerHTML = "Computer plays: " + compRPS
    playerScore += Number(scoreObj.paper[compRPS])
    compScore += Number(scoreObj[compRPS].paper)
    player.innerHTML = "Your score: " + playerScore
    compu.innerHTML = "Computer score: " + compScore

}

function gameScissors(){
    let rps = ["rock", "paper", "scissors"]
    let compRPS = rps[Math.floor(Math.random()*3)]
    let comp = document.getElementById("computer")
    let player = document.getElementById("playerScore")
    let compu = document.getElementById("computerScore")
    comp.innerHTML = "Computer plays: " + compRPS
    playerScore += Number(scoreObj.scissors[compRPS])
    compScore += Number(scoreObj[compRPS].scissors)
    player.innerHTML = "Your score: " + playerScore
    compu.innerHTML = "Computer score: " + compScore
}

let iemail = null
let iusername = null
let lemail = null
let lusername = null

let wrongemail = null
let wrongusername = null
let femail = null
let fusername = null



function login(){
    iemail = document.getElementById("loginEmail").value
    iusername = document.getElementById("loginUsername").value
    lusername = localStorage.getItem("username")
    lemail = localStorage.getItem("email")
    wrongemail = document.getElementById("wrongemail")
    wrongusername = document.getElementById("wrongUsername")
    femail = document.getElementById("loginEmail")
    fusername = document.getElementById("loginUsername")

    let gamePageUrl = "../links/game-link.html"
    if(iemail === lemail && iusername === lusername){
        location = gamePageUrl;
    }

    if(iemail != lemail){
        wrongemail.show
        femail.style.borderColor = "red";
    }

    if(iusername != lusername){
        wrongusername.show
        fusername.style.borderColor = "red";
    }
}
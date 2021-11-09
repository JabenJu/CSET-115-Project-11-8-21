let username = null
let email = null
let loginPath = "../login/login.html"
let emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$")
let gamePagePath = "../links/game-link.html"
let testArr = []

function signUp()
{
    username = $("#username").val()
    console.log()
    email = $("#email").val()
    if( (username.length)==0 || (email.length)==0 || emailRegex.test(email) )
    {
        alert("Please enter a valid username and email")
        testArr.push(1)
    } else {
        localStorage.setItem("username", username)
        localStorage.setItem("email", email)
        localStorage.setItem("RPSscore", 0)
        localStorage.setItem("TTTscore", 0)
        location = gamePagePath
    }
}
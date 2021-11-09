let username = null
let password = null
let loginPath = "login.html"

function signUp()
{
    username = $("#username").val()
    console.log()
    password = $("#password").val()
    if( isNaN(username.length) || isNaN(password.length))
    {
        alert("Please enter a valid username and password")
    }
    else
    {
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        location = loginPath
    }
}
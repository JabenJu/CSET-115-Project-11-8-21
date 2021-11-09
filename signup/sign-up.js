let username = null
let email = null
let loginPath = "../login/login.html"
let emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$")

function signUp()
{
    username = $("#username").val()
    console.log()
    email = $("#email").val()
    if( isNaN(username.length) || isNaN(email.length) || emailRegex.test(email) )
    {
        alert("Please enter a valid username and email")
    }
    else
    {
        localStorage.setItem("username", username)
        localStorage.setItem("email", email)
        location = loginPath
    }
}
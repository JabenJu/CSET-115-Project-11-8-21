window.onload = function()  {
    document.getElementById("usernameDropdown").innerHTML = localStorage.getItem("username")
    document.getElementById("emailDropdown").innerHTML = localStorage.getItem("email")
    document.getElementById("TTTDropdown").innerHTML = localStorage.getItem("TTTscore")
    document.getElementById("RPSDropdown").innerHTML = localStorage.getItem("RPSscore")
}
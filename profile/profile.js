let user = localStorage.getItem("username")
let TTTwins = localStorage.getItem("TTTscore")
let RPSwins = localStorage.getItem("RPSscore")

document.addEventListener("DOMContentLoaded", function() {
    $("#user").html(user)
    $("#TTTwins").html(TTTwins)
    $("#RPSwins").html(RPSwins)
  });
//let user = localStorage.getItem("username")
//let TTTwins = localStorage.getItem("TTTscore")
//let RPSwins = localStorage.getItem("RPSscore")

let user = "user"
let TTTwins = 0
let RPSwins = 0

document.addEventListener("DOMContentLoaded", function() {
    $("#user").html(user)
    $("table").hover(function(){
        $("#TTTwins").html(TTTwins)
        $("#RPSwins").html(RPSwins)
    });
    //$("#TTTwins").html(TTTwins)
    //$("#RPSwins").html(RPSwins)
});

// $("table").hover(function(){
//     $("#TTTwins").html(TTTwins)
//     $("#RPSwins").html(RPSwins)
// });
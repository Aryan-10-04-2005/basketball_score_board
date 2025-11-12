let home = 0 
let guest = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function addHome(point){
    homeScore.innerText = home += point;
    console.log(home);
}
function addGuest(point){
    guestScore.innerText = guest += point;
    console.log(guest);
}
function reset(){
    home = 0
    guest = 0
    homeScore.innerText = home
    guestScore.innerText = guest
}


// write js code here corresponding to index.html
// You should add submit event on the form




var submit = document.querySelector("#masaiForm");

submit.addEventListener("submit", venuefn)

var matcharr=JSON.parse(localStorage.getItem("schedule"))||[];

function venuefn(){

    event.preventDefault()

    // console.log("clicked")

    //catching all the input values;

    // var matchnum = document.querySelector("#matchNum").value;


    // var teamA = document.querySelector("#teamA").value;

    // var teamB = document.querySelector("#teamB").value;

    // var date = document.querySelector("#date").value;

    // var place = document.querySelector("#venue").value;

    // console.log(matchnum, teamA, teamB, date, place)
    // creating object


    var matchdata = {
        matchnum: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value
    }
    
    matcharr.push(matchdata)

    console.log(matcharr)

    localStorage.setItem("schedule", JSON.stringify(matcharr))

}

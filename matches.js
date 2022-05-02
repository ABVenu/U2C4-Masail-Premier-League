// write js code here corresponding to matches.html


var matchesarr =JSON.parse(localStorage.getItem("schedule"))

displaydata(matchesarr)

//filter function

var filtered = document.querySelector("#filterVenue");

filtered.addEventListener("change", filterfn)

function filterfn(){
    var selected = filtered.value;
    
    if(selected !== "none")
    {
        var list = matchesarr.filter(function(ele){
            return ele.venue == selected
        })
         
        // console.log(list)
    
        displaydata(list)
    }

    else{
        displaydata(matchesarr)
    }
    

}


//creating rows and columsn of the table and creating forEcah loop and appending 

var favotritesarr = JSON.parse(localStorage.getItem("favourites"))||[];

function displaydata(data){
    //making tbody zero, incase of display of filter

    document.querySelector("tbody").innerHTML="";

    data.forEach(function (ele) {
        var tr = document.createElement("tr");
    
        var td1 = document.createElement("td");
        td1.innerText=ele.matchnum;
    
        var td2 = document.createElement("td");
        td2.innerText=ele.teamA;
    
        var td3 = document.createElement("td");
        td3.innerText= ele.teamB;
    
       var td4 = document.createElement("td");
       td4.innerText=ele.date;
    
       var td5 = document.createElement("td");
       td5.innerText=ele.venue;
    
       var td6 = document.createElement("td");

       td6.innerText="Add as Favourites";
       td6.style.color="green";
       td6.style.cursor="pointer"
       td6.addEventListener("click", function(){
           favoritiesfn(ele)
       });
       
       tr.append(td1, td2, td3, td4, td5, td6)
       
       document.querySelector("tbody").append(tr)
        
    });


    function favoritiesfn(ele){
        // create a new arr and push the data.

        favotritesarr.push(ele)
            // console.log(favotritesarr)
        localStorage.setItem("favourites", JSON.stringify(favotritesarr))    
        
        
    }
}


  




// var check = favotritesarr.forEach(function(elem){
//     if(elem !== ele)
//     {
//         return true;
        
//     }
    
// })

// if(check == true)
// {

// }





// console.log(check)

// 

// var matchdata = {
//     matchnum: document.querySelector("#matchNum").value,
//     teamA: document.querySelector("#teamA").value,
//     teamB: document.querySelector("#teamB").value,
//     date: document.querySelector("#date").value,
//     venue: document.querySelector("#venue").value
// }

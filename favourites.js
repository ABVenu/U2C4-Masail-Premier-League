// write js code here corresponding to favourites.html


var favarr = JSON.parse(localStorage.getItem("favourites"));

displaydata(favarr)

// console.log(favarr)

function displaydata(data){
    //making tbody zero, incase of display of filter

    document.querySelector("tbody").innerHTML="";

    data.forEach(function (ele, index) {
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

       td6.innerText="Delete";
       td6.style.color="red";
       td6.style.cursor="pointer"
       td6.addEventListener("click", function(){
           deletefn(ele, index)
       });
       
       tr.append(td1, td2, td3, td4, td5, td6)
       
       document.querySelector("tbody").append(tr)
        
    });


    function deletefn(ele, index){
        //delete the particular ele and update remaining;

        favarr.splice(index, 1);

        localStorage.setItem("favourites", JSON.stringify(favarr));

        window.location.reload();
    }
}
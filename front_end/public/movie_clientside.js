const movieDisplay = require("../model/movieDisplay");

document.getElementById("para").onclick = getMovies()
function getMovies(){
  //testing code
  console.log("getMovies");
  var id = $("#id").val();
  console.log("Id: " + id);
  var movieListUl= document.getElementById("movie")
  var newMovieLi=document.createElement("li");
  newMovieLi.innerHTML=movieDisplay.makeDisplayMovie("fast");
  movieListUl.appendChild(newMovieLi);

};
document.getElementById("para").onclick = getMovies;

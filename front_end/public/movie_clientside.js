movie=require ("../model/movieModel");
function getMovies(){
//testing code
console.log("getMovies");
var id = $("#id").val();
console.log("Id: " + id);
return movie.getMovies("fast");

};

function getAllPatients(){
  console.log("got here");
  $.get("/patients", function(data) {
    console.log("got here 2");
    console.log("back from server with: " + data);
    var list =data["patients"];
    console.log(list);
    for (var x in list){

      y = list[x]
      for (var z in y){
        console.log(z);
        console.log(x);
      $("#patients").append("<li> " + z + " </li>");
      }
    }
  })
  };
function searchById(){
console.log("searchByID");
var id = $("#id").val();
console.log("Id: " + id);
var name=$.get("/patient",{id:id}, function(data) {
  console.log("back from server with: " + data);
  console.log(data);
  return data[0]["name"];
});

$("#patients").append(string + "bob" +"</li>");
console.log(`name is ${name}`);

console.log("finished");
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
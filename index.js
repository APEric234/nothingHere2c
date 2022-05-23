const express = require("express");
const path = require("path");
const request = require('request');
const axios = require('axios');
const movieController = require("./webservice/controllers/movieController");
var app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "front_end")));
app.use(express.urlencoded({
  extended: true
})); //support url encoded body
app.use(express.json());
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/front_end/public/movie.html'));
});
/* app.get("/patients",patientController.allPatients);
app.get("/patient",patientController.singlePatient);
app.post("/patient",patientController.addPatient);
app.get("/medicines",medicineController.allMedicines);
app.get("/medicine",medicineController.singleMedicine);
app.post("/medicine",medicineController.addMedicine); */
function getResult(title){
  console.log(title);
  let url="https://api.themoviedb.org/3/search/movie?api_key=b296175fff904e693ba4479d59fd01bd&language=en-US&query="+title+"&page=1&include_adult=false"
  axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });
 /*  axios
  .get(url)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
    return res.data;
  })
  .catch(error => {
    console.error(error);
  }); */
 
}
function display(some){
  return some;
}
app.get("/movies", function (req, response) {
  var title = req.query["search"];
  var body = getResult(title);
  response=body;

});

app.listen(PORT, function () {
  console.log("Server lisetning on port " + PORT);
});
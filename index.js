const express = require("express");
const path = require("path");

const medicineController = require("./backend/medicineController")
const patientController = require("./backend/controllers/movieController")
var app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));//support url encoded body
app.use(express.json());
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/front_end/public/movie.html'));
});
/* app.get("/patients",patientController.allPatients);
app.get("/patient",patientController.singlePatient);
app.post("/patient",patientController.addPatient);
app.get("/medicines",medicineController.allMedicines);
app.get("/medicine",medicineController.singleMedicine);
app.post("/medicine",medicineController.addMedicine); */

app.listen(PORT, function() {
  console.log("Server lisetning on port " + PORT);
});
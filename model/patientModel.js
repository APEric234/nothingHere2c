const {Pool} = require("pg");
const db_url=process.env.DATABASE_URL;
const pool = new Pool({connectionString:db_url});

function getAllPatients(){
  //get all topics
  var sql = "select * from patients";
  pool.query(sql, function(err,res){
    if(err){
      console.log(err.message);
      return {"Error":err.message};
    }else{
      console.log(" back form the db with: ");
      console.log(res);
      var results = res.rows;
      return results;
    }
  });

}
function getPatientById(num){
  console.log
  var sql = `select name from patients where patient_id=${num}`;
  pool.query(sql, function(err,res){
    if(err){
      
      throw err;
      return {"error":"returned this"};
    }else{
      console.log(" back form the db with: ");
      console.log(res.rows);
      return res.rows;
    }
  });
  //get all topics
}
function insertNewPatient(name){
  //inserts to db
  var results = {succes:true}
  return results;

}
module.exports = {getAllPatients:getAllPatients,
  getPatientById:getPatientById,
  insertNewPatient,insertNewPatient

}
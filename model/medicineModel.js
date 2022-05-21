const {Pool} = require("pg");
const db_url=process.env.DATABASE_URL;
console.log(db_url);

const pool = new Pool({connectionString:db_url});

function getAllMedicines(){
  //get all topics
  var sql = "select * from medicines";
  pool.query(sql, function(err,res){
    if(err){
      console.log(err.message);
      throw err;
    }else{
      console.log(" back form the db with: ");
      console.log(res["Result"]);
      return res.rows;
    }
  });

}
function getMedicineId(num){
  var result={"great medicine":num};
  return result;
  //get all topics
}
function insertNewMedicine(name){
  //inserts to db
  var results = {succes:true}
  return results;

}
module.exports = {getMedicineId:getMedicineId,
  insertNewMedicine:insertNewMedicine,
  getAllMedicines,getAllMedicines

}
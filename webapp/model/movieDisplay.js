
const movie=require ("./movieModel");

function makeDisplayMovie(title){
  //get movie display html element created
  
  //simplest version
  return movie.getMovie(title);
  /* var sql = "select * from medicines";
  pool.query(sql, function(err,res){
    if(err){
      console.log(err.message);
      throw err;
    }else{
      console.log(" back form the db with: ");
      console.log(res["Result"]);
      return res.rows;
    }
  }); */

}

module.exports = {makeDisplayMovie:makeDisplayMovie}
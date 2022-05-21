

function makeDisplayMovie(){
  //get movie display html element created
  
  //simplest version
  return "<div id=movie><ul><li>Fast and Furious 70 <ul><li><b>year: </B>2027</li><li><b>Genre: </B>action</li>";

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

module.exports = {makeDisplayMovie:makeDisplayMovie

}
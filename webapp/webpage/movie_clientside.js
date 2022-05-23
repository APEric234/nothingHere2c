// removing till i figure why this isnt working
//import  makeDisplayMovie  from '../model/movieDisplay.js'



function makeDisplayMovie(title) {
  //get movie display html element created

  //simplest version
  return getMovie(title);
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

};
//format image url
function createImageurl(size,path){
  var baseUrl="https://image.tmdb.org/t/p/";
  return baseUrl+"/"+size+"/"+path;
}
//get response from api
function getApiResult(title) {
  //get raw api result
  console.log("url is");
  var url="https://api.themoviedb.org/3/search/movie?api_key=b296175fff904e693ba4479d59fd01bd&language=en-US&query="+title+"&page=1&include_adult=false";
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    success: function (result) {

      movieList = result['results'];
      finalHtmlList = document.getElementById("movie");

      console.log("first");
      console.log(finalHtmlList.innerHTML);
      attributeList=["overview","popularity","release_date","vote_average","vote_count"];
      for (x = 0; x < movieList.length; x++) {
        movieListTitle = document.createElement("li");
        movieListTitle.innerHTML = movieList[x]["original_title"] ;
        movieListTitle.setAttribute("id",movieList[x]["id"]);
        
        movielistAttributes = document.createElement("ul");
        attributeList.forEach(attr => {
          
        genreAtribue = document.createElement("li")
        genreAtribue.innerHTML= attr + ": " +movieList[x][attr];
        movielistAttributes.appendChild(genreAtribue);
        }); 
        moviePoster=document.createElement("li");
        imagePoster=document.createElement("img");
        partial_poster_url=movieList[x]["poster_path"];
        imagePoster.setAttribute("src",createImageurl("w500",partial_poster_url));
        
        imagePoster.setAttribute("id","poster");
        moviePoster.appendChild(imagePoster);
        movielistAttributes.appendChild(moviePoster);

        
        movieListTitle.appendChild(movielistAttributes);
        finalHtmlList.appendChild(movieListTitle);
      }
    }
  });


}



function getMovies() {
  //get all movies
  var searchText=document.getElementById("searchText");
  console.log(searchText.value);
  if (searchText.value.length<=0){
      alert("Text is required");
  }else{
  getApiResult(searchText.value);
  }

  

};

document.getElementById("search").onclick = getMovies;
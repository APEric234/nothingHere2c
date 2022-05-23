
function getMovies(title,movieDisplay){
  //get all patients
  let req = new XMLHttpRequest();
  let url="https://api.themoviedb.org/3/search/movie?api_key=b296175fff904e693ba4479d59fd01bd&language=en-US&query="+title+"&page=1&include_adult=false"
  req.open('GET', url);
  req.onload = function() {
    if (req.status == 200) {
      movieDisplay(this.responseText);
    } else {
      movieDisplay("Error: " + req.status);
    }
  }
  req.send();
}
  



module.exports = {
  getMovies:getMovies
};

const song = new Song();

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click",()=>{
  let name = document.getElementById("txtName").value;
  let artist = document.getElementById("txtArtist").value;
  let album = document.getElementById("txtAlbum").value;
  let genre = document.getElementById("txtGenre").value;
  song.addSong(name, artist, album, genre);
  document.getElementById("divDetalles").innerHTML = "<p> Se agrego el producto </p>";
});
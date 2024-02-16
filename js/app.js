const music = new Music();
const song = new Song();

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click",()=>{
  let name = document.getElementById("txtName").value;
  let artist = document.getElementById("txtArtist").value;
  let album = document.getElementById("txtAlbum").value;
  let genre = document.getElementById("txtGenre").value;
  music.addSong(name, artist, album, genre);
  document.getElementById("divDetalles").innerHTML = "<p> Se agrego el producto </p>";
});

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", ()=>{
  let nameSong = document.getElementById("txtNameSong").value;
  let result = music.searchSong(nameSong);
  console.log(music.song);
  if(result.length > 0)
    song.generateTable(result);
});

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", ()=>{
  let codeSong = document.getElementById("txtCode").value 
  music.deleteSong(codeSong);
  document.getElementById("divDetalles").innerHTML = "El elemento fue eliminado";
}); 
const song = new Song();

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click",()=>{
  let name = document.getElementById("txtName").value;
  let artist = document.getElementById("txtArtist").value;
  let album = document.getElementById("txtAlbum").value;
  let genre = document.getElementById("txtGenre").value;
  let empty= emptyValidation(name, artist, album, genre)
  let sameSong = sameSongValidation(name);
  if (!empty)
    alert("Campos vacios. Ingrese lo que se le pide");
  if(sameSong)
    alert("La cancion ya existe. Ingrese otra.");  
  else{
    song.addSong(name, artist, album, genre);
    alert("Cancion agregada");
  }

});
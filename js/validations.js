
function emptyValidation(name, artist, album, genre) {
  if (name.trim() === "" || artist.trim() === "" || album.trim() === "" || genre.trim() === "") {
    return false;
  }
  else
  {
    return true;
  }
}

function sameSongValidationCreate(name){
  //Obtiene la lista de objetos con la llave songs
  let songs = JSON.parse(localStorage.getItem("songs"));
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].name === name) {
      return true;
    }
  }
  
}

function sameSongValidationUpdate(name,cod){
  //Obtiene la lista de objetos con la llave songs
  let songs = JSON.parse(localStorage.getItem("songs"));
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].name === name && songs[i].code !== cod) {
      return true;
    }
  }
  
}

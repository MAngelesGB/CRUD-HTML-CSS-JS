// Local storage guarda datos en el navegador
//La parte de la izquiera es la llave por la que se accede a los datos y la parte de la derecha es el valor que se guarda
//Unicamente tiene set y get

class Song{
  static lastCode = 0; 
  constructor(name, artist, album, genre){
    this.code = Song.generateCode(); 
    this.name = name; 
    this.artist = artist; 
    this.album = album;
    this.genre = genre;
  }

  static generateCode (){
    return this.lastCode++;
  }

  get getName(){
    return this.name;
  }

  set setName(name){
    this.name = name; 
  }

  get getArtist(){
    return this.artista;
  }

  set setArtist(artist){
    this.artist = artist; 
  }

  get getAlbum(){
    return this.album;
  }

  set setAlbum(album){
    this.album = album; 
  }

  get getGenre(){
    return this.genre
  }

  set setGenre(genero){
    this.genero = genero; 
  }

  addSong(name, artist, album, genre){
    let addSong = new Song(name, artist, album, genre);
    //Obtiene el array vacio, y luego se parsea a un objeto tipo json para agregar un objeto
    const songs = JSON.parse(localStorage.getItem("songs")) ?? [];
    if(songs.length > 0){
      //Se obtiene el ultimo codigo y se le suma 1
      addSong.lastCode = songs[songs.length - 1].code + 1;
    }
    //Agrega el objeto al array
    songs.push(addSong);
    //Se pasa el array al storage
    localStorage.setItem("songs", JSON.stringify(songs));
  }

  searchSong(nameSong){
    const lowerSong = nameSong.toLowerCase();
    //Obtiene la lista de objetos con la llave songs
    const songs = JSON.parse(localStorage.getItem("songs"));

      let results = songs.filter((songSearch) => 
      songSearch.name.toLowerCase().includes(lowerSong)
    );

    return results;

  }

  updateSong(name, artist, album, genre){
  
  }

  deleteSong(codeSong){

    const songs = JSON.parse(localStorage.getItem("songs"));
    let index = songs.findIndex(song => song.code === codeSong);
    songs.splice(index, 1);
    //setea el array en el storage con el objeto eliminado
    localStorage.setItem("songs", JSON.stringify(songs));
  }

  generateTable(result){
    const tbody = document.querySelector("#tableSongBody")
    tbody.innerHTML = "";

    result.forEach(song => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${song.code}</td><td>${song.name}</td><td>${song.artist}</td>
      <td>${song.album}</td><td>${song.genre}</td>
      <td><input type = "button" class="btnDelete" value = "Eliminar"></td>
      <td><input type = "button" class="btnUpdate" value = "Modificar"></td>`;
      tbody.appendChild(tr);
    });
  }
}


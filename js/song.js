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
    this.lastCode++
    return this.lastCode
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

  generateTable(result){
    const tbody = document.querySelector("#tblsongs tbody")
    tbody.innerHTML = "";

    result.array.forEach(song => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${song.getName()}</td><td>${song.getArtist()}</td><td>${song.getAlbum()}</td><td>${song.getGenre()}</td>`;
      tbody.appendChild(tr);
    });
  }

}


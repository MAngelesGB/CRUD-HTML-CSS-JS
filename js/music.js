class Music{
  constructor(){
    this.song = new Array();
  }

  addSong(name, artist, album, genre){
    let addSong = new Song(name, artist, album, genre);
    this.song.push(addSong);
    console.log(this.song);
  }

  searchSong(nameSong){
    const lowerSong = nameSong.toLowerCase();

      let results = this.song.filter((songSearch) => 
      songSearch.name.toLowerCase().includes(lowerSong)
    );

    return results;

  }

  updateSong(name, artist, album, genre){
  
  }

  deleteSong(codeSong){
    let index = this.song.indexOf(codeSong);
    this.song.splice(index, 1);
  
  }
  
}
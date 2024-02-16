const song = new Song();

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", ()=>{
  let nameSong = document.getElementById("txtNameSong").value;
  let result = song.searchSong(nameSong);
  song.generateTable(result);

  if(result.length > 0)
  {
    activeElementBtnDelete();
    activeElementBtnUpdate();
    saveSong();
  }
});


const activeElementBtnDelete = () => {
  const btnDelete = document.querySelectorAll(".btnDelete");
  btnDelete.forEach(element => {
    element.addEventListener("click", ()=>{
      /*regresa al TR con los parentElement, y luego al primer hijo 
        que es el codigo y se obtiene*/
      let codeSong = element.parentElement.parentElement.firstChild.innerHTML; 
      song.deleteSong(parseInt(codeSong));
      btnSearch.click();
      alert("Cancion eliminada");
    }); 
  });
}


const activeElementBtnUpdate = () => {
  const btnUpdate = document.querySelectorAll(".btnUpdate");
  btnUpdate.forEach(element => {
    element.addEventListener("click", ()=>{
      //retira el readonly o lo pone(toggle) de los input
      element.parentElement.parentElement.querySelectorAll("input[type='text']").forEach((element) => {
        element.toggleAttribute("disabled");
      }); 
    }); 
  });
}

const saveSong = () => {
  const btnSave = document.querySelectorAll(".btnSave");
  btnSave.forEach(element => {
    element.addEventListener("click", ()=>{

        let code = element.parentElement.parentElement.querySelector(".tdCode").innerHTML;
        let name = element.parentElement.parentElement.querySelector(".inputName").value;
        let artist = element.parentElement.parentElement.querySelector(".inputArtist").value;
        let album = element.parentElement.parentElement.querySelector(".inputAlbum").value;
        let genre = element.parentElement.parentElement.querySelector(".inputGenre").value;

        let empty= emptyValidation(name, artist, album, genre)
        let sameSong = sameSongValidation(name);
        if (!empty)
          alert("Campos vacios. Ingrese lo que se le pide");
        if(sameSong)
          alert("La cancion ya existe. Ingrese otra.");  
        else{
          song.updateSong(parseInt(code), name, artist, album, genre);
          element.parentElement.parentElement.querySelectorAll("input[type='text']").forEach((element) => {
            element.setAttribute("disabled", true);
            alert("Cancion actualizada");
          });
        } 
    }); 
  });
}


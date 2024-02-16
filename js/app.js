const song = new Song();

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", ()=>{
  let nameSong = document.getElementById("txtNameSong").value;
  let result = song.searchSong(nameSong);
  song.generateTable(result);

  if(result.length > 0)
    activeElementBtnDelete();
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
    }); 
  });
}

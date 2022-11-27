document.querySelector('.busca').addEventListener('submit', (event) =>{
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;
 
})

function mostrarAviso(){
  document.querySelector('.aviso').innerHTML = 'msg';
}
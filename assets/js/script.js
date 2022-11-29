document.querySelector('.busca').addEventListener('submit', (event) =>{
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;
 
  if(input !== ''){
    mostrarAviso('Carregando..');
    
    let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${encodeURI(input)}&units=metric&lang=pt_br&appid=3547116e170faf613382252a0c598d08`);
    let json = await results.json();
  }
})

function mostrarAviso(){
  document.querySelector('.aviso').innerHTML = 'msg';
}
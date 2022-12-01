document.querySelector('.busca').addEventListener('submit', async(event) =>{
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;
 
  if(input !== ''){
    mostrarAviso('Carregando..');
    
    let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${encodeURI(input)}&units=metric&lang=pt_br&appid=3547116e170faf613382252a0c598d08`);
    let json = await results.json();

    if(json.cod === 200){
      mostraInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg
      });
    }else{
      mostrarAviso('Não econtramos esta localização');
    }
  }
})

function mostraInfo(json){
  mostrarAviso('');

  document.querySelector('.resultado').style.display = 'block';
  
  document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
  document.querySelector('.tempInfo').innerHTML = `${json.temp} <span>ºC</span>`;
  document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>Km/h</span>`;
}

function mostrarAviso(msg){
  document.querySelector('.aviso').innerHTML = 'msg';
}
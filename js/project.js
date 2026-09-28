let nameOfCity = document.querySelector('.inputName');
const apiKey = '41c56a5eed60d31c46a6ed186743cd07';
const searchBtn = document.querySelector('.submitBtn');
const error = document.querySelector('.error');



async function cityName(city){
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    document.querySelector('.townName').innerHTML = data[0].name;
    const lat = data[0].lat;
    const lon = data[0].lon;
    let wrap = document.querySelector('.app-wrap');
    wrap.style.display = 'block';
   
const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
const weatherData = await weatherResponse.json();
console.log(weatherData) 
  let mainIcon = document.querySelector('.mainIcon');
  

  document.querySelector('.degreesCelsius').innerHTML = Math.round(weatherData.list[0].main.temp) + '°C';
  document.querySelector('.max').innerHTML = "Max:" + Math.round(weatherData.list[0].main.temp_max) + '°C';
  document.querySelector('.min').innerHTML = "Min:" + Math.round(weatherData.list[0].main.temp_min) + '°C';
  document.querySelector('.hum').innerHTML = "Humidity:" + Math.round(weatherData.list[0].main.humidity) + '%';
  document.querySelector('.pres').innerHTML = "Pressure:" + Math.round(weatherData.list[0].main.pressure) + 'hPa';
  document.querySelector('.velocity').innerHTML = "Speed:" + Math.round(weatherData.list[0].wind.speed) + 'm/s';
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDate();
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  for(let i = 0; i < months.length-1; i++){
    if(i === month){
    document.querySelector('.date').innerHTML = months[i] + ',' + day;
  }
  }
   //-------------time-12:00---------------------------------------------// 
  document.querySelector('.time_9 h4').innerHTML = Math.round(weatherData.list[0].main.temp) + '°C';
  let img_9 = document.querySelector('.time_9 img');
  if(weatherData.list[0].weather[0].main === "Clear"){
    mainIcon.setAttribute('src', './assets/sunny.svg');
    img_9.setAttribute('src', './assets/sunny.svg');
  } else if(weatherData.list[0].weather[0].main === "Clouds"){
    mainIcon.setAttribute('src', './assets/Clouds.svg');
    img_9.setAttribute('src', './assets/Clouds.svg');
  }else if(weatherData.list[0].weather[0].main === "Rain"){
    mainIcon.setAttribute('src', './assets/rain.svg');
    img_9.setAttribute('src', './assets/rain.svg');
  }else if(weatherData.list[0].weather[0].main === "Snow"){
    mainIcon.setAttribute('src', './assets/Snow.svg');
    img_9.setAttribute('src', './assets/Snow.svg');
  }else if(weatherData.list[0].weather[0].main === "Thunderstorm"){
    mainIcon.setAttribute('src', './assets/Thunderstorm.svg');
    img_9.setAttribute('src', './assets/Thunderstorm.svg');
  }else if(weatherData.list[0].weather[0].main === "Drizzle"){
    mainIcon.setAttribute('src', './assets/Drizzle.svg');
    img_9.setAttribute('src', './assets/Drizzle.svg');
  }
 

  const dtTxt9 = new Date(weatherData.list[0].dt_txt);
  let getHour9 = dtTxt9.getHours().toString();
  
  getHour9 = getHour9.padStart(2, '0');
  document.querySelector('.time_9 p').innerHTML = getHour9 + ':' + '00';
  
   //-------------time-15:00---------------------------------------------// 
  document.querySelector('.time_12 h4').innerHTML = Math.round(weatherData.list[1].main.temp) + '°C';
  let img_12 = document.querySelector('.time_12 img');
  if(weatherData.list[1].weather[0].main === "Clear"){
    mainIcon.setAttribute('src', './assets/sunny.svg');
    img_12.setAttribute('src', './assets/sunny.svg');
  } else if(weatherData.list[1].weather[0].main === "Clouds"){
    mainIcon.setAttribute('src', './assets/Clouds.svg');
    img_12.setAttribute('src', './assets/Clouds.svg');
  }else if(weatherData.list[1].weather[0].main === "Rain"){
    mainIcon.setAttribute('src', './assets/rain.svg');
    img_12.setAttribute('src', './assets/rain.svg');
  }else if(weatherData.list[1].weather[0].main === "Snow"){
    mainIcon.setAttribute('src', './assets/Snow.svg');
    img_12.setAttribute('src', './assets/Snow.svg');
  }else if(weatherData.list[1].weather[0].main === "Thunderstorm"){
    mainIcon.setAttribute('src', './assets/Thunderstorm.svg');
    img_12.setAttribute('src', './assets/Thunderstorm.svg');
  }else if(weatherData.list[1].weather[0].main === "Drizzle"){
    mainIcon.setAttribute('src', './assets/Drizzle.svg');
    img_12.setAttribute('src', './assets/Drizzle.svg');
  }

 
  const dtTxt12 = new Date(weatherData.list[1].dt_txt);
  let getHour12 = dtTxt12.getHours().toString();
  
  getHour12 = getHour12.padStart(2, '0');
  document.querySelector('.time_12 p').innerHTML = getHour12 + ':' + '00';

  //-------------time-18:00---------------------------------------------// 
  document.querySelector('.time_15 h4').innerHTML = Math.round(weatherData.list[2].main.temp) + '°C';
  let img_15 = document.querySelector('.time_15 img');
  if(weatherData.list[2].weather[0].main === "Clear"){
    mainIcon.setAttribute('src', './assets/sunny.svg');
    img_15.setAttribute('src', './assets/sunny.svg');
  } else if(weatherData.list[2].weather[0].main === "Clouds"){
    mainIcon.setAttribute('src', './assets/Clouds.svg');
    img_15.setAttribute('src', './assets/Clouds.svg');
  }else if(weatherData.list[2].weather[0].main === "Rain"){
    mainIcon.setAttribute('src', './assets/rain.svg');
    img_15.setAttribute('src', './assets/rain.svg');
  }else if(weatherData.list[2].weather[0].main === "Snow"){
    mainIcon.setAttribute('src', './assets/Snow.svg');
    img_15.setAttribute('src', './assets/Snow.svg');
  }else if(weatherData.list[2].weather[0].main === "Thunderstorm"){
    mainIcon.setAttribute('src', './assets/Thunderstorm.svg');
    img_15.setAttribute('src', './assets/Thunderstorm.svg');
  }else if(weatherData.list[2].weather[0].main === "Drizzle"){
    mainIcon.setAttribute('src', './assets/Drizzle.svg');
    img_15.setAttribute('src', './assets/Drizzle.svg');
  }
  
  const dtTxt15 = new Date(weatherData.list[2].dt_txt);
  let getHour15 = dtTxt15.getHours().toString();
  
  getHour15 = getHour15.padStart(2, '0');
  document.querySelector('.time_15 p').innerHTML = getHour15 + ':' + '00';

  //-------------time-21:00---------------------------------------------// 
  document.querySelector('.time_18 h4').innerHTML = Math.round(weatherData.list[3].main.temp) + '°C';
  let img_18 = document.querySelector('.time_18 img');
  if(weatherData.list[3].weather[0].main === "Clear"){
    mainIcon.setAttribute('src', './assets/sunny.svg');
    img_18.setAttribute('src', './assets/sunny.svg');
  } else if(weatherData.list[3].weather[0].main === "Clouds"){
    mainIcon.setAttribute('src', './assets/Clouds.svg');
    img_18.setAttribute('src', './assets/Clouds.svg');
  }else if(weatherData.list[3].weather[0].main === "Rain"){
    mainIcon.setAttribute('src', './assets/rain.svg');
    img_18.setAttribute('src', './assets/rain.svg');
  }else if(weatherData.list[3].weather[0].main === "Snow"){
    mainIcon.setAttribute('src', './assets/Snow.svg');
    img_18.setAttribute('src', './assets/Snow.svg');
  }else if(weatherData.list[3].weather[0].main === "Thunderstorm"){
    mainIcon.setAttribute('src', './assets/Thunderstorm.svg');
    img_18.setAttribute('src', './assets/Thunderstorm.svg');
  }else if(weatherData.list[3].weather[0].main === "Drizzle"){
    mainIcon.setAttribute('src', './assets/Drizzle.svg');
    img_18.setAttribute('src', './assets/Drizzle.svg');
  }

 
  const dtTxt18 = new Date(weatherData.list[3].dt_txt);
  let getHour18 = dtTxt18.getHours().toString();

  
  
  getHour18 = getHour18.padStart(2, '0');
  document.querySelector('.time_18 p').innerHTML = getHour18 + ':' + '00';

  
}

document.addEventListener('keydown', (event) =>{
  if(event.key === 'Enter'){
    cityName(nameOfCity.value);
  }
})

searchBtn.addEventListener('click', () => {
  const city = nameOfCity.value;
  if(!city){
    alert('The city is not found');
   
  }
  
    cityName(nameOfCity.value);
    
});
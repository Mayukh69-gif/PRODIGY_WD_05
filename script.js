const inputBox = document.querySelector('.input');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind');
const error = document.querySelector('.error');
const show = document.querySelector('.main-content');

async function checkweather(city) {
    const api_key = "58a2bf65c795cb1425d8731030ee76c1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    
    if(weather_data.cod === `404`){
        error.style.display = "flex";
        show.style.display = "none";
        return;
    }
    error.style.display = "none";
    show.style.display = "flex";
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${(weather_data.weather[0].description)}`;
    humidity.innerHTML = `${(weather_data.main.humidity)}%`;
    wind_speed.innerHTML = `${(weather_data.wind.speed)} Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Clouds':
            weather_img.src = "images/clouds.png";
            break;
        case 'Mist':
            weather_img.src = "images/mist.png";
            break;
        case 'Rain':
            weather_img.src = "images/rain.png";
            break;
        case 'Snow':
            weather_img.src = "images/snow.png";
            break;
        case 'Drizzle':
            weather_img.src = "images/drizzle.png";
            break;
        case 'Haze':
            weather_img.src = "images/Haze.png";
            break;
    }
}

searchBtn.addEventListener('click', () => {
    const cityName = inputBox.value.trim(); 
    if (cityName === "") {
        return; 
    }
    checkweather(inputBox.value);
});
const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    fetch(`${apiUrl}?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayWeatherData(data));
}

function displayWeatherData(data) {
    const locationName = document.getElementById('location-name');
    const weatherCondition = document.getElementById('weather-condition');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    locationName.textContent = data.name;
    weatherCondition.textContent = `Weather: ${data.weather[0].description}`;
    temperature.textContent = `Temperature: ${data.main.temp}°F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
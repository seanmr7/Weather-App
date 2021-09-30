class UI {
  constructor() {
    // Define variables from UI
    this.row = document.querySelector('.row');
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.currentTemp = document.getElementById('w-temp');
    this.icon = document.getElementById('w-icon');
    this.detailGroup = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.changeLocation = document.getElementById('w-change-btn');
    this.modal = document.querySelector('.modal-content');
  }

  displayWeather(weatherData, city, state) {
    // Define variables from weather data sent from Openweather API
    const main = weatherData.main;
    const wind = weatherData.wind;
    const iconCode = weatherData.weather[0].icon;
    const description = weatherData.weather[0].description;

    // Set innertext for DOM variables to values. Use Utilities class to convert temperatures and calculate values as required.
    this.location.innerText = `${city}, ${state.toUpperCase()}`;
    this.description.innerText = description;
    this.currentTemp.innerText = `${Utilites.convertToFahrenheit(main.temp)} F (${Utilites.convertToCelsius(main.temp)} C)`
    this.icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    this.humidity.innerText = `Relative Humidity: ${main.humidity}%`;
    this.dewpoint.innerText = `Dewpoint: ${(Utilites.calculateDewpoint(main.temp, main.humidity)*9/5+32).toFixed(1)} F (${Utilites.calculateDewpoint(main.temp, main.humidity)} C)`;
    this.feelsLike.innerText = `Feels Like: ${Utilites.convertToFahrenheit(main.feels_like)} F (${Utilites.convertToCelsius(main.feels_like)} C)`;
    this.wind.innerText = `Wind from the ${Utilites.windDirection(wind.deg)} at ${Utilites.convertWindSpeed(wind.speed)} MPH`
  }

  displayMessage(message, type) {
    const messageUI = document.createElement('div');
    messageUI.classList.add('alert', `alert-${type}`, 'text-center');
    messageUI.innerText = message;

    this.modal.prepend(messageUI);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
}
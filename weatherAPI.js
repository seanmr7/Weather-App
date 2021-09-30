class Weather {
  constructor() {
    this.id = '[API key]';
  }

  // Get weather data from Open Weather API
  async getWeather(city, state) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${this.id}`)
    
    const weather = await weatherResponse.json();
    
    return {
      weather
    }
  }
}
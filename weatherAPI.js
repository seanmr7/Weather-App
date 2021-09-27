class Weather {
  constructor() {
    this.id = '7bac3d9d1b6e1b4d1436d6ab482979bc';
  }

  async getWeather(city, state) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${this.id}`)

    const weather = await weatherResponse.json();

    return {
      weather
    }
  }
}
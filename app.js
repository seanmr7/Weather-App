// Add event listeners
document.addEventListener('DOMContentLoaded', getWeather());

function getWeather() {
  const weatherAPI = new Weather();

  weatherAPI.getWeather('Alexandria', 'VA')
            .then(data => console.log(data))
            .catch(err => console.log(err.message));
}
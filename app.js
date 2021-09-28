// Add event listeners
document.addEventListener('DOMContentLoaded', getWeather());

function getWeather() {
  const weatherAPI = new Weather();
  const uiManagement = new UI();

  weatherAPI.getWeather('Alexandria', 'VA')
            .then(data => uiManagement.displayWeather(data.weather, 'Alexandria', 'VA'))
            .catch(err => console.log(err.message));
}
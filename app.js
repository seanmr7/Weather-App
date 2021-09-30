// Initialize new Weather and UI classes
const weatherAPI = new Weather();
const uiManagement = new UI();

// Add event listeners
document.addEventListener('DOMContentLoaded', getWeather());
document.getElementById('w-change-btn').addEventListener('click', changeLocation);

function getWeather() {
  // Get locally stored city and state
  const city = LocalStorage.getLocation().city;
  const state = LocalStorage.getLocation().state;
  
  // Get the weather data from OpenWeather and display
  weatherAPI.getWeather(city, state)
            .then(data => {
              if(typeof data.message != 'undefined') {
                uiManagement.displayMessage(data.message, 'danger');
              } else {
                uiManagement.displayWeather(data.weather, city, state)
              }
            })
            .catch(err => err);
}

function changeLocation() {
  // Get city and state values from UI
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Run getWeather to determine if location is valid and reset the weather data shown
  weatherAPI.getWeather(city, state)
            .then(data => {
              LocalStorage.changeLocation(city, state);
              uiManagement.displayWeather(data.weather, city, state);
            })
            .catch(err => {
              uiManagement.displayMessage('Location not found. Please enter a valid location', 'danger');
            });
}
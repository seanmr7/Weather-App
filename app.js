const weatherAPI = new Weather();
const uiManagement = new UI();
// Add event listeners
document.addEventListener('DOMContentLoaded', getWeather());
document.getElementById('w-change-btn').addEventListener('click', changeLocation);

function getWeather() {
  const city = LocalStorage.getLocation().city;
  const state = LocalStorage.getLocation().state;
  
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
  
  
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weatherAPI.getWeather(city, state)
            .then(data => {
              if(typeof data.message != 'undefined') {
                console.log('some text')
                uiManagement.changeLocationError('Location Not Found', 'danger');
              } else {
                console.log(data)
                LocalStorage.changeLocation(city, state);
                uiManagement.displayWeather(data.weather, city, state);
              }
            })
            .catch(err => {
              uiManagement.displayMessage('Location not found. Please enter a valid location', 'danger');
            });
}
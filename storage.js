class LocalStorage {
  // Get location from local storage
  static getLocation() {
    let location;
    if(localStorage.getItem('location') === null) {
      location = {
        city: "Alexandria",
        state: "VA"
      };
    } else {
      location = JSON.parse(localStorage.getItem('location'));
    }

    return location;
  }

  // Change location in local storage
  static changeLocation(city, state) {
    const location = {
      city: city,
      state: state
    };

    localStorage.setItem('location', JSON.stringify(location));
  }
}
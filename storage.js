class LocalStorage {
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

  static changeLocation(city, state) {
    const location = {
      city: city,
      state: state
    };

    localStorage.setItem('location', JSON.stringify(location));
  }
}
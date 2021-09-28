class Utilites {
  static convertToCelsius(temp) {
    return (temp - 273.15).toFixed(1);
  }
  
  static convertToFahrenheit(temp) {
    return (this.convertToCelsius(temp) * (9/5) + 32).toFixed(1);
  }

  static calculateDewpoint(temp, humidity) {
    return (this.convertToCelsius(temp) - ((100 - humidity)/5)).toFixed(1);
  }

  static windDirection(windDegree) {
    switch(true) {
      case ((windDegree >= 0 && windDegree < 11.25) || (windDegree >= 348.75)):
        return 'N';
      case (windDegree >= 11.25 && windDegree < 33.75):
        return 'NNE';
      case (windDegree >= 33.75 && windDegree < 56.25):
        return 'NE';
      case (windDegree >= 56.25 && windDegree < 78.75):
        return 'ENE';
      case (windDegree >= 78.75 && windDegree < 101.25):
        return 'E';
      case (windDegree >= 101.25 && windDegree < 123.75):
        return 'ESE';
      case (windDegree >= 123.75 && windDegree < 146.25):
        return 'SE';
      case (windDegree >= 146.25 && windDegree < 168.75):
        return 'SSE';
      case (windDegree >= 168.75 && windDegree < 191.25):
        return 'S';
      case (windDegree >= 191.25 && windDegree < 213.75):
        return 'SSW';
      case (windDegree >= 213.75 && windDegree < 236.25):
        return 'SW';
      case (windDegree >= 236.25 && windDegree < 258.75):
        return 'WSW';
      case (windDegree >= 258.75 && windDegree < 281.25):
        return 'W';
      case (windDegree >= 281.25 && windDegree < 303.75):
        return 'WNW';
      case (windDegree >= 303.75 && windDegree < 326.25):
        return 'NW';
      case (windDegree >= 326.25 && windDegree < 348.75):
        return 'NNW';
    }
  }

  static convertWindSpeed(speed) {
    return (speed).toFixed(1);
  }
}
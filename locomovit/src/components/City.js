class City {
  constructor(name, latitude, longitude) {
    this.name = name;
    this.setLatitude(latitude);
    this.setLongitude(longitude);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getLatitude() {
    return this.latitude;
  }

  setLatitude(newLatitude) {
    if (newLatitude < -90 || newLatitude > 90) {
      throw new Error('Invalid latitude value. Latitude must be between -90 and 90.');
    }
    this.latitude = newLatitude;
  }

  getLongitude() {
    return this.longitude;
  }

  setLongitude(newLongitude) {
    if (newLongitude < -180 || newLongitude > 180) {
      throw new Error('Invalid longitude value. Longitude must be between -180 and 180.');
    }
    this.longitude = newLongitude;
  }
}
const Plane = require("./Plane.js");

class Airport {
  // array to store plane instances = number of plane the airport already have
  airportPlanesList = [];
  // airport capacity
  airportCapacity;

  // constructor = number of planes the airport can have
  constructor(airportCapacity = 1) { this.airportCapacity = airportCapacity; }

  // landPlane function = add plane instances to array, only if array is not fulled
  landPlane = (plane) => {
    if (plane instanceof Plane && this.airportPlanesList.length < this.airportCapacity && !this.isPlaneInAirport(plane)) {
      this.airportPlanesList.push(plane);
    }
    else { console.log("not object or airport fulled or already landed") }
  }

  // changeAirportCapacity function = change capacity of object
  changeAirportCapacity = (newCapacity) => {
    if (typeof newCapacity === 'number') { this.airportCapacity = newCapacity; }
    else { console.log("not a number"); }
  }

  // check airport array objects and compare to airport instance capacity
  isAirportFull() {
    if (this.airportPlanesList.length >= this.airportCapacity) { return true; }
    else { return false; }
  }


  removeAirportPlane(plane) {
    if (this.isPlaneInAirport(plane) && plane instanceof Plane) {
      // find id of plane
      const findPlaneId = plane.id;

      // apply function to each item in array, check if plane's id same as plane's id in array
      const listIndex = this.airportPlanesList.findIndex(plane => plane.id === findPlaneId);

      // remove from array
      this.airportPlanesList.splice(listIndex, 1);
      console.log("plane below no longer in airport")
      console.log(plane)
      // console.log(`${plane} "plane below no longer in airport"`)
    }
    else { console.log("plane not in airport or plane not object") }
  }

  // isPlaneInAirport
  isPlaneInAirport(plane) {
    if (this.airportPlanesList.includes(plane)) { return true; }
    else { return false; }
  }

}

module.exports = Airport;
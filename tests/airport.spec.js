// import files
const { assertEquals } = require(`../test-framework.js`)
const Airport = require(`../src/Airport.js`)
const Plane = require(`../src/Plane.js`)


// declare testing field variables
let expectedOutput;
let actualOutput;
let result;
let airport;
let plane;


////////////////////////////////////////////////
// user story 1 = I want to instruct the airport to land a plane
// test1 - airportPlanesList length increases when landPlane method is called with a string
console.log("---------------------------------")
console.log("user story 1 = I want to instruct the airport to land a plane")
console.log("test1 - airportPlanesList length increases when landPlane method is called with a string")

// arrange
airport = new Airport();
plane = "plane1";
expectedOutput = 1;

// act
airport.landPlane(plane);
actualOutput = airport.airportPlanesList.length;

// assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)
console.log("test1 plane's data type - " + typeof plane)
console.log("---------------------------------")

//clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
//////////////////////////////////////////


////////////////////////////////////////////////
// user story 1 = I want to instruct the airport to land a plane
// test2 - airportPlanesList length increases when landPlane method is called with instance of "plane"
// test3 - "landPlane" method add "planes" instances to "airportPlanesList"
console.log("---------------------------------")
console.log("user story 1 = I want to instruct the airport to land a plane")
console.log("test2 and test3 - airportPlanesList length increases when landPlane method is called with instance of plane")

// arrange
airport = new Airport();
plane = new Plane();
expectedOutput = 1;

// act
airport.landPlane(plane)
actualOutput = airport.airportPlanesList.length;

// assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test2 and test3 result - ${result}`)
console.log(`test2 and test3 actualOutput - ${actualOutput}`)
console.log(`test2 and test3 expectedOutput - ${expectedOutput}`)
console.log("test2 and test3 plane's data type - " + typeof plane)
console.log("---------------------------------")

//clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 1 = I want to instruct the airport to land a plane
// test4 - falsy value shouldn't be added to "airportPlanesList"
console.log("---------------------------------")
console.log("falsy value shouldn't be added to airportPlanesList")

// Arrange
airport = new Airport();
plane = undefined;
expectedOutput = 0;

// Act
airport.landPlane(plane);
actualOutput = airport.airportPlanesList.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test4 result - ${result}`)
console.log(`test4 actualOutput - ${actualOutput}`)
console.log(`test4 expectedOutput - ${expectedOutput}`)
console.log("test4 plane's data type - " + typeof plane)

//clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 2 = I would like a default airport capacity that can be overridden as appropriate
// test1 - airport constructor contain "airportCapacity" with a default value
console.log("---------------------------------")
console.log("airport constructor contain airportCapacity with a default value")

// Arrange
airport = new Airport();
plane = new Plane();
expectedOutput = 1;

// Act
actualOutput = airport.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)
console.log(`test1 airport capacity - ${airport.airportCapacity}`)

// //clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 2 = I would like a default airport capacity that can be overridden as appropriate
// test2 - airportCapacity can be changed/overridden by method
console.log("---------------------------------")
console.log("airportCapacity can be changed/overridden by method")

// Arrange
airport = new Airport();
expectedOutput = 20;

// Act
airport.changeAirportCapacity(20);
actualOutput = airport.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)
console.log(`test1 airport capacity - ${airport.airportCapacity}`)

//clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////

////////////////////////////////////////////////
// user story 2 = I would like a default airport capacity that can be overridden as appropriate
// test3 - non-int value shouldn't change airportCapacity
console.log("---------------------------------")
console.log("non-int value shouldn't change airportCapacity")

// Arrange
airport = new Airport();
plane = new Plane();
expectedOutput = 1;

// Act
airport.changeAirportCapacity(undefined);
actualOutput = airport.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)
console.log(`test1 airport capacity - ${airport.airportCapacity}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////

////////////////////////////////////////////////
// user story 3 = I want to prevent landing when the airport is full
// test1 - is airport full - return true if full and prevent add plane to airport
console.log("---------------------------------")
console.log("is airport full - return true if full and prevent add plane to airport")

// Arrange
airport = new Airport();
plane = new Plane();
plane2 = new Plane();
airport.landPlane(plane);
airport.landPlane(plane2);
expectedOutput = true;

// Act
actualOutput = airport.isAirportFull();

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 3 = I want to prevent landing when the airport is full
// test2 - is airport full - return false if not full and add plane to airport
console.log("---------------------------------")
console.log("is airport full - return false if not full and add plane to airport")

// Arrange
airport = new Airport();
plane = new Plane();
airport.changeAirportCapacity(5);
airport.landPlane(plane);
expectedOutput = false;

// Act
actualOutput = airport.isAirportFull();

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test2 result - ${result}`)
console.log(`test2 actualOutput - ${actualOutput}`)
console.log(`test2 expectedOutput - ${expectedOutput}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 4 = I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
// test1 - remove plane from array
console.log("---------------------------------")
console.log("remove plane from array")

// Arrange
airport = new Airport(2);
plane = new Plane(1);
airport.landPlane(plane);

plane2 = new Plane(2);
airport.landPlane(plane2);
console.log(airport.airportPlanesList);
expectedOutput = airport.airportPlanesList.length - 1;

// Act
airport.removeAirportPlane(plane);
actualOutput = airport.airportPlanesList.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)
console.log(`test1 ${airport.airportPlanesList.length} plane removed from array `)
console.log(airport.airportPlanesList)
console.log(`test1 remove plane from array ${airport.airportPlanesList}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 5 = I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
// test1 - "isPlaneInAirport" method check if plane is in airport - return true if in airport
// console.log("---------------------------------")
// console.log("isPlaneInAirport method check if plane is in airport - return true if in airport")

// Arrange
airport = new Airport();
plane = new Plane(1);
airport.landPlane(plane);
expectedOutput = true;
console.log(airport.airportPlanesList);

// Act
actualOutput = airport.isPlaneInAirport(plane);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test1 result - ${result}`)
console.log(`test1 actualOutput - ${actualOutput}`)
console.log(`test1 expectedOutput - ${expectedOutput}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 5 = I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
// test2 - prevent landing plane if plane already landed = same object can not landed twice
console.log("---------------------------------")
console.log("prevent landing plane if plane already landed = same object can not landed twice")

// Arrange
airport = new Airport(2);
plane = new Plane(1);
airport.landPlane(plane);
airport.landPlane(plane);
console.log(airport.airportPlanesList)
expectedOutput = airport.airportPlanesList.length - 1;

// Act
airport.removeAirportPlane(plane);
actualOutput = airport.airportPlanesList.length;
console.log(airport.airportPlanesList)

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test2 result - ${result}`)
console.log(`test2 actualOutput - ${actualOutput}`)
console.log(`test2 expectedOutput - ${expectedOutput}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////


////////////////////////////////////////////////
// user story 5 = I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
// test3 - prevent landing plane if plane already landed = same object can not landed twice
console.log("---------------------------------")
console.log("prevent landing plane if plane already landed = same object can not landed twice")

// Arrange
airport = new Airport(2);
plane = new Plane(1);
airport.landPlane(plane);

console.log(airport.airportPlanesList)
expectedOutput = airport.airportPlanesList.length;

// Act
airport.removeAirportPlane(plane);
actualOutput = airport.airportPlanesList.length;
console.log(airport.airportPlanesList)

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`test3 result - ${result}`)
console.log(`test3 actualOutput - ${actualOutput}`)
console.log(`test3 expectedOutput - ${expectedOutput}`)

// clean up
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
airport = null;
plane = null;
////////////////////////////////////////////////
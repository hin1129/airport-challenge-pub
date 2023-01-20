const Airport = require("./Airport");
const Plane = require("./Plane");

////////////////////////////////////////
////////////////////////////////////////
// instantiate 2 airport objects
const airportInstance1 = new Airport();
const airportInstance2 = new Airport();

// "airport" object use method to add string to "airportPlanesList" array
console.log("===============================================================");
airportInstance1.landPlane("1st plane in airportInstance1")
airportInstance1.landPlane("2nd plane in airportInstance1")
console.log(airportInstance1.airportPlanesList);
console.log(airportInstance2.airportPlanesList);
console.log("result = strings not added, so empty airports");
console.log("===============================================================");
////////////////////////////////////////
////////////////////////////////////////

// ////////////////////////////////////////
// ////////////////////////////////////////
const airportInstance3 = new Airport();
const airportInstance4 = new Airport();

// "airport" object use method to add "plane" object to "airportPlanesList" array, can not exceed default capacity
console.log("===============================================================");
airportInstance3.landPlane(new Plane(1));
airportInstance3.landPlane(new Plane(2));
console.log(airportInstance3.airportPlanesList);
console.log(airportInstance4.airportPlanesList);
console.log("result = only added 1 plane because default capacity of airport is 1");
console.log("===============================================================");
//////////////////////////////////////////
//////////////////////////////////////////


//////////////////////////////////////////
//////////////////////////////////////////
const airportInstance5 = new Airport();
const airportInstance6 = new Airport();

console.log("===============================================================");
// "airport" object use method to change airport capacity, input can not be falsy value
airportInstance5.changeAirportCapacity("abd");
airportInstance6.changeAirportCapacity(10);
console.log(airportInstance5.airportCapacity);
console.log(airportInstance6.airportCapacity);
console.log("result = falsy value did not get added, non-falsy value changed capacity to 10");
console.log("===============================================================");
//////////////////////////////////////////
//////////////////////////////////////////



//////////////////////////////////////////
//////////////////////////////////////////
// instantiate 2 airport objects
const airportInstance7 = new Airport();
const airportInstance8 = new Airport();
const myPlane = new Plane();
airportInstance7.landPlane(myPlane)

console.log("===============================================================");
console.log(airportInstance7.isAirportFull())
console.log(airportInstance8.isAirportFull())
console.log("result = airportInstance7 reached max capacity, airportInstance8 not reached max capacity");
console.log("===============================================================");
// //////////////////////////////////////////
// //////////////////////////////////////////


//////////////////////////////////////////
//////////////////////////////////////////
const airportInstance9 = new Airport();
const myPlane2 = new Plane();
airportInstance9.landPlane(myPlane2)
airportInstance9.removeAirportPlane(myPlane2)

console.log("===============================================================");
console.log(airportInstance9.airportPlanesList)
console.log("result = airportInstance7 removed a plane");
console.log("===============================================================");
// //////////////////////////////////////////
// //////////////////////////////////////////



// // //////////////////////////////////////////
// // //////////////////////////////////////////
const airportInstance10 = new Airport();
const myPlane3 = new Plane(100);
airportInstance10.landPlane(myPlane3)
airportInstance10.isPlaneInAirport(myPlane3)

console.log("===============================================================");
console.log(airportInstance10.isPlaneInAirport(myPlane3))
console.log("result = airportInstance8 contain myPlane3 in array");
console.log("===============================================================");
// // //////////////////////////////////////////
// // //////////////////////////////////////////

const Airport = require("./Airport");
const Plane = require("./Plane");

// instantiate plane objects
const planeInstance1 = new Plane();
const planeInstance2 = new Plane(2);

// plane with ID
console.log(planeInstance1);
console.log(planeInstance2);
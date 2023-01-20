============================================================
============================================================
Installing
Forked airport-challenge folder from DF to my own GitHub account, cloned the folder onto my local machine.
On VSC terminal, inside airport-challenge folder, installed "npm install" package, result contains 2 high severity vulnerabilities, fixed them by "npm audit fix" command.
============================================================
============================================================




------------------------------------------------------
Domain models

User Story 1 = I want to instruct the airport to land a plane
Object  || Property                         || Message           || Output
Airport || airportPlanesList@Array[@string] || landPlane(@plane) || @void
Plane   || ID@string                        || getId()?          || @string

Initial thoughts:
1 = need an airport class/object
2 = need to be able to give airport a plane object
3 = airport's plane list length increase by 1 when plane landed airport

Tests
Test 1 = "airportPlanesList" length increases when "landPlane" method is called with a string as input
Test 2 = "airportPlanesList" length increases when "landPlane" method is called with instance of "plane" as input
Test 3 = "landPlane" method add "planes" instances to "airportPlanesList"
Test 4 = falsy value shouldn't be added to "airportPlanesList"
------------------------------------------------------
User Story 2 = I would like a default airport capacity that can be overridden as appropriate

Object  || Property                 || Message                 || Output
Airport || airportCapacity@integer  || increaseAirportCapacity(@plane)  || @integer
Airport ||                          || getAirportCapacity(@plane) || @void
Plane   ||  id@string               || getID()?                   || @string

Initial thoughts:
1 = need an airport
2 = airport should have a default capacity
3 = airport's capacity can be overridden if required

Tests
Test 1 = airport constructor contain "airportCapacity" with a default value
Test 2 = "airportCapacity" can be changed by method
Test 3 = non-int value shouldn't change "airportCapacity"
------------------------------------------------------
User Story 3 = I want to prevent landing when the airport is full

Object  || Property                        || Message || Output
Airport || airportPlanesList@array[@string] || isAirportFull() || @boolean
Airport || airportCapacity@integer  || getAirportCapacity() || @integer
Plane   || id@string          || getID()?       || @string


Initial thoughts:
1 = need an airport
2 = compare airport's capacity to "airportPlanesList" array to check whether if airport is full
3 = "landPlane" method not to perform adding plane to airport

Tests
Test 1 = is airport full - return true if full and prevent add plane to airport
Test 2 = is airport full - return false if not full and add plane to airport
------------------------------------------------------
User Story 4 = I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

Object  || Property            || Message             || Output
Airport || airportPlanesList@array[@plane] ||removeAirportPlane(@plane) || @void
Plane   || id@string          || getId()?            || @string

Initial thoughts:
1 = remove plane from airport
2 = tell user the plane no longer in airport

Tests
Test 1 = remove plane from array and message to display plane no longer in airport
------------------------------------------------------
User Story 5 = I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

Object  || Property || Message || Output
Airport || airportPlanesList@Array[@string] || isAirportPlaneExists(@plane) || @boolean
Plane   || id@string || getId()?   || @string

Initial thoughts:
1 = check if plane is in airport
2 = can not land plane if plane already in airport
3 = can not remove plane if plane not in airport


Tests
Test 1 = "isPlaneInAirport" method check if plane is in airport - return true if in airport
Test 2 = prevent landing plane if plane already landed = same object can not landed twice
Test 3 = prevent removing plane if plane already take-off
------------------------------------------------------

============================================================
============================================================
TTD code
Not sure if I need a "getId" method to check the ID of plane objects


User story 1 - test1
It is commented out because it conflicted with the rest of the program: plane became an object instance (not a string) to test the remaining requirements of the challenge.

User story 5 - test3
Not sure how to pass a plane object to the method without creating an instance. (program crashes and display reference error if plane is passed as object without being instantiated)
============================================================



============================================================
Other
console.log(`test1 remove plane from array ${airport.airportPlanesList}`)
Not sure why above code display the following:
[object Object] 
============================================================

// Function 1: findMatching
// Returns all drivers that match the given name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function 2: fuzzyMatch
// Returns all drivers whose names start with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function 3: matchName
// Returns all driver objects where the "name" matches the provided string
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

const driversArray = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
const driversObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "New York" },
    { name: "Annette", hometown: "Chicago" }
];

// Test Cases
console.log("findMatching Test:", findMatching(driversArray, "bobby")); 
// Output: [ 'Bobby', 'bobby' ]

console.log("fuzzyMatch Test:", fuzzyMatch(driversArray, "Sa")); 
// Output: [ 'Sammy', 'Sally', 'Sarah' ]

console.log("matchName Test:", matchName(driversObjects, "Bobby")); 
// Output: [{ name: "Bobby", hometown: "New York" }]


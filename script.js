const flavorsList = ['Hibiscus', 'Semi-Sweet', 'Wild Berry', 'Spiced', 'Blueberry', 'Blackberry', 'Cherry Limeade', 'Strawberry', 'Tart Cherry', 'Pumpkin Spice', 'Peach'];

const peopleList = ['the Pope', 'Lin Manuel Miranda', 'Betty White', 'Ryan Gosling', 'Beyonce', 'Dolly Parton', 'Stevie Nicks', 'Michael Jordan', 'Michelle Obama', 'Bill Murray'];

const locationsList = ['at a Dave & Busters', 'on a park bench', 'in a hotel elevator', 'on a ferris wheel', 'on an airplane', 'at a music festival', 'at a motel pool', 'at the zoo', 'at a Razorbacks game', 'sharing an Uber'];

const citiesList = ['Paris', 'Bentonville', 'New York', 'London', 'Tokyo', 'Hector, Ark.', 'Acupulco', 'Madrid', 'Prague', 'Las Vegas'];

function yourYear() {
    function getRandNum(array) {
        return Math.floor(Math.random() * array.length);
    }
let flavors = flavorsList[getRandNum(flavorsList)];
let people = peopleList[getRandNum(peopleList)];
let locations = locationsList[getRandNum(locationsList)];
let cities = citiesList[getRandNum(citiesList)];

let fullString = `In 2021, you will drink Black Apple ${flavors} with ${people} ${locations} in ${cities}.`

console.log(fullString);
}

yourYear();



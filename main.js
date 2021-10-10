const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
const AllNames = characters.map(ch => ch.name);
console.log(`Names only : ${AllNames}`); // ALL NAMES
const AllHeights = characters.map(ch => ch.height);
console.log(`Heights only: ${AllHeights}`); // ALL HEIGHTS

// REDUCE
const AllCharactersHeight = characters.map(c => c.height).reduce((p, v) => p + v);
console.log(`All characters heights : ${AllCharactersHeight}`);

// FILTER
console.log(`Characters with height less than 200`, characters.filter(ch => ch.height < 200));
console.log(`All male characters`, characters.filter(ch => ch.gender === "male"));

// SORT
console.log(`Sort by mass `, characters.sort((a, b) => b.mass - a.mass));
console.log(`Sort by height `, characters.sort((a, b) => b.height - a.height));

// every 
console.log(`Does every character have mass more than 40? `, characters.every((ch) => ch.mass > 40));
console.log(`Is every character shorter than 200? `, characters.every((ch) => ch.height < 200));

// some
console.log(`Is there at least one character with blue eyes? `, characters.some((ch) => ch.eyes === "blue"));
console.log(`Is there at least one character taller than 210?`, characters.some((ch) => ch.height > 210));


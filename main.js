const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

console.log(characters.map((e) => e.name));
console.log(characters.map((e) => e.height));

console.log(characters.reduce((total, curr) => total + curr.height, 0));

console.log(characters.filter((e) => e.height < 200));
console.log(characters.filter((e) => e.gender == "male"));
console.log(characters.sort((a, b) => a.mass - b.mass));
console.log(characters.sort((a, b) => a.height - b.height));
console.log(characters.every((e) => e.mass > 40));
console.log(characters.some((e) => e.height > 210));

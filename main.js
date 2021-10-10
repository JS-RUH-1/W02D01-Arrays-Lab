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

//Map
//task 1
// const allName = characters.map(names);
// function names(item1) {
//   return item1.name;
// }
// console.log(allName);

// //task 2
// const allheight = characters.map(hight);
// function hight(item2) {
//   return item2.height;
// }
// console.log(allheight);

//Reduce
// let initialValue = 0;
// const totalheight = characters.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue.height;
// }, initialValue);
// console.log(totalheight);

// Filter

//Task 1
// const allheight = characters.filter(filterHight);
// function filterHight(item) {
//   return item.height < 200;
// }
// console.log(allheight);

//Task 2
// const male = characters.filter(filterMale);
// function filterMale(item) {
//   return item.gender == "male";
// }
// console.log(male);

//Sort
//task 1 ?
// const mass = characters.sort(sortMass);
// function sortMass(item1) {
//   return item1.mass;
// }
// console.log(mass);

// Task2
// const high = characters.sort(sortHigh);
// function sortHigh(item) {
//   return item.height;
// }
// console.log(high);

// EVERY

// Task 1
// const mass = characters.every(everyMass);
// function everyMass(item) {
//   return item.mass > 40;
// }
// console.log(mass);

// Task 2
// const mass = characters.every(everyMass);
// function everyMass(item) {
//   return item.mass > 200;
// }
// console.log(mass);

// Some

// Task1
// const eyecolor = characters.some(somecolor);
// function somecolor(item) {
//   return item.eye_color;
// }
// console.log(eyecolor);

// Task 2
// const tall = characters.some(sometall);
// function sometall(item) {
//   return item.height > 210;
// }
// console.log(tall);

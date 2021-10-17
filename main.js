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

let Numbers = [23,54,32,87,47];
let sum = Numbers.reduce(
( total, currentValue ) => (total += currentValue),0);
 console.log (sum);

let Numbers2 = [16,4,2,0,19,6];
console.log(Math.max(16,4,2,0,19,6));
let Numbers3 = [1,2,3,4,5,6,7,8,9,10];
var theLegth=Numbers3.length
var newArray=[]
for (var i=0;i< theLegth;i++){
   let theValuePopped= Numbers3.pop()
   newArray.push(theValuePopped)
}
console.log(newArray)

let names = characters.map( (element)=>  element.name   )
console.log (names)
let height = characters.map( (element)=>  element.height   )
console.log (height)



let fliter =characters.filter( (el)=> el.mass<100);
console.log(fliter);

let fliter2 =characters.filter( (el)=> el.female);
console.log(fliter2);

function XX(characters) {
   return characters.mass<50
}
characters.map(getNam2).sort();
function getNam2(characters){
   return characters.name
}
let eyes=characters.some((el)=>(el.eye_color=="blue"));
console.log(eyes);
let male=characters.some((el)=>(el.eye_color=="male"));
console.log(male);
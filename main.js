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

let names = characters.map( (element)=>  element.name   )
console.log (names)
let height = characters.map( (element)=>  element.height   )
console.log (height)

let total = characters.reduce(
( previousValue, currentValue ) => previousValue + currentValue.height,0)
console.log (total)
let fliter =characters.filter( (el)=> el.height<200);
console.log(fliter);

let mass =characters.sort ((a,b) => a.mass-b.mass)
console.log(mass);
let height1 =characters.sort ((a,b) => a.height-b.height)
console.log(height1);
let mass1 =characters.every( function g(el){

    return el.mass>40; 
} )
console.log(mass1);
let height2=characters.every(function h(el){
    return el.height2<200;

})
console.log(height2);

let eyes=characters.some((el)=>(el.eye_color=="blue"));
console.log(eyes);
let g=characters.some((el)=>(el.height>210));
console.log(g);




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


 let x = characters.map(n => n.name)
 let a =characters.map(y => y.height )
 console.log(x);
console.log(a);


let sum = a.reduce ((accum , hi ) => {
    return accum + hi;
} )
console.log(sum)


let n =characters.filter (f => f.height<200)
console.log(n);

let ml =characters.filter (m => m.gender=="male")
console.log(ml);

let m =characters.every( f => f.mass<40 )
console.log(m);


let h =characters.every( f => f.height < 200 )
console.log(h);

let y =characters.some ( f => f.eye_color == "blue" )
console.log(y);


let c =characters.some ( f => f.height == '210' )
console.log(c);

let e =characters.sort (function (a , b) {
 return a.mass-b.mass
})
console.log(e);

let t =characters.sort (function (a , b) {
    return a.height-b.height
   })
   console.log(t);
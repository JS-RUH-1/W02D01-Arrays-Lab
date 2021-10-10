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
let names= characters.map((s)=> s.name),
    heights=characters.map((s)=> s.height);

// REDUCE
let maxH= heights.reduce((total,amount)=> total+amount)

// FILTER
let filtered=characters.filter((f)=> f.height<200? f: null);
let males= characters.filter((f)=> f.gender=='male'? f: null);

// SORT
let mass_sort= characters.sort(function(a,b){return a.mass-b.mass;});
let height_sort= characters.sort(function(a,b){return a.height-b.height;});

// EVERY
let avg_mass= characters.every((a)=>a.mass>40);
let avg_height= characters.every((a)=>a.height<200);

// SOME
let blue_eye = characters.some((a)=> a.eye_color=='blue');
let tall_char = characters.some((a)=> a.height>210);





  
  
  
  
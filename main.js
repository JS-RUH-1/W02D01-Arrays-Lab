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
console.log("Map ..")
for (let i=0 ;i<characters.length;i++){
console.log("Name is :["+characters[i].name +"] the Height is : ["+ characters[i].height+"]")
console.log("----------------")
}

//REDUCE
console.log("REDUCE ..")
let sum =0;

for(let i=0 ;i<characters.length ;i++){

sum= sum + characters[i].height


}
console.log("Total heigth is :"+sum)
console.log("----------------")


//  
let count =0

 for( let i =0 ;i<characters.length ;i++)
    {
if (characters[i].eye_color =="blue")
    count = count+1;

}

console.log("The total of blue eye is :"+ count)
console.log("----------------")

//FILTER
console.log("FILTER .... ")
for (let i=0 ;i< characters.length ;i++){


    if (characters[i].height <200)

    console.log(" Heigth less than 200 ["+characters[i].height+"]")
}
console.log("----------------")

for (let i=0 ;i<characters.length ;i++){

if (characters[i].gender =="male")
console.log("["+characters[i].name +"] Is a male ")
 
}
console.log("----------------")

//SORT

console.log("SORT")

 characters.sort((a,b)=>{
return a.mass - b.mass;
 })

 console.log(characters)

 console.log("----------------")

 characters.sort((a,b)=>{
    return a.height - b.height;
     })

     console.log(characters)
     console.log("----------------")


     // EVERY
     console.log("EVERY")
     let mas= false;

     for( let i =0 ; i< characters.length ;i++){
 
         if(characters[i].mass  >= 40){
                 mas= true;
         
        }
        break
     }
       console.log(mas)
       console.log("----------------")
 


       let short= false;

     for( let i =0 ; i< characters.length ;i++){
 
         if(characters[i].height <200){
                 mas= true;
         
        }
        break
     }
       console.log(short)
       console.log("----------------")


//SOME
console.log("SOME")
    let eyeBlue= false;

    for( let i =0 ; i< characters.length ;i++){

        if(characters[i].eye_color =="blue"){
        eyeBlue= true;
        break}
    }
      console.log(eyeBlue)
      console.log("----------------")



      let taller= false;

    for( let i =0 ; i< characters.length ;i++){

        if(characters[i].height >210){
        taller= true;
        break}
    }
      console.log(taller)
      console.log("----------------")
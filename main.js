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
  
  // Task 1.0 MAP - get array of all names  , Heights
  let names = characters.map(function getNames(person) {
    return person.name;
  });
  console.log(names);
  let height = characters.map(function getNames(pHeights) {
    return pHeights.height;
  });
  console.log(height);
  // Task 1.1 Reduce - get array of all names  , Heights
  let tHieght = characters.reduce((prev, cur) => prev + cur.height, 0);
  console.log(tHieght);
  let blue = 0;
  let yellow = 0;
  let brown = 0;
  //TASK 1.1  Eye color
  let ecolorCounter = characters.reduce((previousValue, currentValue) => {
    return previousValue + "  " + currentValue.eye_color;
  }, "-->");
  console.log(ecolorCounter);
  //TASK 1.2 Filter  - height less than 200
  let lessThan = characters.filter((element) => {
    return element.height < 200;
  });
  //print the Array
  for (let i = 0; i < lessThan.length; i++) {
    console.log(lessThan[i]);
  }
  /***************************************** */
  console.log("-----------------");
  let malearray = characters.filter((element) => {
    return element.gender == "male";
  });
  //print the Array
  for (let i = 0; i < malearray.length; i++) {
    console.log(malearray[i]);
  }
  /***************************************** */
  console.log("-----------------");
  //TASK 1.3 Sort  - By Mass
  //when we use a-b sort from low to hight if we use b-a hight to low
  let massSort = characters.sort((a, b) => {
    return a.mass - b.mass;
  });
  for (let i = 0; i < massSort.length; i++) {
    console.log(massSort[i]);
  }
  /***************************************** */
  console.log("-----------------");
  let higthSort = characters.sort((a, b) => {
    return b.height - a.height;
  });
  for (let i = 0; i < higthSort.length; i++) {
    console.log(higthSort[i]);
  }
  console.log("-----------------");
  //TASK 1.3 Evrey  - Test if evrey
  let massEvrey = characters.every((element) => {
    return element.mass > 40;
  });
  console.log(massEvrey);
  
  let hightEvrey = characters.every((element) => {
    return element.height > 200;
  });
  console.log(hightEvrey);
  
  //TASK 1.3 Some  - Test if Some
  console.log("-----------------");
  let massSome = characters.some((element) => {
    return element.mass > 40;
  });
  console.log(massSome);
  
  let hightSome = characters.some((element) => {
    return element.height > 200;
  });
  console.log(hightSome);
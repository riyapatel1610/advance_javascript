/*

NOTE - GIVE MEANS GIVE NOT PRINT
- Give means You have to make function which return value what i 
ask for

1. import data from json
2. give all city name of state which one give by user
3. give all city name , which have more character than user given input
4. city list which has population more then user give
5. acending decending population wise
6. top 5 city population wise [only name of city]
7. give total populatin of state which give by user
8. give top 5 state name population wise 
  */
const ALL_DATA = require("./data.json");

// function cityByState(state_name) {
//   let matchData = ALL_DATA.filter((e) => {
//     return e.state_name === state_name;
//   });
//   let data = matchData.map((e) => {
//     return e.city;
//   });
//   return data;
// }

// let cityOfAP = cityByState("Andhra Pradesh");
// console.log("cityOfAP:", cityOfAP);

// 4. city list which has population more then user give

function population(user,popul) {
  let state_namee =ALL_DATA.filter((e) => {
    return e.state_name === user && e.population >= popul;
  });
  let ct = state_namee.map((e) => {
    return e.city;
  });
  return ct;

}
let pop = population("Mahārāshtra",123548);
console.log(" population:", pop);


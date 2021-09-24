"use strict";

const users = [
  {
    name: "Bob",

    age: 27,

    address: {
      country: "USA",

      city: "LA",
    },

    marks: [2, 3, 5, 4, 2, 3, 1, 5],
  },

  {
    name: "July",

    age: 21,

    address: {
      country: "Ukraine",

      city: "Kiev",
    },

    marks: [4, 4, 5, 4, 3, 4, 3, 5],
  },

  {
    name: "Monya",

    age: 15,

    address: {
      country: "Ukraine",

      city: "Odessa",
    },

    marks: [5, 1, 5, 1, 5, 1, 5, 1],
  },

  {
    name: "Vsevolod",

    age: 19,

    address: {
      country: "Ukraine",

      city: "Lviv",
    },

    marks: [3, 4, 5, 3, 1, 2, 4, 6],
  },
];

console.log(users);

let isNotAdult = users.filter(item => item.age < 18);

let foreignStudent = users.filter(item => item.address.country !== "Ukraine");

// let foreignStudent = users.filter((item) => {
//   if (item.address.country !== "Ukraine") {
//     return true;
//   }
// });

console.log(isNotAdult);
console.log(foreignStudent);

let newUsers = users.map(item => {
  return {
    name: item.name,

    age: item.age,

    address: {
      country: item.address.country,

      city: item.address.city,
    },

    marks: item.marks,
    isAdult: item.age >= 18,
    averageMark: (item.marks.reduce((acc, el) => {
          return acc + el;
    }))/item.marks.length,
  }
});

console.log(newUsers);

// let averageMark = (newUsers.reduce((acc, elem,index,arr) => acc + elem['averageMark'],0))/newUsers.length;

let averageMark = (users.reduce((acc, elem,index,arr) => {
  return acc + (elem.marks.reduce((ac, el) => {
    return ac + el;
},0))/elem.marks.length;
},0))/users.length;

console.log(averageMark);

// let addresses = {
//   countries: users.map(item => item.address.country),
//   cities: users.map(item => item.address.city),
// };

let addresses = users.reduce((acc,el,i,arr) => {
  acc.countries.push(el.address.country);
  acc.cities.push(el.address.city);
  return acc;
},{countries:[],cities:[]})

console.log(addresses);
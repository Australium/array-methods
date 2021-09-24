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

let isNotAdult = users.filter((item) => item.age < 18);

let foreignStudent = users.filter((item) => {
  if (item.address.country !== "Ukraine") {
    return true;
  }
});

console.log(isNotAdult);
console.log(foreignStudent);

// let newUsers = users.slice();

// newUsers.forEach(function (item,index,array) {
//   item["isAdult"] = item.age >= 18;
//   item["averageMark"] = item.marks.reduce((acc, el) => {
//     return acc + el;
//   });
//   item["averageMark"] = item["averageMark"] / item.marks.length;
// });

// newUsers.map(function (item,index,array) {
//   item["isAdult"] = item.age >= 18;
//   item["averageMark"] = item.marks.reduce((acc, el) => {
//     return acc + el;
//   });
//   item["averageMark"] = item["averageMark"] / item.marks.length;
// });

let newUsers = users.map((item,index,array) => {
  return {
    name: item.name,

    age: item.age,

    address: {
      country: item.address.country,

      city: item.address.city,
    },

    marks: [item.marks],
    isAdult: item.age >= 18,
    averageMark: (item.marks.reduce((acc, el) => {
          return acc + el;
    }))/item.marks.length,
  }
});

console.log(newUsers);

let averageMark = (newUsers.reduce((acc, elem,index,arr) => acc + elem['averageMark'],0))/newUsers.length;

console.log(averageMark);

let addresses = {
  countries: users.map((item) => {
    return item.address.country;
  }),
  cities: users.map((item) => {
    return item.address.city;
  }),
};

console.log(addresses);


// 1.

// newUsers.forEach(function (item) { item["isAdult"] = item.age >= 18; item["averageMark"] = item.marks.reduce((acc, el) => { return acc + el; }); item["averageMark"] = item["averageMark"] / 2;});

// Крайне плохой вариант решения... проще и лучше решить через мап



// 2.

// newUsers.forEach(function (item) { item["isAdult"] = item.age >= 18; item["averageMark"] = item.marks.reduce((acc, el) => { return acc + el; }); item["averageMark"] = item["averageMark"] / 2;});

// Почему делим на 2 ?



// 3.let averageMark = (newUsers.reduce((acc, elem) => acc + elem['averageMark'],0))/2; Вот тут нужно работать с массивом users


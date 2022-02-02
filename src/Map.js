import React from 'react';
export default function Map() {
  const names = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
  ];
  function doubleNumbers(arr) {
    return arr.map((n) => n * 2);
  }
  function stringItUp(arr) {
    return arr.map((n) => String(n));
  }
  function capitalizeNames(arr) {
    return arr.map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase());
  }
  function namesOnly(arr) {
    return arr.map((user) => user.name);
  }
  function makeString(arr) {
    return arr.map((user) =>
      user.age >= 18
        ? user.name + ' can go to the Matrix '
        : user.name + ' is under age'
    );
  }
  function readyToPutInTheDom(arr) {
    return arr.map((user) => `<h1>${user.name}</h1><h2>${user.age}</h2>`);
  }

  console.log(doubleNumbers([2, 5, 100]));
  console.log(stringItUp([2, 5, 100]));
  console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmit']));
  console.log(namesOnly(names));
  console.log(makeString(names));
  console.log(readyToPutInTheDom(names));

  return <div></div>;
}

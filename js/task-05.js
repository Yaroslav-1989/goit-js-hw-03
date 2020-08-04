"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const result = [];

  for (const item of arr) { 
    if(item[prop]){
      result.push(item[prop]);
    }   
  }
  return result;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації:
 */
console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));

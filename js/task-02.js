"use strict";

const countProps = function (obj) {
  return Object.keys(obj).length;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації:
 */
console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

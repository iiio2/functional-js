// // Funcion Composition

// let input = '   JavaScript   ';
// let output = '<div>' + input + '</div>';

// const trim = (str) => str.trim();

// const wrapDiv = (str) => '<div>' + str + '</div>';

// const lowerCase = (str) => str.toLowerCase();

// const transform = _.pipe(trim, lowerCase, wrapDiv);

// const result = transform(input);
// console.log(result);

// // Currying
// // instead of taking arguments, taking different functions;

// function sayHello(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const fn = sayHello(3)(7);
// console.log(fn);

// // Updating Objects

// const person = {
//   name: 'John',
//   address: {
//     country: 'USA',
//     city: 'San Francisco',
//   },
// };

// const updatedObj = Object.assign({}, person, { name: 'Bob', age: 20 });

// console.log(updatedObj);
// // in spread operation , it is shallow copying. Use spread operation in nested objects too.

// const updatedObj = {
//   ...person,
//   address: {
//     ...person.address,
//   },
//   name: 'Bob',
// };

// console.log(person);

// // Updating objects
const numbers = [1, 2, 3];

const res = numbers.map((n) => (n === 2 ? 50 : n));
console.log(res);

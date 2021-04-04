// // Funcion Composition

// let input = '   JavaScript   ';
// let output = '<div>' + input + '</div>';

// const trim = (str) => str.trim();

// const wrapDiv = (str) => '<div>' + str + '</div>';

// const lowerCase = (str) => str.toLowerCase();

// const transform = _.pipe(trim, lowerCase, wrapDiv);

// const result = transform(input);
// console.log(result);

// Currying
// instead of taking arguments, taking different functions;

function sayHello(a) {
  return function (b) {
    return a + b;
  };
}

const fn = sayHello(3)(7);
console.log(fn);

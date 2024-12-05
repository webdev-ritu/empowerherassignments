/**Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return. The function should be as concise as possible. */

const squareAndCube = num => ({square: num * num, cube: num*num*num});
console.log(squareAndCube(5));
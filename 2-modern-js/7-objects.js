const obj = {
  p1: 10,
  p2: 20,
  // shorter forfunction definition
  f1() {},
  f2: () => {},
};

// First scenario: dynamic property sentence
const mystery = "answer";

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42
};

console.log(obj.mystery);
console.log(obj.answer);

// Second scenario

const PI = Marh.PI;

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  PI: PI // could be replaced by 
};
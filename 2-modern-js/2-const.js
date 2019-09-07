// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(numbers);
console.log(person);

//numbers[0] = 3;
//console.log(numbers);

//person.firstName = 'Jose';
//person.lastName = 'Sal y Rosas';
//console.log(person);

// Object.freeze -> first level
const person1 = Object.freeze(
  {
    firstName: 'John',
    lastName: 'Doe',
    /*
    group: {
      id: 2,
      name: 'Gamers'
    }
    */
  }
);

//person1.firstName = 'Jose';
//person1.lastName = 'Sal y Rosas';
//person1.group.name = 'Soccer player';

console.log(person1);
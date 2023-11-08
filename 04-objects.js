//* OBJECTS
let name = 'John';

let person = {
  name,
  age: 22,
  location: {
    country: 'Spain',
    city: 'Madrid',
  },
  greet: () => {
    console.log('Hi!');
  },
};

//*Iteration through properties
for (let prop in person) {
  console.log(prop, person[prop]);
}

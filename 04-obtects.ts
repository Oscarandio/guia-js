//* OBJECTS

interface Place {
  country: string;
  city: string;
}

interface Person {
  name: string;
  age: number;
  location: Place;
  greet: () => string;
}

const person: Person = {
  name: 'John',
  age: 22,
  location: {
    country: 'Spain',
    city: 'Madrid',
  },
  greet: (): string => {
    return 'Hi!';
  },
};

// Iteración a través de las propiedades
for (let prop in person) {
  console.log(prop, person[prop]);
}
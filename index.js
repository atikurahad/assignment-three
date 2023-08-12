//1) javascript For in loop

const person = {
  name: "Shihab",
  age: 28,
  gender: "Male",
  occupation: "Job holder",
};

const printObjectProperties = (properties) => {
  if (Object.keys(properties).length === 0) {
    console.log("Object is empty");
  }

  for (const property in properties) {
    console.log(`${property} : ${properties[property]}`);
  }
};

printObjectProperties(person);

//2) javascript function returns

function findMaxNumber(params) {
  if (params.length === 0) {
    return null;
  }

  const maxNum = Math.max(...params);
  return maxNum;
}
const numbers1 = [10, 20, 5, 30, 25];

console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];

console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];

console.log(findMaxNumber(emptyArray)); // Output: null

//3) javascript Spread Operator

function mergeArrays(array1, array2) {
  let newArr = [...array1, ...array2];
  return newArr;
}
const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2));

//4) javascript arrow function

const calculateSquare = (number) => {
  const square = number * number;
  return square;
};

console.log(calculateSquare(5)); // Output: 25

console.log(calculateSquare(8)); // Output: 64

//5) javascript es6 map

function doubleNumbers(makeDouble) {
  const result = makeDouble.map((number) => number * 2);
  return result;
}
const numbers = [1, 2, 3, 4, 5];

console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

// 6) javascript es6 static keyword


class MathUtility {
  static multiply(num1, num2) {
    const result = num1 * num2;
    return result;
  }
}

console.log(MathUtility.multiply(5, 3)); // Output: 15

console.log(MathUtility.multiply(2, 8)); // Output: 16


// 7) javascript es6 class inheritance

 

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes a sound: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }

  fetch() {
    console.log(`${this.name} is fetching the ball!`);
  }
}

const animal = new Animal("Lion", "Roar");

animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");

dog.makeSound();

dog.fetch();


//8) javascript es6 super keyword

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm majoring in ${this.major}.`
    );
  }
}

// Creating instances and using methods
const person1 = new Person("Sakib", 34);
person1.introduce();

const student1 = new Student("Tamim", 36, "Cricketer");
student1.introduce();

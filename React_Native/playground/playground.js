// Using functions and variables
function summarizeUser(userName, userAge) {
  return "Name is " + userName + ", age is" + userAge;
}

const arrowFunction = (userName, userAge) => {
  return "Name is " + userName + ", age is" + userAge;
};

// Shorter functions without {}
const shortcut = (a, b) => a + b;
const plusOne = (a) => a + 1;

console.log(shortcut(1, 2));

// Creating objects in JS
const person = {
  name: "Max",
  age: 29,
  greet() {
    // 'this' can only be used with this syntax
    console.log("Hi, I am " + this.name);
  },
};

person.greet();

// Creating and modifiying arrays in JS
const array = ["Sports", "Cooking"];

for (let item of array) {
  console.log(item);
}
const newArray = array.map((item) => {
  return "Hobby: " + item;
});
console.log(newArray);

array.push("New Sport");

// Copying arrays and objects
const copiedArray = array.slice();

const anotherCopy = [...array]; // This is the spread operator - pull elements out of arrays or objects

const copitedPerson = { ...person };

const toArray = (...args) => {
  // This is the rest operator - merge multiple args into an array
  return args;
};

console.log(toArray(1, 2, 3, 4));

// Destructuring -> use {} in ()
const printName = ({ name, age }) => {
  console.log(name, age);
};

printName(person);

const { name, age } = person;
const [no1, no2, no3] = array;

console.log(name, age);
console.log(no1, no2, no3);

// Async code - code that does not run immediately (the sync code after will run first)
setTimeout(() => {
  console.log("Timer is Done");
}, 2000);

console.log("This ran first because it was sync!");

1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

// Answer the following with reason after going through the above code:

- `[10] === [10]` // false
- What is the value of obj? // { surname: 'Stark' }
- `obj == newObj` // false
- `obj === newObj` // false
- `user === newObj` // false
- `user == newObj` // false
- `user == obj` // true
- `arr == arr2` // true
- `arr === arr2` // true

// 2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

// <!-- To add this image here use ![name](./hello.jpg) -->


```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1); // { name: 'Alex', age: 25 };
// Here person1 will be executed first and after that it will execute person2. Since, it has the value of the function it will go to the function and access the data inside the function in that way the person1 age will get updated to 25
console.log(person2); // person = { name: 'John', age: 50 };
// Here since the person2 has been calling the function called personDetails. We are returning the person variable and it will get executed to person2 
```

// 3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true
console.log(user.brothers.length === brothers.length); //2. true
```




// Understanding copy by reference

let brothers = ['John', 'Bran', 'Robb'];
let house = 'Stark';
let user = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user2 = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user3 = {
  name: 'Arya',
  house: 'Stark',
  brothers: ['John', 'Bran', 'Robb'],
};

//1.After going through above code answer the following with reason:

user.house === user2.house; // output: true
user.house == user2.house; // output: true
user.brothers === user2.brothers; // output: true
user.brothers == user2.brothers; // output: true
user.name == user2.name; // output: true
user.name === user2.name; // output: true
user.brothers == user3.brothers; // output: false
user.brothers === user3.brothers; // output: false
user.house === user2.house; // output: true
user.house === user3.house; // output: true
user.brothers[0] === user2.brothers[0]; // output: true
user.brothers[0] === user3.brothers[0]; // output: true

// 2. Copy the value of character variable into variable named characterOne and characterTwo.

let character = {
    charactorName: 'Sansa',
    sisters: 1,
    brothers: 4,
  };
  // Your code 
 let   characterOne = character;
 let   characterTwo = character;

 character === characterOne; // output: true
characterOne == characterTwo; // output: true
characterTwo == character; //   output: true
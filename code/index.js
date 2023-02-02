//1. Write the output with reason


const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person;

person.firstName = 'Arya';

console.log(person2.firstName); // 'Arya'
// Because person is stored or copied into a new variable called person2 and even one get updated with another one.
console.log(person.firstName); // 'Arya'
// Because person is stored or copied into a new variable called person2 and even one get updated with another one.
console.log(person.lastName); // 'Doe'
// Because person is stored or copied into a new variable called person2 and even one get updated with another one.
console.log(person == person2); // true
// Because person is stored or copied into a new variable called person2 and even one get updated with another one. So it is true
console.log(person === person2); // true
// Because person is stored or copied into a new variable called person2 and even one get updated with another one. So it is true
console.log(person.lastName === person2.lastName); // true
// Because person is stored or copied into a new variable called person2 and even one get updated with another one. So it is true


// 2. Write the output with reason:


let personOne = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person };

personOne.firstName = 'Arya';
personOne.city = 'Navada';

console.log(personTwo.firstName); // 'John'
console.log(personOne.firstName); // 'Arya'
console.log(personTwo.lastName); // 'Doe'
console.log(personOne.firstName === personTwo.firstName); // false
console.log(personOne == personTwo); // false
console.log(personOne === personTwo); // false
console.log(personOne.address === personTwo.address); // true
console.log(personOne.address == personTwo.address); // true
console.log(personTwo.address.city); // 'San Jose'
console.log(personOne.address.city); // 'San Jose'
console.log(personOne.address.city == personTwo.address.city); // true
//Because we are using 'spread' operator and it means that we are cloning it not copying so according to that those are the outputs we got.


// 3. Write the output with reason:

let person3 = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let person4 = { ...person, address: { ...person.address } };

person3.firstName = 'Arya';
person3.city = 'Navada';

console.log(person4.firstName); // 'John'
console.log(person3.firstName); // 'Arya'
console.log(person4.lastName); // 'Doe'
console.log(person3.firstName === personTwo.firstName); // false
console.log(person3 == personTwo); // false
console.log(person3 === personTwo); // false
console.log(person3.address === personTwo.address); // false
console.log(person3.address == personTwo.address); // false
console.log(person4.address.city); // 'San Jose'
console.log(person3.address.city); // 'San Jose'
console.log(person3.address.city == person4.address.city); // false


//4. Clone the `blogs` variable into a new variable named `clonedBlogs`


let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

// Your code goes here
let clonedBlogs = [
    ...blogs[0],
    ...blogs[1],
    ...blogs[2]
]


//5. Clone the `question` variable into a new variable named `questionClone`

var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// Your code goes here
let questionClone = [
   { ...questions[0] ,responses : [...questions[0].responses]},
   {...questions[1] , responses : [...questions[1].responses]}
]


//6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`

var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

// Your code goes here

let allBlogsClone = {
    ...allBlogs ,
    author : {...allBlogs.author},
     comments :[...allBlogs.comments[0],...allBlogs.comments[0]]
}

//7. Clone the `person` variable into a new variable named `clonedPerson`

let personData = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

// Your code goes here
let clonedPersonData = [
    ...personData,{input : {...personData[0].input},output : {...personData[0].output}},
    {input : {...personData[1].input},output : {...personData[1].output}},
    {input : {...personData[2].input},output : {...personData[2].output}},
    {input : {name :{...personData[3].input.name},
    birthday:{...personData[3].input.birthday}},
    output : {...personData[2].output}}
    ]


//8. Write a function named `cloneObject` that accepts an object and returns the clone of the object


function cloneObject(user) {
  // your code
  return JSON.parse(JSON.stringify(user))

}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`)

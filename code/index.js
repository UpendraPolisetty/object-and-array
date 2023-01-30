
//Assignment: Array and Object  -----------------

let hat = {
    size: 'large',
    color: 'orange',
  };
  console.log(hat.size);
  
  // Output - 'large'

  console.log(hat['color']);
  
  // Output - 'Orange'

  hat.color = 'red';
console.log(hat.color);

//  Output - 'Red'

let pen = {};
pen.ink = 'blue';
console.log(pen.ink);

// Output - 'blue'

console.log(hat['cost']);

// Output - undefined

let hats = {
    rating: function () {
      return 'Hat is top rated';
    },
    color: 'green',
  };
  console.log(hats.rating());
  
  // Output - 'Hat is top rated'

  let hatz = {
    size: 'medium',
    color: 'green',
    introduction: function () {
      return `The size of hat is ${hatz.size} and color is ${hatz.color}`;
    },
  };
  hatz.introduction();
  
  // Output - `The size of hat is ${hatz.size} and color is ${hatz.color}`

  let bucket = {
    capacity: '5 Litre',
    customerMessage: function (desiredSize) {
      if (desiredSize > 5) {
        return 'This bucket is not large enough for you';
      }
    },
  };
  console.log(bucket.customerMessage(13));
  
  // Output - 'This bucket is not large enough for you'

  function globalFunction() {
    return 'I can be called anywhere';
  }
  let obj = {
    func: globalFunction,
  };
  console.log(obj.func());
  
  // Output - 'I can be called anywhere'

  let student = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
  console.log(student.address.city);
  
  // Output - 'Dharamshala'
  let students = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
  student.address.zip = '176057';
  console.log(student.address.zip);
  
  // Output - '176057'

  console.log(student);
delete student.age;
console.log(student);

var altcampus = {
    batch16: {
      totalStudents: '11',
    },
    batch15: {
      totalStudents: '9',
    },
    batch14: {
      totalStudents: '8',
    },
  };
  console.log(altcampus.batch16.totalStudents);
  
  // Output - '11'

  var obj1 = {
    name: 'Panther',
  };
  console.log('name' in obj1);
  
  // Output - 'true'

  let movies = [
    {
      id: '1',
      title: 'Game Night',
      year: '2018',
      genres: ['Action', 'Comedy', 'Crime'],
      releaseDate: '2018-02-28',
      actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
    },
    {
      id: '2',
      title: 'Area X: Annihilation',
      year: '2018',
      genres: ['Adventure', 'Drama', 'Fantasy'],
      releaseDate: '2018-02-23',
      actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
    },
    {
      id: '3',
      title: 'Hannah',
      year: '2017',
      genres: ['Drama'],
      releaseDate: '2018-01-24',
      actors: ['Charlotte Rampling', 'Andr Wilms', 'Phanie Van Vyve'],
    },
  ];
  
  /*
  Go through the variable named movies properly before solvinf the exercises.
  Use the variable named movies to solve the requirement below.
  */
  
  // 1. Log the value of the title key in the first movie of the array named `movies`

   console.log(movies[0].title);
  // 2. Log the value of the title key in the last movie of the array named `movies`
  
  console.log(movies[movies.length-1].title);
  // 3. Log the value of the title key in the second movie (index 1) of the array named `movies`

  // 4. Log the value of the year key in the first movie of the array named `movies`
 
  console.log(movies[1].title);
  // 5. Log all the named of actors (key named actors) of the first movie
  
  console.log(movies[0].actors);
  // 6. Log the name of the first actor of the first movie

  console.log(movies[0].actors[0]);
  // 7. Log the name of the last actor of the first movie
  
  console.log(movies[0].actors[2]);
  // 8. Log the name of the second actor (index 1) of the first movie
 
  console.log(movies[0].actors[1]);
  // 9. Log the name of the second actor (index 1) of the second movie

  console.log(movies[1].actors[1]);
  // 10. Log the name of the last actor of the thrid movie

  console.log(movies[movies.length-1].actors[2]);
  // 11. Log the name of the second actor (index 1) of the third movie

  console.log(movies[movies.length-1].actors[1]);
  // 12. Log all the genres of the third movie
  
  console.log(movies[movies.length-1].genres[0]);
  // 13. Log all the genres of the first movie
  
  console.log(movies[0].genres);
  // 14. Log the first genres of the first movie

  console.log(movies[0].genres[0]);
  // 15. Log the first genres of the second movie
 
  console.log(movies[1].genres[0]);
  // 16. Log the last genres of the first movie (using the length property of array)
  
  console.log(movies[0].genres[movies[0].genres.length-1]);
  // 17. Log the first genres of the second movie (using the length property of array)
  
  console.log(movies[0].genres[movies[0].genres.length-2]);
  // 18. Log all the genres of the first movie one by one
  
   for(genre of movies[0].genres ){
    console.log(genre);
   }
  // 19. Log all the genres of the second movie one by one
  for(genre of movies[1].genres ){
    console.log(genre);
   }
 
  // 20. Log if the first actor of the first movie is `Rachel McAdams` or not (You have to log true or false)
  
    if(movies[0].actors[0] == `Rachel McAdams`){
        console.log(true);
    } else {
        console.log(false);
    }
  // 21. Log if the second actor (index 1) of the second movie is `Natalie Portman` or not (You have to log true or false)
  
  if(movies[1].actors[1] == `Natalie Portman`){
    console.log(true);
   } else {
    console.log(false);
  }
  
  // 22. Log if the year of all three movies is greater than `2017` or not one by one. (Log true or false)
  
  for(let movie of movies){
    console.log(movie.year>2017);
 }
  
  // 23. Log the title of all three movies one by one.
  for(let movie of movies){
    console.log(movie.title);
 }
 
  // 24. Log if the title of the first movie is `Hannah` or not
  if(movies[0].title == `Hannah`){
    console.log(true);
  }else{
    console.log(false);
  }
  
  // 25. Log the number of actors in all three movies one by one
  for(let movie of movies){
    console.log(movie.actors.length);
  }
  
  // 26. Log the number of genres in all three movies one by one
  
  for(let movie of movies){
    console.log(movie.genres.length);
  }
  // 27. Log the name of all the movies with more than 1 genre
  for(let movie of movies){
    if(movie.genres.length >1){
        console.log(movie.title);
    }
  }
  
  // 28. Log the name of all the movies with more than 1 actors
  for(let movie of movies){
    if(movie.actors.length >1){
        console.log(movie.title);
    }
  }
  
  // 29. Log the name of all the movies with exactly 3 actors
  for(let movie of movies){
    if(movie.actors.length == 3){
        console.log(movie.title);
    }
  }
  
  // 30. Log the name of all the movies with year `2018`
  for(let movie of movies){
    if(movie.year == 2018){
        console.log(movie.title);
    }
  }
  


import {createTitle, createLien, createResume} from "./components/movieCard";



// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         // this.presentation = function(){
//         //     return "Bonjour je m'appelle " + this.name
//         // }
//     }
//     presentation(){
//     return "Bonjour je m'appelle " + this.name
//     }
// }
// Person.prototype.presentation = function(){
//     return 'Bonjour je suis Karim'
// }


// let player1 = new Person('Paul', 69);

// console.log(player1.presentation());

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDJkMzQ2YjJmYzU4ZDY5ODFkYzA2OGU3NzQxYjRlZiIsInN1YiI6IjY0ZmYxM2E5NmEyMjI3MDEzNzJjYjlkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SR0SRMd26YudmAbU-CGdCbydluRdJC8yHgDZ043oRqE'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => {
//         let app = document.getElementById('app');
//         for(let movie of response.results){
//             let title = document.createElement('h2');
//             title.innerHTML = movie.title;
//             app.appendChild(title)

//         }
//     })
//     .catch(err => console.error(err));

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then(response => response.json())
.then(response => {
    let app = document.getElementById('app');
    for(let movie of response.results){
        let newDiv = document.createElement('div');
        app.appendChild(newDiv);
        newDiv.appendChild(createTitle(movie.title));
        newDiv.appendChild(createResume(movie.overview));
        newDiv.appendChild(createLien(movie.id));
        
    }
})
.catch(err => console.error(err));
import { createFirstTitle, createSecondeTitle, createLien, createParagraph, createPoster, createYeur, createGenre, createSpan  } from "./components/movieCard";
let oneFilm = document.getElementsByClassName('oneFilm');


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDJkMzQ2YjJmYzU4ZDY5ODFkYzA2OGU3NzQxYjRlZiIsInN1YiI6IjY0ZmYxM2E5NmEyMjI3MDEzNzJjYjlkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SR0SRMd26YudmAbU-CGdCbydluRdJC8yHgDZ043oRqE'
  }
};

fetch('https://api.themoviedb.org/3/genre/movie/list?language=fr', options)
  .then(response => response.json())
  .then(response => {
    let categories = document.getElementById('categories');
    for (let categorie of response.genres){
        categories.appendChild(createSpan(categorie.name, categorie.id));

      
    };
    let categorieFilm = document.getElementsByClassName('categorieFilm');
    
    for (let i = 0; i < categorieFilm.length; i++) {

      categorieFilm[i].addEventListener('click', function () {
        const idValue = categorieFilm[i].getAttribute('id');
      fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${idValue}`, options)
      .then(response => response.json())
      .then(response => {
        for (let j = 0; j < oneFilm.length; j++) {
          oneFilm[j].classList.add('invisible');
        }
        
        

        let app = document.getElementById('app');
        for (let movie of response.results) {
          let newDiv = document.createElement('div');
          newDiv.className = 'oneFilm'
          app.appendChild(newDiv);
          newDiv.appendChild(createSecondeTitle(movie.title));
          newDiv.appendChild(createParagraph(movie.overview));
          newDiv.appendChild(createLien(movie.id));}




      })
    

      })

  }})



fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => {
    let app = document.getElementById('app');
    for (let movie of response.results) {
      let newDiv = document.createElement('div');
      newDiv.className = 'oneFilm'
      app.appendChild(newDiv);
      newDiv.appendChild(createSecondeTitle(movie.title));
      newDiv.appendChild(createParagraph(movie.overview));
      newDiv.appendChild(createLien(movie.id));




    }
    let lienDetailFilm = document.getElementsByClassName('lienDetailFilm');
    
    for (let i = 0; i < lienDetailFilm.length; i++) {

      lienDetailFilm[i].addEventListener('click', function () {

        for (let j = 0; j < oneFilm.length; j++) {
          oneFilm[j].classList.add('invisible');
        }
        const hrefValue = lienDetailFilm[i].getAttribute('href');

        fetch(`https://api.themoviedb.org/3/movie/${hrefValue}?language=fr`, options)
          .then(response => response.json())
          .then(response => {
            let newDivDetil = document.createElement('div');
            app.appendChild(newDivDetil);
            newDivDetil.appendChild(createPoster(response.poster_path));
            newDivDetil.appendChild(createFirstTitle(response.title));
            newDivDetil.appendChild(createYeur(response.release_date));
            newDivDetil.appendChild(createGenre(response.genres));
          })
          .catch(err => console.error(err));

      })
    }
  })
  .catch(err => console.error(err));


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

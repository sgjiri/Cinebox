
function createFirstTitle(firstTitle) {
    let tileBloc = document.createElement('h1');
    tileBloc.innerText = firstTitle;
    tileBloc.style.color= '#fff'
    return tileBloc;
}


function createSecondeTitle(secondTitle) {
    let tileBloc = document.createElement('h2');
    tileBloc.innerText = secondTitle;
    return tileBloc;
}

function createParagraph(paragraph) {
    let paragraphBloc = document.createElement('p');
    paragraphBloc.innerText = paragraph;
    paragraphBloc.style.color = '#fff'
    return paragraphBloc;
}

function createLien(id) {
    let lienBloc = document.createElement('a');
    lienBloc.innerText = 'En soivoir plus';
    lienBloc.className = 'lienDetailFilm'
    lienBloc.href = id;
    lienBloc.addEventListener('click', function (e) {
        e.preventDefault();
    })
    return lienBloc;
}

function createPoster(poster) {
    let posterBloc = document.createElement('img');
    posterBloc.src = 'https://image.tmdb.org/t/p/w500/' + poster;
    return posterBloc;
}

function createYeur(Yeur) {
    let YeurBloc = document.createElement('p');
    let arrayDate = []
    arrayDate = Yeur.split('-');
    YeurBloc.innerText = arrayDate[0];
    YeurBloc.style.color = '#fff'
    return YeurBloc;
}

function createGenre(genres) {
    
    let filmGenres = '';
    let arrayGenres = genres;


    let genreTrouve = arrayGenres.map((genreFilm)=> genreFilm.name);
    for (let genre of genreTrouve){
        filmGenres = filmGenres + genre + ', '

    }
    filmGenres = filmGenres.substring(0, filmGenres.length - 2);


    let genreBloc = document.createElement('p');
    genreBloc.innerText = filmGenres;
    genreBloc.style.color = '#fff'
    return genreBloc;
}


function createSpan(span, id) {
    let spanBloc = document.createElement('span');
    spanBloc.innerText = span;
    spanBloc.id = id;
    spanBloc.style.color= '#fff';
    spanBloc.style.padding = '10px';
    spanBloc.style.cursor= 'pointer';
    spanBloc.className = 'categorieFilm'
    return spanBloc;
}



export { createFirstTitle, createSecondeTitle, createParagraph, createLien, createPoster, createYeur, createGenre, createSpan};



"use strict"

let number0fFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};
//let kluch = prompt('один из последних посмотренных фильмов?', '');
//let znachenie = +prompt('на скольцо оцените его?', '');
//personalMovieDB.movies[kluch] = znachenie;

//let kluch2 = prompt('один из последних посмотренных фильмов?', '');
//let znachenie2 = +prompt('на скольцо оцените его?', '');
//personalMovieDB.movies[kluch2] = znachenie2;
let kluch = []
let znachenie = []
for(let i = 1; i <=  number0fFilms; i++){
    kluch[i] = prompt('один из последних просмотренных фильмов?', '');
    znachenie[i] = +prompt('на скольцо оцените его?', '');

    if (kluch[i] && znachenie[i] && kluch[i].length <= 50 && kluch[i] !== ''){
        personalMovieDB.movies[kluch[i]] = znachenie[i];
        
    }else{
    console.log('jopa');
        i = i-1;
    };
};
console.log(personalMovieDB.movies);
if(personalMovieDB.count < 10){
    alert('Просмотренно довольно мало фильмов');
};
if (10 <= personalMovieDB.count < 30){
    alert('Вы классический зритель');
};
if (personalMovieDB.count > 30){
    alert('Вы киноман');
}else{
    alert('Произошла ошибка');
};


console.log(personalMovieDB.count)
//git
//ghfhgf
klkfdlkflkdfklk 
"use strict";
let numbersOfFilms;
let nameOfFilm = [];
let ratingOfFilm = [];
let personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function start() {
	numbersOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
		numbersOfFilms = +prompt('Сколько фильмов вы посмотрели? Введите число.', '');
	}
	personalMovieDB.count = numbersOfFilms;
}


function rememberFilms() {
	for (let i = 0; i < numbersOfFilms; i++) {

		nameOfFilm[i] = prompt('Один из последних просмотренных фильмов', '');
		while (!nameOfFilm[i] || nameOfFilm[i] == '' || nameOfFilm[i].length == 0 || nameOfFilm[i].length > 50) {
			nameOfFilm[i] = prompt('введите верное значение', '');
		}

		ratingOfFilm[i] = +prompt('На сколько оцените его', '');
		while (!ratingOfFilm[i]) {
			ratingOfFilm[i] = +prompt('введите числовое значение', '');
		}

		personalMovieDB.movies[nameOfFilm[i]] = ratingOfFilm[i];

	}
}

// rememberFilms()


function detectPersonalLevel() {
	if (personalMovieDB.count < 2) {
		alert('Malo');
	} else if (personalMovieDB.count >= 2 && personalMovieDB.count <= 4) {
		alert('normalno');
	} else {
		alert('mnogo');
	}
}

function showMyDB() {
	if (personalMovieDB.privat) return;
	console.log(personalMovieDB);
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let gen = prompt(`Вош любимый жанр под номером ${i + 1}`);
		while (!gen || !isNaN(gen)) {
			gen = prompt('жанр?', '');
		}
		personalMovieDB.genres.push(gen);
	}
}
writeYourGenres()

// console.log(personalMovieDB);

// start();
// rememberFilms();
// detectPersonalLevel();

showMyDB();
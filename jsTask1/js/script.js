"use strict";




let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start() {
		this.count = +prompt('Сколько фильмов вы посмотрели?', '');
		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы посмотрели? Введите число.', '');
		}

	},

	rememberFilms() {
		let nameOfFilm = [];
		let ratingOfFilm = [];

		for (let i = 0; i < this.count; i++) {

			nameOfFilm[i] = prompt('Один из последних просмотренных фильмов', '');
			while (!nameOfFilm[i] || nameOfFilm[i] == '' || nameOfFilm[i].length == 0 || nameOfFilm[i].length > 50) {
				nameOfFilm[i] = prompt('введите верное значение', '');
			}

			ratingOfFilm[i] = +prompt('На сколько оцените его', '');
			while (!ratingOfFilm[i]) {
				ratingOfFilm[i] = +prompt('введите числовое значение', '');
			}

			this.movies[nameOfFilm[i]] = ratingOfFilm[i];

		}
	},

	detectPersonalLevel() {
		if (this.count < 2) {
			alert('Malo');
		} else if (this.count >= 2 && this.count <= 4) {
			alert('normalno');
		} else {
			alert('mnogo');
		}
	},

	showMyDB() {
		if (this.privat) return;
		console.log(this);
	},

	writeYourGenres() {
		for (let i = 0; i < 3; i++) {
			let gen = prompt(`Вош любимый жанр под номером ${i + 1}`);
			while (!gen || !isNaN(gen)) {
				gen = prompt('жанр?', '');
			}
			this.genres.push(gen);
		}
		this.genres.forEach((element, i, arr) => {
			console.log(`Любимый жанр ${i + 1} ${element}`);
		});
	},

	toggleVisibleMyDB() {
		if (this.privat === false) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	}
};



// personalMovieDB.start();
// personalMovieDB.rememberFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();




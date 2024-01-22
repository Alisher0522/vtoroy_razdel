"use strict";

let numberOfFilms = prompt("Nechta film tomosha qilgansiz?", "");


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const 
	lastFilm1 = prompt("Ohirgi tomosha qilgan filmingiz?", ""),
	grade1 = prompt("Filmni nechiga baxolaysiz?", ""),
	lastFilm2 = prompt("Ohirgi tomosha qilgan filmingiz?", ""),
	grade2 = prompt("Filmni nechiga baxolaysiz?", "");


personalMovieDB.movies[lastFilm1] = grade1;
personalMovieDB.movies[lastFilm2] = grade2;

console.log(personalMovieDB);
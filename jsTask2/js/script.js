'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    function sortFilms(db) {
        db.sort();
    }

    function shortNameFilm(arr) {
        arr = arr.map(item => {
            if (item.length > 21) {
                return item = item.slice(0, 22) + '...';
            }
            return item;
        });

        return arr;
    }





    function showFilms(listFilms, db) {


        listFilms.innerHTML = '';
        sortFilms(db);
        db.forEach((film, i) => {
            listFilms.innerHTML += `<li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
        </li>`
        });

        let del = document.querySelectorAll('.delete');


        del.forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                console.log(movieDB.movies);
                showFilms(listFilms, db);
            });
        });

        let favorite = favoriteFilm.checked;
        if (favorite) {
            console.log('Есть любимый фильм');
        }


    }


    function removePromo(promo) {
        promo.forEach(item => {
            item.remove();
        });
    }


    let promo = document.querySelector('.promo__adv');
    let promoBlocks = promo.querySelectorAll('img');
    let promoBg = document.querySelector('.promo__bg');
    let genre = promoBg.querySelector('.promo__genre');
    let list = document.querySelector('.promo__interactive-list');
    let filmsList = document.querySelectorAll('.promo__interactive-item');

    let btnAdd = document.querySelector('.add button');
    let inputAdd = document.querySelector('.adding__input');

    let favoriteFilm = document.querySelector('[type="checkbox"]');




    removePromo(promoBlocks);

    sortFilms(movieDB.movies);
    shortNameFilm(movieDB.movies);


    genre.textContent = 'Драма';
    promoBg.style.backgroundImage = "url('../img/bg.jpg')";


    showFilms(list, movieDB.movies);


    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputAdd.value == '') return;


        movieDB.movies.push(inputAdd.value);
        sortFilms(movieDB.movies);
        movieDB.movies = shortNameFilm(movieDB.movies);

        showFilms(list, movieDB.movies);
        inputAdd.value = '';
    });


});






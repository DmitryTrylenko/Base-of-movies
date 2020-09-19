"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo__adv = document.querySelectorAll('img'),
      promo__genre = document.querySelector('.promo__genre').textContent = 'ДРАМА',
      promo__bg = document.querySelector('.promo__bg'),
      promo__interactive_list = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


addForm.addEventListener('submit', event => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`
        };

        if (favorite) {
            console('Favorite movie');
        };

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, promo__interactive_list);
    }

    addForm.reset();
});

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

promo__bg.style.cssText = 'background: url("../img/bg.jpg") center center/cover no-repeat';

const sortArr = (arr) => {
    arr.sort()
};

function createMovieList (films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    
    films.forEach((item, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, promo__interactive_list);
        });
    });
};


deleteAdv(promo__adv);
createMovieList(movieDB.movies, promo__interactive_list);
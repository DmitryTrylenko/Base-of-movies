/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
      promo__interactive_list = document.querySelector('.promo__interactive-list');



promo__adv.forEach((item, i) => {
    for (let n = 0; n < i; n++) {
        item.remove();
    };
});

promo__bg.style.cssText = 'background: url("../img/bg.jpg") center center/cover no-repeat';

promo__interactive_list.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    promo__interactive_list.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
});
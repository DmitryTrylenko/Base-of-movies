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

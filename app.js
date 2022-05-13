'use strict';

const linksContainer = document.querySelector('.nav__links');
const allLinks = document.querySelectorAll('nav__link');

linksContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el !== link) el.classList.remove('nav__link--active');
      else el.classList.add('nav__link--active');
    });
  }
});

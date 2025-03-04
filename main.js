'use strict';

/*************
Variables
*************/

let dinoStrike = document.querySelectorAll('#strike li');
let dinoFade = document.querySelectorAll('#fade li');
let dinoCollapse = document.querySelectorAll('#row img');
let meteor = document.querySelector('#destroy-all');

/*************
Functions
*************/

dinoStrike.forEach(e => {
  e.addEventListener('click', () => {
    e.style.textDecoration = 'line-through';
  })
});

dinoFade.forEach(e => {
  e.addEventListener('click', () => {
    e.style.opacity = '0';
  })
});

dinoCollapse.forEach(e => {
  e.addEventListener('click', () => {
    e.style.width = '0';
  })
});

meteor.addEventListener('click', () => {
  
  dinoStrike.forEach(e => {
      e.style.textDecoration = 'line-through';
  });
  
  dinoFade.forEach(e => {
      e.style.opacity = '0';
  });
  
  dinoCollapse.forEach(e => {
      e.style.width = '0';
    })
});

/*************
Helper functions
*************/



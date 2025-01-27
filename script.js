"use strict";

const nav_button = document.querySelector('.nav_button')
console.log(nav_button)
const nav_menu = document.querySelector('.nav_menu')
console.log(nav_menu)

nav_button.addEventListener('click', () => {
    nav_menu.classList.toggle('hidden')
});
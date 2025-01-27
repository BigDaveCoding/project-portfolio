"use strict";

const nav_button = document.querySelector('.nav_button')
console.log(nav_button)
const nav_menu = document.querySelector('.nav_menu')
console.log(nav_menu)

nav_button.addEventListener('click', () => {
    nav_menu.classList.toggle('hidden')
});

const nav_links = document.querySelectorAll('.nav_link')
console.log(nav_links)

nav_links.forEach(link => {
    link.addEventListener('click', () => {
        if (!nav_menu.classList.contains('hidden')) {
            nav_menu.classList.add('hidden')
        }
    })
});
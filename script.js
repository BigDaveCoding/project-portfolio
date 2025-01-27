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

const about_me = document.querySelector('.about_me')

const project_one = document.querySelector('.project_one')
const p_one_img = document.querySelector('.p_one_img')
const p_one_title = document.querySelector('.p_one_title')
const p_one_desc = document.querySelector('.p_one_desc')
const p_one_skills = document.querySelector('.p_one_skills')

fetch('/json_files/portfolio_info.json')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        about_me.innerText = data.about_me

        console.log(data.project_one)

        p_one_img.src = data.project_one.image
        p_one_title.textContent = data.project_one.name
        p_one_desc.textContent = data.project_one.about
        data.project_one.skills.forEach(skill => {
            console.log(skill)
            const span = document.createElement("span")
            span.textContent = `#${skill} `
            p_one_skills.appendChild(span)
        })


    })
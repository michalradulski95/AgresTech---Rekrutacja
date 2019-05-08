var btn = document.querySelector('.hamburger-menu');
var menu = document.querySelector('.menu-items');
var menu_items = document.querySelectorAll('.menu-item');
var description = document.querySelector('.description');
var nav = document.getElementById('nav');

/*Hamburger menu*/

btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
});

/*menu background*/

window.onscroll = function load() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || window.innerWidth < 450) {
        nav.style.backgroundColor = '#ffffff';
        menu_items.forEach(el => {
            el.style.color = '#000000';
            el.style.borderBottom = '1px solid #000000';
        })
    } else {
        nav.style.backgroundColor = '';
        menu_items.forEach(el => {
            el.style.color = '#ffffff';
            el.style.borderBottom = '1px solid #ffffff';
        })
    }

    /*section slide effect*/
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 || window.innerWidth > 1440) {
        description.classList.add('slide');

    }
};
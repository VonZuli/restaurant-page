import pastizzi from './images/pastizzi.jpg'
import bread from './images/bread.jpg'
import timpana from './images/timpana.jpg'
import cookie from './images/fig_cookies.jpg'
import cake from './images/fig_cake.jpeg'

// <h1>Mike's Maltese Bakery</h1>
const content = document.querySelector('#content');
const titleContainer = document.createElement('div')
titleContainer.classList.add('title-container')
const title = document.createElement("h1");
title.classList.add('title')

title.textContent = "Mike's Maltese Bakery"

// <h3>Traditional Maltese Bread and Pastries</h3>
const subtitle = document.createElement("h3");
subtitle.textContent = "Traditional Maltese Bread and Pastries"
const menuPreview = document.createElement('div');
menuPreview.classList.add("menu")

const menu1 = new Image();
const menu2 = new Image();
const menu3 = new Image();
const menu4 = new Image();
const menu5 = new Image();

menu1.src = pastizzi
menu2.src = bread
menu3.src = timpana
menu4.src = cookie
menu5.src = cake

content.appendChild(titleContainer)
titleContainer.appendChild(title);
content.appendChild(subtitle);
content.appendChild(menuPreview);

menuPreview.appendChild(menu1);
menuPreview.appendChild(menu2);
menuPreview.appendChild(menu3);
menuPreview.appendChild(menu4);
menuPreview.appendChild(menu5);

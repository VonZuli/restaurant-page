import dish from './images/pastizzi.jpg'

// <h1>Mike's Maltese Bakery</h1>
const title = document.createElement("h1");
const content = document.querySelector('#content');
title.textContent = "Mike's Maltese Bakery"

// <h3>Traditional Maltese Bread and Pastries</h3>
const subtitle = document.createElement("h3");
subtitle.textContent = "Traditional Maltese Bread and Pastries"

const myDish = new Image();

myDish.src = dish
content.appendChild(title);
content.appendChild(subtitle);
content.appendChild(myDish);

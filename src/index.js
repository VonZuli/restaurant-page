import _ from 'lodash';
import './styles/style.css';
import Icon from './images/maltese_cross.png'
import dish from './images/pastizzi.jpg'

console.log("Hello there")


  const content = document.querySelector('#content');
  const myIcon = new Image();
  const myDish = new Image();
  myIcon.src = Icon;
  myDish.src = dish
  content.appendChild(myIcon)
  content.appendChild(myDish)

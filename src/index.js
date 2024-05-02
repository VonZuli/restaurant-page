import _, { forEach } from 'lodash';
import './styles/style.css';
import Icon from './images/maltese_cross.png'
import home from './home';
import menu from './menu';
import about from './about'

const header = document.querySelector('header')
const myLogo = new Image();
const myLogo2 = new Image();
myLogo.src = Icon;
myLogo2.src = Icon;
myLogo.classList.add("logo");
myLogo2.classList.add("logo");
header.prepend(myLogo);
header.append(myLogo2);



const homeBtn = document.querySelector(".home");
homeBtn.addEventListener('click', home)

const menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', menu)

const aboutBtn = document.querySelector('.about')
aboutBtn.addEventListener('click', about)


home();
// menu();
// about();
import _ from 'lodash';
import './styles/style.css';
import Icon from './images/maltese_cross.png'
import { home } from "./home";

const header = document.querySelector('header')
const myLogo = new Image();
const myLogo2 = new Image();
myLogo.src = Icon;
myLogo2.src = Icon;
myLogo.classList.add("logo");
myLogo2.classList.add("logo");
header.prepend(myLogo);
header.append(myLogo2);
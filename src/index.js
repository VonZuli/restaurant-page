import _ from 'lodash';
import './styles/style.css';
import Icon from './images/maltese_cross.png'
import { home } from "./home";

console.log("Hello there")


const header = document.querySelector('header')
const myLogo = new Image();
myLogo.src = Icon;
header.prepend(myLogo);
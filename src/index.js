import {Flower,Game} from './js/class.js';
import {loadLevel,saveLevel,loadExp,saveExp,
loadText,saveText,loadTime, saveTime} from './js/functions.js';
import './css/normalize.css';
import './styles.css';

// HTML Selectors - Let Variables - Const Variables
export const divVersion = document.querySelector('.version'),
divFlower = document.querySelector('.div-flower'),
divRegadera = document.querySelector('.div-regadera'),
divDrops = document.querySelector('.div-drops'),
divMessage = document.querySelector('.message'),
divXp = document.querySelector('.xp'),
timer = document.querySelectorAll('span')[1],
btnOptions = document.querySelector('#options'),
btnRegar = document.querySelector('#btn-regar');

export let nText = loadText(), version = '1.9', setTime = new Date(), today = loadTime(),
background = 0, month = new Date().getMonth(), year = new Date().getFullYear();

let level = loadLevel(), exp = loadExp();
export const flower = new Flower(level), game = new Game(version,background);

btnOptions.addEventListener('click',() => {
    window.location.href = './options.html';
});

btnRegar.addEventListener('click',() => {
    // saveTime(today,month,year);
    flower.water();
    exp = exp + game.newExp(level);
    saveExp(exp);
    console.log(exp);
    if (exp >= 12) {
        level += 1, exp = 0;
        saveLevel(level);
        setTimeout(() => {
            flower.flower(level);
            loadLevel();
        }, 5500);
    }
    setTimeout(() => {
        divMessage.innerHTML = '';
        nText += 1;
        saveText(nText);
    },8500);
});
// HTML Selectors - Let Variables - Const Variables
import {divXp,btnRegar,timer} from '../index.js';
import {setTime} from '../index.js';

export function saveLevel(level) {
    localStorage.setItem('level',level);
}
export function saveExp(exp) {
    localStorage.setItem('exp',exp);
    loadExp();
}
export function loadLevel() {
    let level;
    if (localStorage.getItem('level')) {
        level = localStorage.getItem('level') * 1;
    } else { level = 1 };

    const span = document.querySelector('span');
    span.textContent = level;
    return level;
}
export function loadExp() {
    let exp;
    if (localStorage.getItem('exp')) {
        exp = localStorage.getItem('exp') * 1;
    } else { exp = 0 };

    divXp.children[0].style.width = `${exp}rem`;
    if (exp >= 12) {
        setTimeout(() => {
            const time = setInterval(() => {
                exp -= .3;
                divXp.children[0].style.width = `${exp}rem`;
                if (exp <= 0) {
                    exp = 0;
                    divXp.children[0].style.width = `${exp}rem`;
                    clearInterval(time)
                    localStorage.setItem('exp',exp);
                }
            }, 100);
        }, 1000);
    }
    return exp;
}
export function saveText(nText) {
    localStorage.setItem('nText',nText);
}
export function loadText(needText = false) {
    let nText, text;
    if (localStorage.getItem('nText')) {
        nText = localStorage.getItem('nText') * 1;
    } else { nText = 0 };

    switch(nText) {
        case 0:
            text = 'Te amo mucho Alejandra';
            textImg(0);
        break;
        case 1:
            text = 'Eres mi tiktoker preciosa';
        break;
        case 2:
            text = 'Eres lo mejor que me ha pasado en esta vida mi reina';
        break;
    }

    if (needText == true) return text;
    else { return nText; }
}
export function textImg() {
    const img = document.createElement('img');
    img.alt = 'Emoji';
    let nText;
    if (localStorage.getItem('nText')) {
        nText = localStorage.getItem('nText') * 1;
    } else { nText = 0 };

    switch(nText) {
        case 0:
            img.src = './assets/img/heart.png';
        break;
        case 1:
            img.src = './assets/img/cute.png';
        break;
        case 2:
            img.src = './assets/img/brillos.png';
        break;
    }
    return img;
}
export function saveTime(today,month,year) {
    localStorage.setItem('today',today);
    localStorage.setItem('month',month);
    localStorage.setItem('year',year);
    btnRegar.disabled = true;
}
export function loadTime() {
    let today = new Date().getDate(),
    month = new Date().getMonth(),
    yeer = new Date().getFullYear();
    if (localStorage.getItem('today')) {
        (localStorage.getItem('today') < today || localStorage.getItem('month') < month || localStorage.getItem('year') < yeer) ?
        btnRegar.disabled = false : btnRegar.disabled = true;
        cooldown(setTime);
    } else { btnRegar.disabled = false; }
    return today
}
export function cooldown(setTime) {
    if (btnRegar.disabled == true) {
        let countDown = new Date();
        countDown.setHours(countDown.getHours() + 24);
    
        let time = setInterval(() => {
            let startTime = new Date().getTime(),
            timeLeft = countDown - startTime,
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - setTime.getHours(),
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) - setTime.getMinutes(),
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            timer.innerHTML = `${hours}:${minutes}:${seconds}`;
            if (timeLeft <= 0) {
                clearInterval(time);
                timer.innerHTML = 'Regar';
            }
        },1000);
    } else { timer.innerHTML = 'Regar'; }
}
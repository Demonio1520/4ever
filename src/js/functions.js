// HTML Selectors - Let Variables - Const Variables
import {divFlower,divRegadera,divDrops,divMessage,divXp,btnRegar,timer} from '../index.js';
import {nText,setTime} from '../index.js';
import {game} from '../index.js';

export class Flower {
    constructor(level) {
        this.flower(level);
    }
    flower = (level) => {
        const img = document.createElement('img');
        img.src = `./assets/img/flower_grow_${level - 1}.png`;
        img.alt = 'flor';
        img.classList.add('flower');
        divFlower.innerHTML = '';
        divFlower.append(img);
    }
    water = () => {
        this.wateringCan();
        setTimeout(this.waterDrops,1000);

        setTimeout(() => {
            divDrops.innerHTML = "";
            divRegadera.children[0].style.animation = "unrotate 1s ease-in-out forwards";
            setTimeout(() => {
                divRegadera.innerHTML = "";
            },1200);

            setTimeout(() => {
                let i = 0;
                const timer = setInterval(() => {
                    this.glitters(i);
                    i++;
                    if (i == 4) clearInterval(timer);
                },200);
            },1500);

            setTimeout(this.newText,2500,nText);
        }, 2500);
    }
    wateringCan = () => {
        const img = document.createElement('img');
        img.src = './assets/img/regadera.png';
        img.alt = 'Regadera';
        img.classList.add('regadera');
        divRegadera.append(img);
    }
    waterDrops = () => {
        const img = document.createElement('img');
        img.src = './assets/img/drops.gif';
        img.alt = 'Gotas';
        img.classList.add('drops');
        divDrops.append(img);
    }
    glitters = (i) => {
        const img = document.createElement('img');
        img.src = './assets/img/brillos.png';
        img.alt = 'Brillos';
        img.classList.add(`glitters-${i}`);
        divDrops.append(img);
        setTimeout(() => {
            divDrops.removeChild(img);
        },400);
    }
    newText = (nText) => {
        const p = document.createElement('p');
        p.textContent = loadText(true);
        divMessage.append(p);
        divMessage.append(textImg());
    }
}

export class Game {
    newExp = (level) => {
        let exp = 0;
        switch (level) {
            case 1:
                exp = 4;
            break;
            case 2:
                exp = 3;
            break;
            case 3:
                exp = 2;
            break;
            case 4:
                exp = 1;
            break;
            case 5:
                exp = .5;
            break;
        }
        return exp;
    }
}

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
            exp = 0;
            divXp.children[0].style.width = `${exp}rem`;
            localStorage.setItem('exp',exp);
        },500);
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
}
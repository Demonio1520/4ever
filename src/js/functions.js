// HTML Selectors - Let Variables - Const Variables
import {divXp,btnRegar,timer,divNew, background} from '../index.js';
import {game,setTime,tasks} from '../index.js';

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
        case 3:
            text = 'No quiero que te separes de mi lado, tu eres mi complemento';
        break;
        case 4:
            text = 'Me fascinan tus piecitos';
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
        case 3:
            img.src = './assets/img/cute.png';
        break;
        case 4:
            img.src = './assets/img/encanto.png';
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
export function addNew(email,event = true) {
    if(email > 0 && event == true) {
        const span = document.createElement('span');
        divNew.append(span);
    } else { event = false; }
    if (event == false) {
        if (document.querySelectorAll('span')[2]) {
            document.querySelectorAll('span')[2].remove();
        }
        if (document.querySelector('.gift')) {
            document.querySelector('.gift').style.bottom = '5rem';
        }
    }
    return event;
}
export function addRewards(rewards,level) {
    if (level == 2) {
        rewards.push('bg');
        rewards.push('gift');
    } else if (level == 3) {
        rewards.push('bg');
        rewards.push('gift');
    }
    localStorage.setItem('rewards',JSON.stringify(rewards))
    return rewards;
}
export function loadRewards() {
    let rewards;
    if (JSON.parse(localStorage.getItem('rewards'))) {
        rewards = JSON.parse(localStorage.getItem('rewards'));
    } else { rewards = []};
    return rewards;
}
export function saveEmails(rewards) {
    const emails = rewards.length;
    localStorage.setItem('emails',emails);
    return emails;
}
export function loadEmails() {
    let emails;
    if (localStorage.getItem('emails')) {
        emails = localStorage.getItem('emails');
    } else {emails = 0};
    return emails;
}
export function msEmail(rewards) {
    let text;
    switch(rewards[0]) {
        case 'bg':
            text = 'Has Desbloqueado un nuevo Background';
            rewards.shift();
        break;
        case 'gift':
            text = 'Has Desbloqueado un nuevo regalo';
        break;
    }
    return text;
}
export function saveTasks(tasks) {
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
export function loadTasks() {
    let tasks;
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else { tasks = []};
    return tasks;
}
export function unlocked(tasks,event) {
    let unlocked = false;
    for (let i = 0; i < tasks.length; i++) {
        if (event == tasks[i]) {
            unlocked = true;
            return '';
        }
    }
    if (unlocked == false) return '<i class="fa-solid fa-lock"></i>'
}
export function saveGift(gift) {
    localStorage.setItem('gift',gift);
}
export function loadGift() {
    let gift;
    if (localStorage.getItem('gift')) {
        gift = localStorage.getItem('gift');
    } else { gift = 0};
    return gift;
}
export function giftText(gift) {
    let text;
    switch(gift) {
        case 0:
            text = 'Tienes un cupon para comer heladitos';
        break;
        case 1:
            text = 'Tienes un cupon para comer perros';
        break;
    }
    return text;
}
export function loadBg() {
    let bg;
    if (localStorage.getItem('bg')) {
        bg = localStorage.getItem('bg');
    } else { bg = 0};
    return bg;
}
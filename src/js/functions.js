// HTML Selectors - Let Variables - Const Variables
import { divNew, btnRegar } from '../index.js';
import { Save } from '../index.js';

// Functions

export function cooldown() {
    if (btnRegar.disabled == true) {
        let countDown = new Date();
        countDown.setHours(countDown.getHours() + 24);
    
        let time = setInterval(() => {
            let startTime = new Date().getTime(),
            timeLeft = countDown - startTime,
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - new Date().getHours(),
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) - new Date().getMinutes(),
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            btnRegar.textContent = `${hours}:${minutes}:${seconds}`;
            if (timeLeft <= 0) {
                clearInterval(time);
                btnRegar.textContent = 'Regar';
            }
        }, 1000);
    } else { btnRegar.textContent = 'Regar'; }
}
export function unlocked(tasks,event) {
    for (let i = 0; i < tasks.length; i++) {
        if (event == tasks[i]) {
            return '';
        }
    } return '<i class="fa-solid fa-lock"></i>';
}
export function divDelete() {
    if(document.querySelector('.options')) { document.querySelector('.options').remove(); }
    else if (document.querySelector('.div-emails')) { document.querySelector('.div-emails').remove(); }
    else if (document.querySelector('.gift')) { document.querySelector('.gift').remove(); }
    else { return false }
    return true;
}
export function addNew(email,event) {
    if(email > 0 && event == false) {
        if (document.querySelector('span')) { document.querySelector('span').remove(); }
        const span = document.createElement('span');
        divNew.append(span);
        event = true;
        if(document.querySelector('.div-gift')) { document.querySelector('span').style.bottom = '6rem'; }
    } else if (email > 0 && event == true) { document.querySelector('span').remove(); event = false;
    } else { event = false; }
    return event;
}
export function emailText(rewards) {
    let text, event = rewards;
    switch(event[0]) {
        case 'bg':
            text = 'Has Desbloqueado un nuevo Background';
            rewards.shift();
            Save.saveRewards(rewards);
        break;
        case 'gift':
            text = 'Has Desbloqueado un nuevo regalo';
        break;
    }
    return text;
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
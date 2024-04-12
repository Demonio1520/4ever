// HTML Selectors - Let Variables - Const Variables
import { divExp,btnRegar,timer,divNew, background } from '../index.js';
import { Save } from '../index.js';

// Functions

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
    // If Event == true ( There are a new Emails )
    // If Event == false ( No new Emails )
    if(email > 0 && event == true) {
        const span = document.createElement('span');
        divNew.append(span);
    } else { event = false; }
    if (event == false) {
        if (document.querySelectorAll('span')[2]) { document.querySelectorAll('span')[2].remove(); }
        if (document.querySelector('.gift')) { document.querySelector('.gift').style.bottom = '5rem'; }
    }
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
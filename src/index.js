import { FlowerClass, GameClass, LoadClass, SaveClass } from './js/class.js';
import { addNew, divDelete, emailText, giftText } from './js/functions.js';
import './css/normalize.css';
import './styles.css';

// HTML Div Selectors
export const divLevel = document.querySelector('.div-level'),
divExp = document.querySelector('.div-exp'),
divRegadera = document.querySelector('.div-regadera'),
divDrops = document.querySelector('.div-drops'),
divFlower = document.querySelector('.div-flower'),
divMessage = document.querySelector('.div-message'),
divNew = document.querySelector('.div-new'),
divVersion = document.querySelector('.div-version');

export const style = document.querySelector('#background'),
btnOptions = document.querySelector('#options'),
btnGift = document.querySelector('#gift'),
btnRegar = document.querySelector('#btn-regar'),
btnEmail = document.querySelector('#btn-email');

export const Load = new LoadClass, Save = new SaveClass();

const today = Load.loadTime(), month = new Date().getMonth(), year = new Date().getFullYear();

let version = '3.1', level = Load.loadLevel(), exp = Load.loadExp(), text = Load.loadText(), background = Load.loadBackground(),
tasks = Load.loadTasks(), rewards = Load.loadRewards(), email = Load.loadEmail(), newMessage = addNew(email,false), gift = Load.loadGift();

export const Flower = new FlowerClass(level), Game = new GameClass(version,level,exp,background,rewards);

// Events

btnOptions.addEventListener('click',() => {
    Game.divOptions(tasks);
    const bg = document.querySelectorAll('#bg');

    bg.forEach(function(bg) {
        bg.addEventListener('click',function() {
            const event = 'bg_' + this.className.charAt(this.className.length - 1);
            for (let i = 0; i < tasks.length; i++) {
                if (event == tasks[i] || event == 'bg_0') {
                    background = this.className.charAt(this.className.length - 1);
                    Save.saveBackground(background);
                    Game.background(background);
                }
            }
        });
    });
});
btnRegar.addEventListener('click',() => {
    Save.saveTime(today,month,year);
    Flower.water(text);
    text += 1, Save.saveText(text);
    exp = Game.returnExp(exp,level), Game.divExp(level);
    if (exp == 0) {
        level ++;
        rewards = Game.rewards(rewards,level);
        email += Game.emails(email,level,false);
        newMessage = addNew(email,false);
    }
    tasks = Game.tasks(level);
});
btnEmail.addEventListener('click',() => {
    newMessage = addNew(email,newMessage);
    Game.divEmails(email);
    const letter = document.querySelectorAll('#email');

    letter.forEach(function(letter) {
        letter.addEventListener('click',function(event) {
            const parent = event.target.parentNode;
            this.removeAttribute('class');
            this.classList.add('fa-solid','fa-envelope-open');

            setTimeout(() => {
                parent.innerHTML = emailText(rewards);
                email -= 1, Save.saveEmail(email);
                setTimeout(() => {
                    parent.remove();
                }, 3000);
            }, 1000);
        });
    });
});
// btnGift.addEventListener('click',() => {
//     if (divDelete) {
//         divNew.innerHTML += `
//         <div class="div-gift">
//             <h2>Nuevo Regalo</h2>
//             <p class="mt-4 fw-bold">${giftText(gift)}</p>
//             <img src="./assets/emojis/cute.png" alt="Emoji">
//             <div>
//                 <small class="fw-bold my-0">Tomale cap a tu regalo y envialo</small>
//             </div>
//         </div>`;
//         setTimeout(() => {
//             document.querySelector('.div-gift').remove();
//         }, 5000);

//         for (let i = 0; i < rewards.length; i++) {
//             if (rewards[i] == 'gift') { rewards.splice(i,1) }
//         }
//         Save.saveRewards(rewards);
//         Game.divGift(rewards);
//         gift += 1, Save.saveGift(gift);
//         if(document.querySelectorAll('span')[1]) { 
//             document.querySelector('.div-gift').style.bottom = '70vh'; 
//             document.querySelectorAll('span')[1].style.bottom = '2rem';
//         }
//     }
// });
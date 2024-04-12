import { FlowerClass, GameClass, LoadClass, SaveClass } from './js/class.js';
import { addNew, emailText, giftText } from './js/functions.js';
import './css/normalize.css';
import './styles.css';

// HTML Selectors - Let Variables - Const Variables
export const divVersion = document.querySelector('.version'),
divFlower = document.querySelector('.div-flower'),
divRegadera = document.querySelector('.div-regadera'),
divDrops = document.querySelector('.div-drops'),
divMessage = document.querySelector('.message'),
divExp = document.querySelector('.exp'),
divNew = document.querySelector('.new'),
style = document.querySelector('#background'),
timer = document.querySelectorAll('span')[1],
btnOptions = document.querySelector('#options'),
btnRegar = document.querySelector('#btn-regar'),
btnChest = document.querySelector('#btn-chest');

export const Load = new LoadClass, Save = new SaveClass();

const setTime = new Date(), today = Load.loadTime(), month = setTime.getMonth(), year = setTime.getFullYear();

let version = '2.5', level = Load.loadLevel(), exp = Load.loadExp(), text = Load.loadText(), background = Load.loadBackground(),
tasks = Load.loadTasks(), rewards = Load.loadRewards(), email = Load.loadEmail(), newMessage = addNew(email), gift = Load.loadGift();

export const Flower = new FlowerClass(level), Game = new GameClass(version,level,exp,background,rewards);

function btnGift() {
    if (document.querySelector('.gift')) {
        const btnGift = document.querySelector('.gift');
        btnGift.addEventListener('click',() => {
            if (document.querySelector('.div-gift')) {
                document.querySelector('.div-gift').remove();
                for (let i = 0; i < rewards.length; i++) {
                    if (rewards[i] == 'gift') { rewards.splice(i,1) }
                }
                console.log('click');
                Save.saveRewards(rewards);
                Game.gift(rewards);
                gift += 1, saveGift(gift);
            } else {
                if (document.querySelector('.options')) { document.querySelector('.options').remove(); }
                else if (document.querySelector('.chest')) { document.querySelector('.chest').remove(); }
                divNew.innerHTML += `
                <div class="div-gift">
                    <h2>Nuevo Regalo</h2>
                    <p class="mt-4 fw-bold">${giftText(gift)}</p>
                    <img src="./assets/emojis/cute.png" alt="Emoji">
                    <div>
                        <small class="fw-bold my-0">Tomale cap a tu regalo y envialo</small>
                    </div>
                </div>`;
                if(document.querySelectorAll('span')[2]) { document.querySelector('.div-gift').style.bottom = '75vh' }
            }
        });
    }
}

// Events

btnOptions.addEventListener('click',() => {
    Game.options(tasks);
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
    // saveTime(today,month,year);
    Flower.water(text);
    text += 1, Save.saveText(text);
    exp = Game.returnExp(exp,level), Game.divExp(level);
    if (exp == 0) {
        level ++;
        rewards = Game.rewards(rewards,level);
        email += Game.email(email,level,false);
        newMessage = addNew(email);
        Game.gift(rewards);
    }
    tasks = Game.tasks(level);
});
btnChest.addEventListener('click',() => {
    if (newMessage == true) { newMessage = addNew(email,false); }
    Game.chest(email);
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
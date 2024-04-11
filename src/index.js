import {Flower,Game} from './js/class.js';
import {loadLevel,saveLevel,loadExp,saveExp,loadText,saveText,
loadTime,addNew,loadTasks,addRewards,loadRewards,loadEmails,saveEmails,msEmail,
loadGift,saveGift,giftText,
loadBg,
bgSelected} from './js/functions.js';
import './css/normalize.css';
import './styles.css';

// HTML Selectors - Let Variables - Const Variables
export const divVersion = document.querySelector('.version'),
divFlower = document.querySelector('.div-flower'),
divRegadera = document.querySelector('.div-regadera'),
divDrops = document.querySelector('.div-drops'),
divMessage = document.querySelector('.message'),
divXp = document.querySelector('.xp'),
divNew = document.querySelector('.new'),
timer = document.querySelectorAll('span')[1],
btnOptions = document.querySelector('#options'),
btnRegar = document.querySelector('#btn-regar'),
btnChest = document.querySelector('#btn-chest');

export let nText = loadText(), version = '2.2', setTime = new Date(), today = loadTime(),
background = loadBg(), month = new Date().getMonth(), year = new Date().getFullYear();

let level = loadLevel(), exp = loadExp(), email = loadEmails(), newMs = addNew(email),
tasks = loadTasks(), rewards = loadRewards(), gift = loadGift();
export const flower = new Flower(level),
game = new Game(version,background,rewards);

function btnGift() {
    if (document.querySelector('#gift')) {
        const btnGift = document.querySelector('#gift');
        btnGift.addEventListener('click',() => {
            if(document.querySelector('.div-gift')) {
                document.querySelector('.div-gift').remove();
                rewards = rewards.filter(item => item !== 'gift');
                localStorage.setItem('rewards',JSON.stringify(rewards));
                game.gift(rewards);
                gift += 1, saveGift(gift);
            } else {
                if(document.querySelector('.options')) {
                    document.querySelector('.options').remove();
                } else if (document.querySelector('.chest')) {
                    document.querySelector('.chest').remove();
                }
                const divGift = document.createElement('div');
                divGift.classList.add('div-gift');
                divGift.innerHTML = `<h2>Nuevo Regalo</h2>
                <p class="mt-4 fw-bold">${giftText(gift)}</p>
                <img src="./assets/img/cute.png" alt="Emoji">
                <div style="display: flex;">
                    <small class="mb-2 fw-bold">Tomale cap a tu regalo y envialo</small>
                </div>`;
                divNew.appendChild(divGift);
                if(document.querySelectorAll('span')[2]) {
                    divGift.style.bottom = '75vh'
                }
            }
        });
    }
}

// Events

btnOptions.addEventListener('click',() => {
    if(document.querySelector('.options')) {
        document.querySelector('.options').remove();
    } else {
        if (document.querySelector('.chest')) {
            document.querySelector('.chest').remove();
        } else if (document.querySelector('.div-gift')) {
            document.querySelector('.div-gift').remove();
        }
        game.options(tasks);
        const bg = document.querySelectorAll('#bg');

        bg.forEach(function(bg) {
            bg.addEventListener('click',function() {
                const event = 'bg_' + this.className.charAt(this.className.length - 1);
                for (let i = 0; i < tasks.length; i++) {
                    if (event == tasks[i] || event == 'bg_0') {
                        background = this.className.charAt(this.className.length - 1);
                        localStorage.setItem('bg',background);
                        game.background(background);
                    }
                }
            });
        });
    }
});
btnRegar.addEventListener('click',() => {
    // saveTime(today,month,year);
    flower.water();
    exp = exp + game.newExp(level);
    saveExp(exp);
    if (exp >= 12) {
        level += 1, exp = 0;
        rewards = addRewards(rewards,level);
        email = saveEmails(rewards);
        newMs = addNew(email);
        saveLevel(level);
        game.gift(rewards);
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
    tasks = game.tasks(tasks,level);
    btnGift();
});
btnChest.addEventListener('click',() => {
    if(document.querySelector('.chest')) {
        document.querySelector('.chest').remove();
    } else {
        if(document.querySelector('.options')) {
            document.querySelector('.options').remove();
        } else if (document.querySelector('.div-gift')) {
            document.querySelector('.div-gift').remove();
        }
        if (newMs == true) newMs = addNew(email,false);
        game.chest(email);
        const letter = document.querySelectorAll('#email');
    
        letter.forEach(function(letter) {
            letter.addEventListener('click',function(event) {
                const parent = event.target.parentNode;
                this.removeAttribute('class');
                this.classList.add('fa-solid','fa-envelope-open');
    
                setTimeout(() => {
                    parent.innerHTML = msEmail(rewards);
                    email -= 1;
                    localStorage.setItem('emails',email);
                    localStorage.setItem('rewards',JSON.stringify(rewards));
                    rewards = loadRewards();
                    email = loadEmails();
                    setTimeout(() => {
                        parent.remove();
                    },3000);
                },1000);
            });
        });
    } rewards[0] 
});

btnGift();
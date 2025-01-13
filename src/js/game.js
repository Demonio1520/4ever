// HTML Div Selectors
//import { divLevel, divExp, divRegadera, divDrops, divFlower, divMessage, divNew, divVersion } from '../index.js';
// HTML Selectors
//import { style, timer, btnOptions, btnGift, btnRegar, btnEmail } from '../index.js';
//import { Flower,Game, Load, Save } from '../index.js';
//import { cooldown, unlocked, divDelete } from './functions.js';

export class SiteClass {
    constructor(room) {
        this.body = document.querySelector('body');
        this.loadTemplate(room);

    }
    loadTemplate = (room) => {
        const template = document.querySelector(`#${room}`);
        const content = template.content.cloneNode(true);
        this.body.innerHTML = '';
        this.body.appendChild(content);
    }
}

export class GameClass {
    constructor() {
        this.load = new LoadClass();
        this.save = new SaveClass();
        this.level(this.getLevel());
        this.expBar(this.getExp());
        this.flower(this.getLevel());
        // this.divExp(level);
        // this.background(bg);
        // this.divGift(rewards);
    }
    getLevel = () => {
        return this.load.level();
    }
    getExp = () => {
        return this.load.exp();
    }
    getDaily = () => {
        return this.load.daily();
    }
    flower = (level) => {
        const container = document.querySelector('.flower');
        const img = document.createElement('img');
        img.id = 'flower';
        img.src = `./assets/img/flower_grow_${this.growth(level)}.png`;
        img.alt = 'Flower';
        container.appendChild(img);
    }
    growth = (level) => {
        const growthMap = {
            2: 1,
            4: 2,
            6: 3,
            8: 4,
            9: 5,
            10: 6
        };
        return growthMap[level] || 0;
    }
    water = () => {
        setTimeout(this.wateringCan,500);
        setTimeout(this.drops,1000);
        setTimeout(this.glitters,3800);
        setTimeout(this.message,5200,this.getDaily());
        setTimeout(this.exp,6000,this.getLevel());
    }
    wateringCan = () => {
        const container = document.querySelector('.container-1');
        const img = document.createElement('img');
        // Create Watering Can
        img.id = 'watering-can';
        img.src = './assets/img/watering_can.png';
        img.alt = 'Watering Can';
        container.appendChild(img);

        setTimeout(() => {
            img.style.animation = 'unrotate 1s ease-in-out forwards';
            img.style.opacity = '0';
        }, 2500);
        setTimeout(() => {
            container.innerHTML = ``;
        }, 3500)
    }
    drops = () => {
        const container = document.querySelector('.container-2');
        const img = document.createElement('img');
        // Create Drops
        img.id = 'drops';
        img.src = './assets/img/drops.gif';
        img.alt = 'Drops';
        container.appendChild(img);

        setTimeout(() => {
            container.innerHTML = ``;
        }, 1500)
    }
    glitters = () => {
        const container = document.querySelector('.container-2');
        let i = 0;

        const timer = setInterval(() => {
            const img = document.createElement('img');
            // Create Glitters
            img.classList.add('glitters');
            img.id = `glitter-${i}`;
            img.src = './assets/emojis/glitters.png';
            img.alt = 'Glitters';
            container.appendChild(img);

            setTimeout(() => {
                container.firstChild.remove();
            }, 400);

            i++;
            if (i > 3) {
                clearInterval(timer);
            }
        }, 200);
    }
    message = (daily) => {
        const container = document.querySelector('.message');
        const text = document.createElement('p');
        const img = document.createElement('img');
        // Create Text & Img
        text.textContent = this.getText(daily);
        img.src = this.getImg(daily);
        img.alt = 'Emoji';
        container.appendChild(text);
        container.appendChild(img);

        setTimeout(() => {
            container.innerHTML = '';
        }, 6000);
    }
    text_img = () => {
        return [
            { text : 'Lovi Linda', img : './assets/emojis/heart.png' },
            { text : 'La menos Odiosa', img : './assets/emojis/heart.png' }
        ];
    }
    getText = (daily) => {
        const message = this.text_img();
        if (daily < 0 || daily >= message.length) { 
            return null;
        } else {
            return message[daily].text;
        }
    }
    getImg = (daily) => {
        const message = this.text_img();
        if (daily < 0 || daily >= message.length) { 
            return null;
        } else {
            return message[daily].img;
        }
    }
    level = (level) => {
        const text = document.querySelector('#level');
        text.textContent = `Level ${level}`;
    }
    levelUp = (level) => {
        const bar = document.querySelector('.exp');
        let newLevel = level + 1;
        this.save.level(newLevel);
        this.level(newLevel);
        bar.style.width = `0rem`;
        this.save.exp(0);
    }
    expBar = (exp) => {
        const container = document.querySelector('.exp-bar');
        const bar = document.createElement('div');
        bar.classList.add('exp');
        bar.style.width = `${exp}rem`;
        container.appendChild(bar);
    }
    updatesBar = (exp) => {
        const bar = document.querySelector('.exp') ;
        bar.style.width = `${exp}rem`;
    }
    fillBar = (targetExp, callback) => {
        let i = 1;
        const animate = () => {
            let fill = this.getExp() + 0.1 * i;
            this.updatesBar(fill);
            if (fill >= targetExp) {
                callback();
            } else {
                i++;
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
    exp = (level) => {
        const targetExp = this.targetExp(level);
        this.fillBar(targetExp, () => {
            this.save.exp(targetExp);
            if (targetExp >= 12) {
                this.levelUp(level);
            }
        });
    }
    targetExp = (level) => {
        const expMap = {
            1 : 6,
            2 : 4,
            3 : 3,
            4 : 2,
            5 : 1.5,
            6 : 1.2
        }
        return this.getExp()+ expMap[level];
    }
    background = (bg) => {
        style.innerHTML = `body {
            background-image: url("./assets/backgrounds/bg_${bg}.jpg");
            background-position: center center;
            background-repeat:  no-repeat;
            background-size: cover;
        }`;
    }
    tasks = (level) => {
        const tasks = [];
        if (level > 1) { tasks.push('bg_1'); }
        if (level > 2) { tasks.push('gift_1'); }
        if (level > 3) { tasks.push('bg_2') }
        if (level > 4) { tasks.push('bg_3','gift_2','game_1'); }
        if (level > 5) { tasks.push('bg_4','bg_5','bg_6','bg_7','bg_8'); }
        Save.saveTasks(tasks);
        return tasks;
    }
    rewards = (rewards,level) => {
        switch(level) {
            case 2:
                rewards.push('bg');
            break;
            case 3:
                rewards.push('gift');
                Game.divGift(rewards);
            break;
            case 4:
                rewards.push('bg');
            break;
            case 5:
                rewards.push('bg');
                rewards.push('gift');
                rewards.push('game');
                Game.divGift(rewards);
            break;
        }
        Save.saveRewards(rewards);
        return rewards;
    }
    emails = (email,level) => {
        switch(level) {
            case 2:
                email += 1;
            break;
            case 3:
                email += 1;
            break;
            case 4:
                email += 1;
            break;
            case 5:
                email += 3;
            break;
        }
        Save.saveEmail(email);
        return email;
    }
    divOptions = (tasks) => {
        if (divDelete() == false) {
            divNew.innerHTML += `
            <div class="options">
                <h2>Opciones</h2>
                <p>Cambiar Background</p>
                <div class="div-backgrounds">
                    <div id="bg" class="bg-0"></div>
                </div>
            </div>`;
            for (let i = 1; i < 9; i++) {
                document.querySelector('.div-backgrounds').innerHTML += `<div id="bg" class="bg-${i}">${unlocked(tasks,`bg_${i}`)}</div>`;
            }
            const style = document.querySelectorAll('style')[0];
            style.innerHTML += `.bg-0 {
                background-color: white;
                border: 2px solid black;
                flex: 0 0 calc(25% - 1rem);
                height: 5rem;
                margin: .5rem;
                width: calc(25% - 1rem);
            }`;
            for (let i = 1; i < 9; i++) {
                style.innerHTML += `.bg-${i} {
                    align-items: center;
                    background-image: url("./assets/backgrounds/bg_${i}.jpg");
                    border: 2px solid black;
                    display: flex;
                    flex: 0 0 calc(25% - 1rem);
                    height: 5rem;
                    justify-content: center;
                    margin: .5rem;
                    width: calc(25% - 1rem);
                }`;
            }
            if (document.querySelector('.div-gift') && document.querySelector('span')) { document.querySelector('.options').style.bottom = '87vh'; }
            else if (document.querySelector('.div-gift')) { document.querySelector('.options').style.bottom = '82vh'; }
            else if (document.querySelector('span')) { document.querySelector('.options').style.bottom = '80vh'; }
        }
    }
    divEmails = (email) => {
        if(divDelete() == false) {
            divNew.innerHTML += `
            <div class="div-emails">
                <h2>Recompensas</h2>
            </div>`;
            for (let i = 0; i < email; i++) {
                document.querySelector('.div-emails').innerHTML += `
                <div>
                    <i id="email" class="fa-solid fa-envelope"></i>
                    <p>Nuevo</p>
                </div>`;
            }
            if (document.querySelector('.div-gift')) { document.querySelector('.div-emails').style.bottom = '82vh'; }
        }
    }
    divGift = (rewards) => {
        divDelete();
        for (let i = 0; i < rewards.length; i++) {
            if (rewards[i] == 'gift') {
                if(document.querySelector('span')) {
                    divNew.innerHTML = `
                    <div class="div-gift">
                        <i id="gift" class="fa-solid fa-gift"></i>
                    </div>
                    <span></span>`;
                    document.querySelector('span').style.bottom = '6rem';
                } else {
                    divNew.innerHTML = `
                    <div class="div-gift">
                        <i id="gift" class="fa-solid fa-gift"></i>
                    </div>`;
                }
            }
        }
    }
}

export class LoadClass {
    level = () => {
        const level = localStorage.getItem('level');
        if (level) {
            return parseInt(level);
        } else {
            return 1;
        }
    }
    exp = () => {
        const exp = localStorage.getItem('exp');
        if (exp) {
            return parseInt(exp);
        } else {
            return 0;
        }
    }
    daily = () => {
        const daily = localStorage.getItem('daily');
        if (daily) {
            return parseInt(daily);
        } else {
            return 0;
        }
    }
    loadTime = () => {
        let today = new Date().getDate(),
        month = new Date().getMonth(),
        yeer = new Date().getFullYear();
        if (localStorage.getItem('day')) {
            (localStorage.getItem('day') < today || localStorage.getItem('month') < month || localStorage.getItem('year') < yeer) ?
            btnRegar.disabled = false : cooldown();
        } else { btnRegar.disabled = false; }
        return today;
    }
    loadBackground = () => {
        let background;
        if (localStorage.getItem('background')) {
            background = localStorage.getItem('background');
        } else { background = 0 };
        return background;
    }
    loadTasks = () => {
        let tasks;
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } else { tasks = [] };
        return tasks;
    }
    loadRewards = () => {
        let rewards;
        if (localStorage.getItem('rewards')) {
            rewards = JSON.parse(localStorage.getItem('rewards'));
        } else { rewards = [] };
        return rewards;
    }
    loadEmail = () => {
        let email;
        if (localStorage.getItem('email')) {
            email = localStorage.getItem('email') * 1;
        } else { email = 0 };
        return email;
    }
    loadGift = () => {
        let gift;
        if (localStorage.getItem('gift')) {
            gift = localStorage.getItem('gift');
        } else { gift = 0 };
        return gift;
    }
}

export class SaveClass {
    level = (level) => {
        localStorage.setItem('level',level);
    }
    exp = (exp) => {
        localStorage.setItem('exp',exp);
    }
    daily = (daily) => {
        localStorage.setItem('daily',daily);
    }
    saveTime = (today,month,year) => {
        localStorage.setItem('day',today);
        localStorage.setItem('month',month);
        localStorage.setItem('year',year);
        btnRegar.disabled = true;
        cooldown();
    }
    saveBackground = (bg) => {
        localStorage.setItem('background',bg);
    }
    saveTasks = (tasks) => {
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    saveRewards = (rewards) => {
        localStorage.setItem('rewards',JSON.stringify(rewards)) 
    }
    saveEmail = (email) => {
        localStorage.setItem('email',email);
    }
    saveGift = (gift) => {
        localStorage.setItem('gift',gift);
    }
}
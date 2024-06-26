// HTML Div Selectors
import { divLevel, divExp, divRegadera, divDrops, divFlower, divMessage, divNew, divVersion } from '../index.js';
// HTML Selectors
import { style, timer, btnOptions, btnGift, btnRegar, btnEmail } from '../index.js';
import { Flower,Game, Load, Save } from '../index.js';
import { cooldown, unlocked, divDelete } from './functions.js';

export class FlowerClass {
    constructor(level) {
        this.createFlower(level);
    }
    createFlower = (level) => {
        divFlower.innerHTML = `<img class="flower" src="./assets/img/flower_grow_${this.flower(level)}.png" alt="Flor">`;
    }
    flower = (level) => {
        let grow;
        switch(level) {
            case 1:
            case 2:
                grow = 1;
            break;
            case 3:
            case 4:
                grow = 2;
            break;
            case 5:
            case 6:
                grow = 3;
            break;
            case 7:
            case 8:
                grow = 4;
            break;
            case 9:
                grow = 5;
            break;
            case 10:
                grow = 6;
            break;
            case 11:
                grow = 7;
            break;
        } return grow;
    }
    wateringCan = (event = true) => {
        // If Event == true ( The flower is being watered )
        // If Event == false ( The flower has already been watered )
        if (event == true) {
            divRegadera.innerHTML = `<img class="regadera" src="./assets/img/regadera.png" alt="Regadera">`;
        } else {
            divDrops.innerHTML = ``;
            divRegadera.children[0].style.animation = "unrotate 1s ease-in-out forwards";
            setTimeout(() => {
                divRegadera.innerHTML = ``;
            }, 1200);
        }
    }
    waterDrops = () => {
        divDrops.innerHTML = `<img class="drops" src="./assets/img/drops.gif" alt="Gotas">`;
    }
    glitters = () => {
        let i = 1;
        const timer = setInterval(() => {
            divDrops.innerHTML += `<img class="glitters-${i}" src="./assets/emojis/brillos.png" alt="Brillos">`;
            i++;
            setTimeout(() => {
                divDrops.children[0].remove();
            }, 400);
            if (i > 4) { clearInterval(timer); }
        }, 200);
    }
    addText = (text) => {
        divMessage.innerHTML = `<p>${ Game.returnText(text,true) }</p>
        <img src="${ Game.returnText(text,false) }" alt="Emoji">`;
        setTimeout(() => {
            divMessage.innerHTML = ``;
        }, 6000);
    }
    water = (text) => {
        this.wateringCan();
        setTimeout(this.waterDrops,1000);
        setTimeout(this.wateringCan,2500,false);
        setTimeout(this.glitters,3800);
        setTimeout(this.addText,5200,text);
    }
}

export class GameClass {
    constructor(version,level,exp,bg,rewards) {
        divVersion.children[0].textContent = `V-${version}`;
        this.divLevel(level,exp);
        this.divExp(level);
        this.background(bg);
        this.divGift(rewards);
    }
    divLevel = (level,exp) => {
        if (exp >= 12) {
            level++; 
            Flower.createFlower(level);
        }
        divLevel.children[0].textContent = `level ${level}`;
        Save.saveLevel(level);
    }
    divExp = (level) => {
        let exp = Load.loadExp();
        if (exp >= 12) {
            setTimeout(() => {
                const time = setInterval(() => {
                    exp = Math.round((exp - 0.3) * 10) / 10;
                    divExp.children[0].style.width = `${exp}rem`;
                    if (exp == 0) {
                        clearInterval(time);
                        Save.saveExp(exp);
                        this.divLevel(level,12);
                    }
                }, 100);
            }, 1000);
        } else { divExp.children[0].style.width = `${exp}rem`; }
    }
    returnExp = (exp,level) => {
        switch (level) {
            case 1:
                // Exp MAX => 2 DAYS.
                exp = exp + 6;
            break;
            case 2:
                // Exp MAX => 3 DAYS.
                exp = exp + 4;
            break;
            case 3:
                // Exp MAX => 4 DAYS.
                exp = exp + 3;
            break;
            case 4:
                // Exp MAX => 6 DAYS.
                exp = exp + 2;
            break;
            case 5:
                // Exp MAX => 8 DAYS.
                exp = exp + 1.5;
            break;
            case 6:
                // Exp MAX => 10 DAYS.
                exp = exp + 1.2;
            break;
        }
        Save.saveExp(exp);
        if (exp >= 12) { return 0 } else { return exp; }
    }
    returnText = (text,event = true) => {
        // If Event == true ( The user requests Text )
        // If Event == false ( The user requests Img )
        let img;
        switch(text) {
            // Nivel 1
            case 0:
                text = 'Te amo mucho Alejandra';
                img = './assets/emojis/heart.png';
            break;
            case 1:
                text = 'Eres mi tiktoker preciosa';
                img = './assets/emojis/cute.png';
            break;
            // Nivel 2
            case 2:
                text = 'Eres lo mejor que me ha pasado en esta vida mi reina';
                img = './assets/emojis/brillos.png';
            break;
            case 3:
                text = 'No quiero que te separes de mi lado, tu eres mi complemento';
                img = './assets/emojis/cute.png';
            break;
            case 4:
                text = '¡Me fascinan tus piecitos!';
                img = './assets/emojis/encanto.png';
            break;
            // Nivel 3
            case 5:
                text = 'Eres super talentosa dibujando';
                img = './assets/emojis/happier.png';
            break;
            case 6:
                text = 'Eres la mas leal del mundo';
                img = './assets/emojis/heart.png';
            break;
            case 7:
                text = 'Eres una en un millon mi amor';
                img = './assets/emojis/brillos.png';
            break;
            case 8:
                text = '¿Quien no quisiera tenerte princesa?';
                img = './assets/emojis/encanto.png';
            break;
            // Nivel 4
            case 9:
                text = 'Me encanta cuando te pones toda cariñosa y tierna conmigo';
                img = './assets/emojis/cute.png';
            break;
            case 10:
                text = 'Ese pircing te queda, ¡UFF!';
                img = './assets/emojis/encanto.png';
            break;
            case 11:
                text = 'Cada que subes fotos con tus amigas las opacas, demasiado hermosa a su lado';
                img = './assets/emojis/monkey.png';
            break;
            case 12:
                text = 'Tu no necesitas ni maquilarte, porque eres preciosa a lo natural';
                img = './assets/emojis/brillos.png';
            break;
            case 13:
                text = 'Necesito psiquiatra, ¡Porque me llevas loquito!';
                img = './assets/emojis/encanto.png';
            break;
            case 14:
                text = 'No sales de mi mente, ni tampoco esos gemidos';
                img = './assets/emojis/nervioso.png';
            break;
            // Nivel 5
            case 15:
                text = 'Tus besos no salen de mi cabeza';
                img = './assets/emojis/cute.png';
            break;
            case 16:
                text = 'Estoy muy orgulloso de ti turrón';
                img = './assets/emojis/heart.png';
            break;
            case 17:
                text = '¿Quién sera cumpleañera dentro de poco?';
                img = './assets/emojis/happier.png';
            break;
            case 18:
                text = 'Algún dia tu y yo viviremos juntos, te lo prometo.';
                img = './assets/emojis/hand.png';
            break;
            case 19:
                text = 'Tienes un enorme corazón, nunca cambies.';
                img = './assets/emojis/cute.png';
            break;
        } if (event == true) { return text; } else { return img; }
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
    loadLevel = () => {
        let level;
        if (localStorage.getItem('level')) {
            level = localStorage.getItem('level') * 1;
        } else { level = 1 };
        return level;
    }
    loadExp = () => {
        let exp;
        if (localStorage.getItem('exp')) {
            exp = localStorage.getItem('exp') * 1;
        } else { exp = 0 };
        return exp;
    }
    loadText = () => {
        let text;
        if (localStorage.getItem('text')) {
            text = localStorage.getItem('text') * 1;
        } else { text = 0 };
        return text;
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
    saveLevel = (level) => {
        localStorage.setItem('level',level);
    }
    saveExp = (exp) => {
        localStorage.setItem('exp',exp);
    }
    saveText = (text) => {
        localStorage.setItem('text',text);
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
import {divFlower,divRegadera,divDrops,divMessage,divVersion,nText,divNew, btnChest} from '../index.js';
import {loadText,textImg,addNew,msEmail,saveTasks} from './functions.js';

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
    constructor(version,bg,newItem) {
        divVersion.querySelector('p').textContent = `V-${version}`
        this.background(bg)
        addNew(newItem);
    }
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
    tasks = (tasks,level) => {
        tasks = [];
        if (level == 2) {
            tasks.push('bg_1');
            tasks.push('gift_1');
        } else if (level == 3) {
            tasks.push('bg_2');
            tasks.push('gift_2');
        }
        saveTasks(tasks);
        return tasks;
    }
    background = (bg) => {
        const style = document.createElement('style');
        document.body.appendChild(style);
        if (bg > 0) {
            style.textContent += `body {
                background-image: url("./assets/backgrounds/bg_${bg}.jpg");
                background-position: center center;
                background-repeat:  no-repeat;
                background-size: cover;
            }`;
        } else {
            switch(bg) {
                case 0:
                    bg = 'white';
                break;
            }
            style.innerHTML += `body {
                background-color: ${bg};
            }`;
        }
    }
    options = (l) => {
        const divChest = document.createElement('div');
        divChest.classList.add('options');
        divChest.innerHTML = `<h2>Opciones</h2>
        <p>Cambiar Background</p>
        <div class="div-backgrounds">
            <div class="bg-0"></div>
            <div class="bg-1"><i class="fa-solid fa-lock"></i></div>
            <div class="bg-2"><i class="fa-solid fa-lock"></i></div>
        </div>`;
        divNew.append(divChest);
        const style = document.querySelector('style');
        style.innerHTML += `.bg-0 {
            background-color: white;
            border: 2px solid black;
            flex: 0 0 calc(25% - 1rem);
            height: 5rem;
            margin: .5rem;
            width: calc(25% - 1rem);
        }`;
        for (let i = 1; i < 3; i++) {
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
    }
    chest = (email) => {
        const divChest = document.createElement('div');
        divChest.classList.add('chest');
        divChest.innerHTML = '<h2>Recompensas</h2>';
        divNew.append(divChest);
        for (let i = 0; i < email; i++) {
            const div = document.createElement('div'),
            font = document.createElement('i'),
            p = document.createElement('p');
            font.id = 'email';
            font.classList.add('fa-solid','fa-envelope');
            p.textContent = 'Nuevo';
            divChest.append(div);
            div.append(font,p);
        }
    }
}
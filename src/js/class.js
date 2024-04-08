import {divFlower,divRegadera,divDrops,divMessage,divVersion,nText} from '../index.js';
import {loadText,textImg} from './functions.js';

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
    constructor(version,bg) {
        divVersion.querySelector('p').textContent = `V-${version}`
        this.background(bg)
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
    background = (bg) => {
        const style = document.createElement('style');
        document.body.appendChild(style);
        if (bg > 0) {
            style.innerHTML = `body {
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
            style.innerHTML = `body {
                background-color: ${bg};
            }`;
        }
    }
}
import {Flower,Game} from './js/class.js';
import {loadLevel,saveLevel,loadExp,saveExp,loadText,saveText,
loadTime,loadNew,addNew,loadTasks,addRewards,loadRewards,
loadEmails,saveEmails,msEmail} from './js/functions.js';
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

export let nText = loadText(), version = '2.0', setTime = new Date(), today = loadTime(),
background = 0, newItem = Boolean(loadNew()), month = new Date().getMonth(), year = new Date().getFullYear();

let level = loadLevel(), exp = loadExp(), email = loadEmails(), tasks = loadTasks(), rewards = loadRewards();
export const flower = new Flower(level),
game = new Game(version,background,newItem);

btnOptions.addEventListener('click',() => {
    if(document.querySelector('.options')) {
        document.querySelector('.options').remove();
    } else {
        if(document.querySelector('.chest')) document.querySelector('.chest').remove();
        game.options();
    }
});

btnRegar.addEventListener('click',() => {
    // saveTime(today,month,year);
    flower.water();
    exp = exp + game.newExp(level);
    saveExp(exp);
    if (exp >= 12) {
        level += 1, exp = 0, newItem = true;
        saveLevel(level);
        addNew(newItem);
        rewards = addRewards(rewards,level);
        email = saveEmails(rewards);
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
});
btnChest.addEventListener('click',() => {
    if(document.querySelector('.chest')) {
        document.querySelector('.chest').remove();
    } else {
        if(document.querySelector('.options')) document.querySelector('.options').remove();
        newItem = false;
        addNew(newItem);
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
    }
});
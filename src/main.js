import Player from './player.js'

const btn = document.getElementById('btn');
const song = document.getElementById('song');
const on = document.getElementById('on');
const off = document.getElementById('off');
const lines = document.getElementsByClassName('lines')
const form = document.getElementById('form-subscription');
const subscribed = document.getElementById('subscribed');
const btnSub = document.getElementById('btn-submit-email');

const newSong = new Player(song);
let sound = true;
let status = true;
let colorsOn;

// newSong.play()

btn.addEventListener('click',() => {
    newSong.play();
    newSong.icon();

    setTimeout(()=>{
        changeStatus();
        changeColor();
    },2500)
})

const esp = document.getElementById('esp');
const eng = document.getElementById('eng');

esp.addEventListener("click",()=>{
    esp.style.borderBottom = 'solid white';
    eng.style.borderBottom = 'transparent solid';
})

eng.addEventListener("click",()=>{
    esp.style.borderBottom = 'transparent solid';
    eng.style.borderBottom = 'solid white';
})

function changeStatus(){
    if(status){
        status = false;
    } else {
        status = true;
    }
}

function changeColor(){

    if(status == false){
        colorsOn = setInterval(getColor(),500)
    } else {
        clearInterval(colorsOn)
        document.getElementById('colors').style.background = 'white';
        lines[0].style.background = '#32D99C';
        lines[1].style.background = '#32D99C';
        lines[2].style.background = '#32D99C';
    }
}

function getColor(){
    let list = ['#29A678','#c64b36','#739ad2','#262626','#FC913A','#C49CDE'];
    let color = 0;

    return function setColor(){
        lines[color].style.background = 'white'
        document.getElementById('colors').style.background = list[color];
        if(color == 2){
            color = 0;
        } else {
            color = color + 1;
        }
    }
}

btnSub.addEventListener('click',()=>{

    alert('hey')
    form.style.display = "none";
    subscribed.style.display = "flex"
})

function example(){
    window.location.reload();
}

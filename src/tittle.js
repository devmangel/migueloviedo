const btnESP = document.getElementById('esp');
const btnENG = document.getElementById('eng')

let sentence = document.getElementById("sentence");


let box = "";
let wordArr = [" Manager ", " Owner "," Analyst "];
let letterIndex = 0;
let wordIndex = 0;
let currWord = wordArr[wordIndex];
let forward = true;

let playTyper = () =>{
    startType = setInterval(typer, 100);
};
let pauseTyper = () =>{
    clearInterval(startType);
};

let typer = () =>{
    if(currWord.length == letterIndex){
        forward = false;
        --letterIndex;
        pauseTyper();
        setTimeout(playTyper, 1000);
    }
    if(letterIndex == -1){
        forward = true;
        ++letterIndex;
        wordIndex = wordIndex == wordArr.length - 1? 0 : ++wordIndex;
       currWord = wordArr[wordIndex];
   
    }
    if(forward){
        box += currWord[letterIndex];
        ++letterIndex;
    }
    else{
        box = currWord.slice(0,letterIndex);
        --letterIndex;
    }
    sentence.innerHTML = box;
}; 

let startType = setInterval(typer, 100); //set typing speed


btnESP.addEventListener('click',()=>{

    btnESP.style.borderBottom = 'solid white';
    btnENG.style.borderBottom = 'none';
})

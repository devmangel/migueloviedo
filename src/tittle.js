
let sentence = document.getElementById("sentence");


let box = "";
let wordArr = [" Analyst "," Manager ", " Associate "];
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


// Email subscribes

function postToGoogle() {

    var field1 = $("#Email").val();

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScW_BaZGwd93RN3T-PkPci5MnSrqDrH8vp0gCXXyENKME3FSg/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.1894811839": field1
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });
    return false;
  }
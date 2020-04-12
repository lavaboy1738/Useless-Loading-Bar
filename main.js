const progress = document.querySelector(".progress");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

progressButtons = [btn1, btn2, btn3]

for(btn of progressButtons){
    btn.addEventListener("click", changeProgress)
}

btn4.addEventListener("click", load)

btn5.addEventListener("click", reset)

function changeProgress(){
    progress.style.width = this.innerText;
}

function reset(){
    progress.style.width = 0;
}

function load(){
    let currentWidth;
    if(progress.style.width){
        currentWidth = parseInt(progress.style.width);
    }else{
        currentWidth = 0;
    }
    const intervalID = setInterval(function(){
        if(currentWidth<=100){
            progress.style.width = currentWidth + "%"
            currentWidth++;
        }else{
            clearInterval(intervalID);
        }
    },60)
}


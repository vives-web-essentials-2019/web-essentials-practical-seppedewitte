const choices = document.querySelectorAll('.choices');
const buttonclicked = document.getElementById('button');
const yourolled = document.getElementById('rolled');
let random = 0;

function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;
    
}
function play(){
    let random = randomNumber();
    yourolled.innerHTML = `
    <p id="rolled">Your rolled: ${random}</p>
    `;
    
    if(random == 1){
        
        choices.innerHTML = `<i id="one" class="fas fa-dice-one"></i>`;
        console.log("TEST");
        
    }
    if(random== 2){
        
        choices.innerHTML = `<i id="two" class="fas fa-dice-two"></i>>`;
        
    }    
    if(random== 3){
        
        choices.innerHTML = `<i id="three" class="fas fa-dice-three"></i>`;
        
    }
    if(random== 4){
        
        choices.innerHTML = `<i id="four" class="fas fa-dice-four"></i>`;
        
    }
    if(random== 5){
        
        choices.innerHTML = `<i id="five" class="fas fa-dice-five"></i>`;
        
    }
    if(random== 6){
        
        choices.innerHTML = `<i id="six" class="fas fa-dice-six"></i>`;
        
    }}
document.getElementById('button').addEventListener("click", play);

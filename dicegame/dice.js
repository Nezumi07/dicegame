
//main structure

const roll = document.getElementById("roll"); 
const score = document.getElementById("score");
let dice = document.getElementById("dice");

let player1 = 0






// music and sound


let got = new Audio("sounds/got.mp3");
const audio = document.getElementById("audio");


roll.addEventListener("click", () => {

    
    roll.textContent = "ROLL";
    let myRoll = Math.ceil(Math.random() *6);
    dice.src = `/images/${myRoll}.png`
    
    
    player1 += myRoll;

    
    score.textContent = (player1 > 10) ? `Keep Rollin!  ${player1}` : `Current Score: ${player1}`;
    
    
    if(myRoll === 1) {

        
        score.textContent = `GAME OVER!`;
        player1 = 0;
        roll.textContent = `Roll Again?`;


    } else {
        if (player1 >= 20){
            score.textContent = `WINNER!!`;
            player1 = 0;
            roll.textContent = `...Play Again?`;
        }
    }
    let element = document.getElementById("disappear");
    element.remove();
    


})

//dice images

// let dice = [
//     { value: 1, img: "Images/1.png"},
//     { value: 2, img: "Images/2.png"},
//     { value: 3, img: "Images/3.png"},
//     { value: 4, img: "Images/4.png"},
//     { value: 5, img: "Images/5.png"},
//     { value: 6, img: "Images/6.png"},
// ];

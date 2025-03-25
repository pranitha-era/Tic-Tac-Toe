let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg");
let turnO = true; // playerO, playerX

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame =() => {
turnO = true;
enableBoxes()
msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        console.log("box clicked");
        if(turnO) {
            box.innerText = "O";
            box.style.color = "#127C56";
            turnO = false; 
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled =true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled =false;
        box.innerText =""
        box.style.backgroundColor = "white";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const draw=() => {
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove("hide");
}
const checkWinner= () => {
    let count=0;
    for(pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="") {
            count++;
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            } else if(count==8) {
                draw()
            }
        }
    }
}

newgameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
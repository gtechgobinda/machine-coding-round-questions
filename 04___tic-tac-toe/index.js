const gameContainer = document.getElementById("game-container");
const reset = document.getElementById("reset");
let hash = {};
let chance = true;
let allFilled=0;

gameContainer.addEventListener("click", function (e) {
  if (e.target.dataset.index) {
    const [row, col] = e.target.dataset.index
      .split("-")
      .map((val) => parseInt(val));

    if (!hash[e.target.dataset.index]) {
      if (chance) {
        hash[e.target.dataset.index] = "X";
        e.target.classList.add("cell-withX");
      } else {
        hash[e.target.dataset.index] = "O";
        e.target.classList.add("cell-withO");
      }
    }
    chance=!chance;
    allFilled++;

    let result=checkWin();
  }
});

function checkWin(){
    //row
    for(let i=0;i<3;i++){
        let set=new Set();
        let player="";
        for(let j=0;j<3;j++){
            
        }
    }
}

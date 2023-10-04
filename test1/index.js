let boxConatiner=document.getElementById("box-container");
let box=document.querySelectorAll(".box");
let queue=[]

function clickOnBox (e){
    let index=e.target.dataset.index;
    if(index !=undefined){
        queue.push(index)
        box[index].classList.add("green-color")
    }
    if(queue.length==7){
        let count=0;
        while(queue.length>0){
            let index=queue.shift();
            count++;
            setTimeout(()=>{
            box[index].classList.remove("green-color");
            },count*1000)
        }
    }
}
boxConatiner.addEventListener("click",clickOnBox)


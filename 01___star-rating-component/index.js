let containerEl=document.getElementById('star-container');
let starEl=document.querySelectorAll(".star");
let filled=0;

containerEl.addEventListener("click",function(e){
    let currClicked=e.target.dataset.index;

    for(let i=0;i<filled;i++){
        starEl[i].classList.remove("star-filled")
        // console.log("i am clicked 1");
    }
    for(let i=0;i<currClicked;i++){
        starEl[i].classList.add("star-filled");
        // console.log("i am clicked 2");
    }
    document.getElementById("count").innerText=`Rating Count: ${currClicked}`
    filled=currClicked
})
containerEl.addEventListener("mouseover",function(e){
    let currClicked=e.target.dataset.index;

    for(let i=0;i<5;i++){
        starEl[i].classList.remove("star-filled")
    }
    for(let i=0;i<currClicked;i++){
        starEl[i].classList.add("star-filled");
    }
})

containerEl.addEventListener("mouseleave",function(e){
    for(let i=0;i<5;i++){
        starEl[i].classList.remove("star-filled")
    }
    for(let i=0;i<filled;i++){
        starEl[i].classList.add("star-filled");
    }
})
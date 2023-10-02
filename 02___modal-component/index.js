let btn=document.getElementById("btn");
let modal=document.getElementById("modal-content");
let close=document.getElementById("close");

function displayBlock (e){
modal.style.display="block";
}

function closeBtn (e){
    modal.style.display="none"
}
btn.addEventListener("click",displayBlock)
close.addEventListener("click",closeBtn)
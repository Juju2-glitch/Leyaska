const open = document.getElementById("abrir");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");


open.addEventListener("click",()=>{
    modal_container.classList.add("show");
    console.log(modal_container)
});


close.addEventListener("click",()=>{
    modal_container.classList.remove("show");
});
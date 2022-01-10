const panel = document.querySelector('.navbar-container')
const exitBtn = document.querySelector('.closeBtn')
const menuBtn = document.querySelector('.menuBtn')
exitBtn.addEventListener('click', ()=>{
    panel.style.transform ="translateX(-1000px)";
})
menuBtn.addEventListener('click', ()=>{
    panel.style.transform= "translateX(0)";
})
    
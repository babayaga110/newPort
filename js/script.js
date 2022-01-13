const panel = document.querySelector('.navbar-container')
const exitBtn = document.querySelector('.closeBtn')
const menuBtn = document.querySelector('.menuBtn')
exitBtn.addEventListener('click', ()=>{
    panel.style.transform ="translateX(-1000px)";
})
menuBtn.addEventListener('click', ()=>{
    panel.style.transform= "translateX(0)";
})

document.getElementById('formBtn').addEventListener('click',setTimeout(function(){
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('textarea').value =''
},3000))

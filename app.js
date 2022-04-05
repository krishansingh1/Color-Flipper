document.body.style.backgroundColor = "#f15025";
document.getElementById('text').textContent='#F15025';

const clickforChange=document.getElementById('clicked');

clickforChange.addEventListener('click',()=>{
    document.body.style.backgroundColor = "red";
    document.getElementById('text').textContent='RED';
})

clickforChange.addEventListener('click',()=>{
    document.body.style.backgroundColor = "rgba(133,122,200)";
    document.getElementById('text').textContent='RGBA(133,122,200)';
})
const colors = ['RED', 'GREEN', 'RGBA(133,122,200)', '#F15025'];

document.body.style.backgroundColor = "#f1f5f8";
document.getElementById('text').textContent = '#F1F5F8';

const clickforChange = document.getElementById('clicked');

clickforChange.addEventListener('click', () => {
    const random = getRandomNumber();

    document.body.style.backgroundColor = colors[random];
    document.getElementById('text').textContent = colors[random];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

console.log(Math.random());
console.log(getRandomNumber());
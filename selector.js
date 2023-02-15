const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const greenButton = document.getElementById('green');
const body = document.body;

const theme = localStorage.getItem('theme');
const isGreen = localStorage.getItem('isGreen');

if (theme) {
    body.classList.add(theme);
    isGreen && body.classList.add('green');
}

darkButton.onclick = () => {
body.classList.replace('light','dark');
localStorage.setItem('theme', 'dark');
};
lightButton.onclick = () => {
body.classList.replace('dark', 'light');
localStorage.setItem('theme', 'light');
};
greenButton.onclick = () => {
if (body.classList.contains('green')){
    body.classList.remove('green');
    greenButton.innerText = 'green';
    localStorage.removeItem('isGreen');
} else{
    body.classList.add('green');
    greenButton.innerText = 'remove green';
    localStorage.setItem('isGreen', true);
}
};
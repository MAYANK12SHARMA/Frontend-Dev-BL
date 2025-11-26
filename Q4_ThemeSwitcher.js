const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const blueBtn = document.getElementById('blueBtn');
const currentTheme = document.getElementById('currentTheme');
const body = document.body;

lightBtn.addEventListener('click', () => {
    setTheme('light');
});

darkBtn.addEventListener('click', () => {
    setTheme('dark');
});

blueBtn.addEventListener('click', () => {
    setTheme('blue');
});

function setTheme(theme) {
    body.classList.remove('light', 'dark', 'blue');
    body.classList.add(theme);
    body.setAttribute('data-theme', theme);
    currentTheme.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
}

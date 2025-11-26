const textArea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const maxLength = 100;

textArea.addEventListener('input', updateCounter);
textArea.addEventListener('keydown', preventExcess);

resetBtn.addEventListener('click', () => {
    textArea.value = '';
    updateCounter();
});

function updateCounter() {
    const currentLength = textArea.value.length;
    const remaining = maxLength - currentLength;

    counter.textContent = `Remaining characters: ${remaining}`;

    counter.classList.remove('normal', 'warning', 'danger');

    if (remaining > 20) {
        counter.classList.add('normal');
    } else if (remaining > 0) {
        counter.classList.add('warning');
    } else {
        counter.classList.add('danger');
    }
}

function preventExcess(e) {
    const currentLength = textArea.value.length;
    if (currentLength >= maxLength && e.key !== 'Backspace' && e.key !== 'Delete' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
    }
}

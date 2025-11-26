const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const nextBtn1 = document.getElementById('nextBtn1');
const nextBtn2 = document.getElementById('nextBtn2');
const backBtn1 = document.getElementById('backBtn1');
const backBtn2 = document.getElementById('backBtn2');
const submitBtn = document.getElementById('submitBtn');

const summary = document.getElementById('summary');

nextBtn1.addEventListener('click', () => {
    if (validateName()) {
        showStep(2);
    }
});

nextBtn2.addEventListener('click', () => {
    if (validateEmail()) {
        showStep(3);
    }
});

backBtn1.addEventListener('click', () => {
    showStep(1);
});

backBtn2.addEventListener('click', () => {
    showStep(2);
});

submitBtn.addEventListener('click', () => {
    if (validatePassword()) {
        showSummary();
    }
});

function showStep(stepNumber) {
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.remove('active');

    if (stepNumber === 1) step1.classList.add('active');
    if (stepNumber === 2) step2.classList.add('active');
    if (stepNumber === 3) step3.classList.add('active');
}

function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        nameError.textContent = 'Name is required';
        return false;
    }
    if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
    }
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    const password = passwordInput.value;
    if (password === '') {
        passwordError.textContent = 'Password is required';
        return false;
    }
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

function showSummary() {
    step3.classList.remove('active');
    document.getElementById('summaryName').textContent = nameInput.value;
    document.getElementById('summaryEmail').textContent = emailInput.value;
    document.getElementById('summaryPassword').textContent = '•'.repeat(passwordInput.value.length);
    summary.style.display = 'block';
}

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');

function validateField(input, regex, errorElement, errorMessage) {
  if (regex.test(input.value)) {
    input.classList.remove('error');
    input.classList.add('valid');
    errorElement.textContent = '';
    return true;
  } else {
    input.classList.remove('valid');
    input.classList.add('error');
    errorElement.textContent = errorMessage;
    return false;
  }
}

nameInput.addEventListener('input', () => {
  validateField(nameInput, nameRegex, nameError, 'Name must contain only alphabets');
});

emailInput.addEventListener('input', () => {
  validateField(emailInput, emailRegex, emailError, 'Invalid email format');
});

phoneInput.addEventListener('input', () => {
  validateField(phoneInput, phoneRegex, phoneError, 'Phone must be exactly 10 digits');
});

passwordInput.addEventListener('input', () => {
  validateField(passwordInput, passwordRegex, passwordError, 'Password must contain 1 uppercase, 1 number, and 1 special character');
});

document.getElementById('studentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isNameValid = validateField(nameInput, nameRegex, nameError, 'Name must contain only alphabets');
  const isEmailValid = validateField(emailInput, emailRegex, emailError, 'Invalid email format');
  const isPhoneValid = validateField(phoneInput, phoneRegex, phoneError, 'Phone must be exactly 10 digits');
  const isPasswordValid = validateField(passwordInput, passwordRegex, passwordError, 'Password must contain 1 uppercase, 1 number, and 1 special character');
  
  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    alert('Registration Successful!');
  }
});

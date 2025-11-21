const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seatsRegex = /^([1-9]|10)$/;

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const seatsInput = document.getElementById('seats');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const seatsError = document.getElementById('seatsError');

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

seatsInput.addEventListener('input', () => {
  validateField(seatsInput, seatsRegex, seatsError, 'Seats must be between 1 and 10');
});

document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isNameValid = validateField(nameInput, nameRegex, nameError, 'Name must contain only alphabets');
  const isEmailValid = validateField(emailInput, emailRegex, emailError, 'Invalid email format');
  const isSeatsValid = validateField(seatsInput, seatsRegex, seatsError, 'Seats must be between 1 and 10');
  
  if (isNameValid && isEmailValid && isSeatsValid) {
    const bookingInfo = {
      name: nameInput.value,
      email: emailInput.value,
      seats: seatsInput.value
    };
    
    document.getElementById('displayName').textContent = bookingInfo.name;
    document.getElementById('displayEmail').textContent = bookingInfo.email;
    document.getElementById('displaySeats').textContent = bookingInfo.seats;
    document.getElementById('ticketDetails').style.display = 'block';
    
    console.log('Booking Info:', bookingInfo);
  }
});

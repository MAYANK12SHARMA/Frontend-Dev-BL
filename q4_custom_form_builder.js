class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.formId = 'dynamicForm';
  }

  buildForm() {
    let formHTML = `<form id="${this.formId}">`;
    
    this.fields.forEach((field, index) => {
      formHTML += `<div class="form-group">`;
      formHTML += `<label for="field${index}">${field.label}:</label>`;
      
      if (field.type === 'textarea') {
        formHTML += `<textarea id="field${index}" name="${field.label}"></textarea>`;
      } else if (field.type === 'select') {
        formHTML += `<select id="field${index}" name="${field.label}">`;
        field.options.forEach(option => {
          formHTML += `<option value="${option}">${option}</option>`;
        });
        formHTML += `</select>`;
      } else {
        formHTML += `<input type="${field.type}" id="field${index}" name="${field.label}">`;
      }
      
      formHTML += `</div>`;
    });
    
    formHTML += `<button type="submit">Submit</button>`;
    formHTML += `</form>`;
    
    document.getElementById('formContainer').innerHTML = formHTML;
    
    document.getElementById(this.formId).addEventListener('submit', (e) => {
      e.preventDefault();
      const data = this.getFormData();
      console.log('Form Data:', data);
      alert('Form submitted! Check console for data.');
    });
  }

  getFormData() {
    const formData = {};
    const form = document.getElementById(this.formId);
    
    this.fields.forEach((field, index) => {
      const input = document.getElementById(`field${index}`);
      formData[field.label] = input.value;
    });
    
    return formData;
  }
}

const formFields = [
  { type: 'text', label: 'Username' },
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
  { type: 'number', label: 'Age' },
  { type: 'select', label: 'Country', options: ['USA', 'India', 'UK', 'Canada'] },
  { type: 'textarea', label: 'Comments' }
];

const form = new FormBuilder(formFields);
form.buildForm();

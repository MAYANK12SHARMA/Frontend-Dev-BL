const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

addBtn.addEventListener('click', addProduct);

productInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addProduct();
    }
});

function addProduct() {
    const productName = productInput.value.trim();
    if (productName === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="product-name">${productName}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    productList.appendChild(li);
    productInput.value = '';
}

productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('li').remove();
    }

    if (e.target.classList.contains('edit-btn')) {
        const li = e.target.closest('li');
        const span = li.querySelector('.product-name');
        const currentText = span.textContent;

        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';

        span.replaceWith(input);
        li.classList.add('edit-mode');
        input.focus();

        input.addEventListener('blur', () => {
            saveEdit(li, input);
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit(li, input);
            }
        });
    }
});

function saveEdit(li, input) {
    const newText = input.value.trim();
    if (newText === '') return;

    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = newText;

    input.replaceWith(span);
    li.classList.remove('edit-mode');
}

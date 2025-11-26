const searchBox = document.getElementById('searchBox');
const table = document.getElementById('studentTable');
const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', filterTable);

function filterTable() {
    const searchTerm = searchBox.value.toLowerCase();
    let visibleCount = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const name = row.cells[0].textContent.toLowerCase();
        const branch = row.cells[1].textContent.toLowerCase();
        const cgpa = row.cells[2].textContent.toLowerCase();

        if (name.includes(searchTerm) || branch.includes(searchTerm) || cgpa.includes(searchTerm)) {
            row.classList.remove('hidden');
            visibleCount++;
        } else {
            row.classList.add('hidden');
        }
    }

    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

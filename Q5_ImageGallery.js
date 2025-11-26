const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalContent = document.getElementById('modalContent');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        modal.classList.add('active');
    }
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

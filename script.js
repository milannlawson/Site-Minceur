function openModal(recipeName) {
    const modalMap = {
        'bowl': 'bowlModal',
        'omelette': 'omelettModal',
        'poisson': 'poissonModal',
        'wrap': 'wrapModal',
        'yaourt': 'yaourt Modal',
        'thon': 'thonModal'
    };
    
    const modal = document.getElementById(modalMap[recipeName]);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(recipeName) {
    const modalMap = {
        'bowl': 'bowlModal',
        'omelette': 'omelettModal',
        'poisson': 'poissonModal',
        'wrap': 'wrapModal',
        'yaourt': 'yaourt Modal',
        'thon': 'thonModal'
    };
    
    const modal = document.getElementById(modalMap[recipeName]);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
});

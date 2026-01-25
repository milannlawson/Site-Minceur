document.addEventListener('DOMContentLoaded', () => {
    const clearBtn = document.getElementById('clearPlanningBtn');
    const inputs = document.querySelectorAll('.planning-input');

    clearBtn.addEventListener('click', () => {
        if (!confirm('Tu veux vraiment vider tout le planning de la semaine ?')) return;
        inputs.forEach(input => {
            if (input.tagName === 'SELECT') {
                input.value = '';
            } else {
                input.value = '';
            }
        });
    });
});

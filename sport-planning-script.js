document.addEventListener('DOMContentLoaded', () => {
    const clearBtn = document.getElementById('clearPlanningBtn');

    // Fonction pour calculer la durée
    function calculateDuration(startInput, endInput, durationEl) {
        const start = startInput.value;
        const end = endInput.value;

        if (!start || !end) {
            durationEl.textContent = '–';
            return;
        }

        const [sh, sm] = start.split(':').map(Number);
        const [eh, em] = end.split(':').map(Number);

        let startMinutes = sh * 60 + sm;
        let endMinutes = eh * 60 + em;

        // Si fin < début, ajoute 24h
        if (endMinutes < startMinutes) {
            endMinutes += 24 * 60;
        }

        const diff = endMinutes - startMinutes;
        
        if (diff <= 0) {
            durationEl.textContent = 'Erreur';
            return;
        }

        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;

        if (hours > 0) {
            durationEl.textContent = `${hours}h${minutes.toString().padStart(2, '0')}`;
        } else {
            durationEl.textContent = `${minutes}'`;
        }
    }

    // Attache les événements à CHAQUE ligne
    const allStartInputs = document.querySelectorAll('.planning-start');
    const allEndInputs = document.querySelectorAll('.planning-end');
    const allDurationEls = document.querySelectorAll('.planning-duration');

    allStartInputs.forEach((startInput, index) => {
        const endInput = allEndInputs[index];
        const durationEl = allDurationEls[index];

        // Écoute les changements ET la saisie en temps réel
        startInput.addEventListener('input', () => calculateDuration(startInput, endInput, durationEl));
        startInput.addEventListener('change', () => calculateDuration(startInput, endInput, durationEl));

        endInput.addEventListener('input', () => calculateDuration(startInput, endInput, durationEl));
        endInput.addEventListener('change', () => calculateDuration(startInput, endInput, durationEl));
    });

    // Bouton vider planning
    clearBtn.addEventListener('click', () => {
        if (!confirm('Vider tout le planning de la semaine ?')) return;
        
        const inputs = document.querySelectorAll('.planning-input');
        const durations = document.querySelectorAll('.planning-duration');
        
        inputs.forEach(input => input.value = '');
        durations.forEach(span => span.textContent = '–');
    });

    // Test au chargement (si données déjà présentes)
    allStartInputs.forEach((startInput, index) => {
        const endInput = allEndInputs[index];
        const durationEl = allDurationEls[index];
        calculateDuration(startInput, endInput, durationEl);
    });
});

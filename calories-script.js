// Données des calories (sera synchronisé avec index.html)
const RECIPES_CALORIES = {
    'smoothie1': 280,
    'bowl': 350,
    'omelett': 200,
    'poisson': 280,
    'wrap': 280,
    'yaourt': 180,
    'thon': 220,
    'cocotte': 240,
    'soupe': 150,
    'pates': 320,
    'gingembre': 310,
    // Ajoute toutes tes recettes ici
};

class CaloriesTracker {
    constructor() {
        this.chart = null;
        this.currentPeriod = 'day';
        this.dailyGoal = 1800;
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.updateDisplay();
        this.updateChart();
    }

    loadData() {
        const data = localStorage.getItem('caloriesData');
        this.data = data ? JSON.parse(data) : {};
        
        // Charger objectif
        const goal = localStorage.getItem('dailyGoal');
        if (goal) this.dailyGoal = parseInt(goal);
        document.getElementById('dailyGoal').value = this.dailyGoal;
    }

    saveData() {
        localStorage.setItem('caloriesData', JSON.stringify(this.data));
        localStorage.setItem('dailyGoal', this.dailyGoal);
    }

    addCalories(data) {
        const todayKey = this.getTodayKey();
        if (!this.data[todayKey]) this.data[todayKey] = [];
        
        this.data[todayKey].push({
            recipeId: data.recipeId,
            recipeName: data.name,
            calories: data.calories,
            time: new Date().toLocaleTimeString('fr-FR'),
            date: new Date().toLocaleDateString('fr-FR')
        });
        
        this.saveData();
        this.updateDisplay();
        this.updateDaysList();
        this.updateChart();
    }
    
    getTodayKey() {
        const today = new Date();
        return today.toISOString().split('T')[0]; // YYYY-MM-DD
    }

    setupEventListeners() {
        // Sélecteur de période
        document.querySelectorAll('.period-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.period-btn.active').classList.remove('active');
                btn.classList.add('active');
                this.currentPeriod = btn.dataset.period;
                this.updateChart();
            });
        });

        // Sauvegarder objectif
        document.getElementById('saveGoal').addEventListener('click', () => {
            this.dailyGoal = parseInt(document.getElementById('dailyGoal').value);
            this.saveData();
            this.updateDisplay();
        });

        // Export PDF
        document.getElementById('exportPDF').addEventListener('click', () => {
            this.exportPDF();
        });

        // Effacer tout
        document.getElementById('clearAll').addEventListener('click', () => {
            if (confirm('Effacer toutes les données ?')) {
                localStorage.removeItem('caloriesData');
                this.data = {};
                this.updateDisplay();
                this.updateChart();
            }
        });

        // Écouter les messages depuis index.html
        window.addEventListener('message', (e) => {
            if (e.data.type === 'addCalories') {
                this.addCalories(e.data.recipeId, e.data.calories);
            }
        });
    }

    updateDisplay() {
        const todayKey = this.getTodayKey();
        const todayTotal = this.data[todayKey] ? 
            this.data[todayKey].reduce((sum, item) => sum + item.calories, 0) : 0;

        document.getElementById('todayCalories').textContent = todayTotal;

        // Calcul semaine/mois
        const weekTotal = this.getPeriodTotal('week');
        const monthTotal = this.getPeriodTotal('month');
        
        document.getElementById('weekCalories').textContent = weekTotal;
        document.getElementById('monthCalories').textContent = monthTotal;
    }
    
    updateDaysList() {
    const list = document.getElementById('daysList');
    list.innerHTML = '';

    const recentDays = Object.keys(this.data)
        .sort((a,b) => new Date(b) - new Date(a))
        .slice(0, 10);

    recentDays.forEach(dateKey => {
        const dayData = this.data[dateKey];
        const total = dayData.reduce((sum, item) => sum + item.totalCalories, 0);
        const date = new Date(dateKey).toLocaleDateString('fr-FR', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });

        const div = document.createElement('div');
        div.className = 'day-item';
        div.innerHTML = `
            <span class="day-date">${date}</span>
            <span class="day-calories">${total.toLocaleString()} kcal</span>
        `;
        list.appendChild(div);
    });
}

    
    getPeriodTotal(period) {
        const now = new Date();
        let total = 0;

        for (let i = 0; i < Object.keys(this.data).length; i++) {
            const dateKey = Object.keys(this.data)[i];
            const date = new Date(dateKey);
            
            let daysDiff;
            if (period === 'week') daysDiff = (now - date) / (1000 * 60 * 60 * 24);
            if (period === 'month') daysDiff = (now.getMonth() - date.getMonth()) + (now.getFullYear() - date.getFullYear()) * 12;

            if (daysDiff <= (period === 'week' ? 7 : 30)) {
                total += this.data[dateKey].reduce((sum, item) => sum + item.calories, 0);
            }
        }

        return total;
    }

    updateChart() {
        const ctx = document.getElementById('caloriesChart').getContext('2d');
        
        // Préparer les données selon la période
        const labels = [];
        const data = [];
        const dates = Object.keys(this.data).sort().reverse().slice(0, 30);

        dates.forEach(dateKey => {
            labels.push(new Date(dateKey).toLocaleDateString('fr-FR', {weekday: 'short'}));
            data.push(this.data[dateKey].reduce((sum, item) => sum + item.calories, 0));
        });

        if (this.chart) this.chart.destroy();

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Calories',
                    data: data,
                    borderColor: '#32a084',
                    backgroundColor: 'rgba(50, 160, 132, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#32a084',
                    pointBorderColor: '#fff',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0,0,0,0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    exportPDF() {
        // Simple export en PDF (tu peux améliorer avec jsPDF)
        const today = new Date().toLocaleDateString();
        const content = `Mes calories - ${today}\n\nAujourd'hui: ${document.getElementById('todayCalories').textContent} kcal\nSemaine: ${document.getElementById('weekCalories').textContent} kcal\nMois: ${document.getElementById('monthCalories').textContent} kcal`;
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `calories-${today}.txt`;
        a.click();
    }
}

// Initialisation
const tracker = new CaloriesTracker();

// Communication avec index.html
window.parent.postMessage({ type: 'trackerReady' }, '*');

var ctx = document.getElementById('usuariosAtivos').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ["Primeiro Trimestre", "Segundo Trimestre", "Terceiro Trimestre", "Quarto Trimestre"],
    datasets: [{
        label: 'Usuários Ativos (em milhões/trimestral)',
        backgroundColor: ['purple', 'blue', 'yellow', 'orange'],
        borderColor: 'black',
        data: [130, 138, 144, 155]
    }]
},

// Configuration options go here
options: {}
});

var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'pie',

// The data for our dataset
data: {
    labels: ['Feminino', 'Masculino', 'Outras'],
    datasets: [{
        label: 'Nível de estresse',
        backgroundColor: ['rgb(255, 99, 132)', 'blue', 'yellow'],
        borderColor: 'rgb(255, 99, 132)',
        data: [1100, 650, 435]
    }]
},

// Configuration options go here
options: {}
});
var ctx = document.getElementById('generos').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'doughnut',

// The data for our dataset
data: {
    labels: ["Pop", "Rock", "Brazilian Pop Music", "Pop rock", "Sertanejo"],
    datasets: [{
        label: 'Generos',
        backgroundColor: ['rgb(255, 99, 132)', 'blue', 'yellow', 'orange'],
        borderColor: 'rgb(255, 99, 132)',
        data: [500, 350, 200, 150, 100]
    }]
},

// Configuration options go here
options: {}
});

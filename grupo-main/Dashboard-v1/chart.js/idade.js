var ctx = document.getElementById('idade').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'bar',

// The data for our dataset
data: {
    labels: ["Usuários com Assinatura", "Usuários sem Assinatura"],
    datasets: [{
        label: ['Usuários Com & Sem Assinatura (em milhões)'],
        backgroundColor: ['orange', 'blue'],
        borderColor: 'black',
        data: [134, 165, 200]
    }]
},
// Configuration options go here
options: {}
});

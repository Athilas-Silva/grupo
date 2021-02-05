var ctx = document.getElementById('chart1').getContext('2d');
        var chart = new Chart(ctx, {
    // The type of chart we want to create
        type: 'horizontalBar',

        // The data for our dataset
        data: {
            labels: ['Blinding Lights', 'Dance Monkey', 'The Box', 'Roses (Imanbek Remix)', "Don't Start Now"],
            datasets: [{
                label: 'Músicas mais ouvidas (em milhões)',
                backgroundColor: ['rgb(255, 99, 132)', 'blue', 'yellow', 'orange'],
                borderColor: 'rgb(255, 99, 255)',
                data: [1600, 1060, 840, 790, 740]
            }]
        },

        // Configuration options go here
        options: {}
    });
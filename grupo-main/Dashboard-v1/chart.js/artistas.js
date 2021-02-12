new Chart(document.getElementById("top_artistas"),{
    "type":"bar",
    "data":{
        "labels":["The Wekend","J Balvin","Drake","Bad Bunny","Juice WRLD"],
        "datasets":[{
            "label":"Artistas Mais Escutados (em milhões/mês)",
            "data":[67,54,50,48,38],
            "fill":false,
            "backgroundColor":[
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)"
            ],
            "borderColor":[
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)"
            ],
            "borderWidth":1
        }]
    },
    "options":{
        "scales":{
            "yAxes":[{
                "ticks":{
                    "beginAtZero":true
                }
            }]
        }
    }
});
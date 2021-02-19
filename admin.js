// gogogogogogogogogogogogo
let myChart = document.getElementById("myChart").getContext("2d");

// Global Options
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = "8";
// Chart.defaults.global.defaultFontColor = "#777";

var testData = ["9:00","10:00","11:00","12:00"];
testData.push("13:00");

let massPopChart = new Chart(myChart, {
    type: "line",
    data: {
<<<<<<< HEAD
        labels: ["10:00", "10:11", "11:00", "12:10", "13:00", "13:10", "14:14", "15:15", "16.16"],
=======
        labels: testData,
>>>>>>> 7aeeeada47d99c4a86322f1d60adbfda3166b23c
        datasets: [{
            backgroundColor: 
                "rgba(248, 205, 205, 0.6)"
            ,
            borderColor: "rgba(194, 201, 214, 0.6)",
            borderCapStyle: "round",
            borderWidth: "5",
            // clip: {left: false, top: false, right: false, bottom: false},
            label: "Population",
            fill: true,
            lineTension: 0.1,
            hoverBackgroundColor: 
                "rgba(194, 201, 214, 0.8)"
            ,
            hoverBorderColor: "green",
            pointBorderColor: 
                "rgba(194, 201, 214, 0.6)"
            ,
            pointBorderWidth: 5,
            pointHitRadius: 5,
            pointHoverBackgroundColor:
                "rgba(248, 205, 205, 0.8)"
            ,
            pointHoverBorderColor: "rgba(194, 201, 214, 0.8)",
            pointHoverBorderWidth: 5,
            pointRadius: 10,
            pointStyle: "circle",
            showLine: true,
            
            data: [20, 10, 30, 20, 10, 20, 30, 40, 39]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks:{
                    // suggestedMin: 0,
                    beginAtZero: true          
                }
            }]
        }
    }
});
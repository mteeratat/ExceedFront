// gogogogogogogogogogogogo
let myChart = document.getElementById("myChart").getContext("2d");

// Global Options
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = "8";
// Chart.defaults.global.defaultFontColor = "#777";

let massPopChart = new Chart(myChart, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "March", "April"],
        datasets: [{
            backgroundColor: [
                "rgba(248, 205, 205, 0.6)"
            ],
            borderColor: "rgba(194, 201, 214, 0.6)",
            borderCapStyle: "round",
            borderWidth: "5",
            clip: {left: 50, top: false, right: -2, bottom: 0},
            label: "Population",
            fill: true,
            lineTension: 0.1,
            hoverBackgroundColor: [
                "rgba(248, 205, 205, 0.8)"
            ],
            hoverBorderColor: "rgba(194, 201, 214, 0.8)",
            order: 0,
            pointBorderColor: [
                "rgba(248, 205, 205, 0.6)"
            ],
            pointBorderWidth: 5,
            pointHitRadius: 5,
            pointHoverBackgroundColor: [
                "rgba(248, 205, 205, 0.8)"
            ],
            pointHoverBorderColor: "rgba(194, 201, 214, 0.8)",
            pointHoverBorderWidth: 5,
            pointRadius: 10,
            pointStyle: "circle",
            showLine: true,
            
            data: [20, 10, 30, 20]
        }]
    }
});
// gogogogogogogogogogogogo
let myChart = document.getElementById("myChart").getContext("2d");

// Global Options
// Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = "8";
Chart.defaults.global.defaultFontColor = "#777";

let massPopChart = new Chart(myChart, {
    type: "bar",
    data: {
        labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
        datasets: [{
            label: "Population",
            data: [
                11111,
                22222,
                33333,
                44444,
                55555,
                66666
            ],
            // backgroundColor: "green",
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 99, 132, 0.6)",
            ],
            bordorWidth: 1,
            bordorColor: "#700",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Largest Cities In Massachusetts",
            fontSize: 25
        },
        legend: {
            display: true,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }

    }
});
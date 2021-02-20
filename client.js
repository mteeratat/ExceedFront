let myChart = document.getElementById("myChart").getContext("2d");

// Global Options
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = "8";
// Chart.defaults.global.defaultFontColor = "#777";

// let massPopChart = new Chart(myChart, {
//     type: "bar",
//     data: {
//         labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
//         datasets: [{
//             label: "Population",
//             data: [
//                 11111,
//                 22222,
//                 33333,
//                 44444,
//                 55555,
//                 66666
//             ],
//             // backgroundColor: "green",
//             backgroundColor: [
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//                 "rgba(75, 192, 192, 0.6)",
//                 "rgba(153, 102, 255, 0.6)",
//                 "rgba(255, 99, 132, 0.6)",
//             ],
//             bordorWidth: 1,
//             bordorColor: "#700",
//             hoverBorderWidth: 3,
//             hoverBorderColor: "#000"
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: "Largest Cities In Massachusetts",
//             fontSize: 25
//         },
//         legend: {
//             display: true,
//             position: "right",
//             labels: {
//                 fontColor: "#000"
//             }
//         },
//         layout: {
//             padding: {
//                 left: 50,
//                 right: 0,
//                 top: 0,
//                 bottom: 0
//             }
//         }

//     }
// });

var testData = ["9:00","10:00","11:00","12:00"];
testData.push("13:00");
var myData = [20, 10, 30, 20, 10, 20, 30, 40, 39];

let massPopChart = new Chart(myChart, {
    type: "line",
    data: {
        labels: testData,
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
            
            data: myData
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks:{
                    // suggestedMin: 0,
                    beginAtZero: true,
                    max: 50   
                }
            }]
        }
    }
});

function login(){
    location.href = "./login-page.html"
}

var dataShop1 = [{
    "firstname": "test",
    "lastname": "sadf",
    "pplnum": "4",
    "tel": "0987654321",
    "date": "19/Feb/2021",
    "time": "17:43:38",
    "hour": "17",
    "store": "1"
}];
var dataShop2 = [{
    "firstname": "perza",
    "lastname": "asds",
    "pplnum": "3",
    "tel": "0987654321",
    "date": "19/Feb/2021",
    "time": "17:21:58",
    "hour": "17",
    "store": "2"
},{
    "firstname": "perza2",
    "lastname": "asds",
    "pplnum": "3",
    "tel": "0987654321",
    "date": "19/Feb/2021",
    "time": "17:21:58",
    "hour": "17",
    "store": "2"
}];
var dataShop3 = [{
    "firstname": "m",
    "lastname": "kuau",
    "pplnum": "1",
    "tel": "0987654332",
    "date": "19/Feb/2021",
    "time": "18:27:26",
    "hour": "18",
    "store": "3"
},{
    "firstname": "m2",
    "lastname": "kuau",
    "pplnum": "1",
    "tel": "0987654332",
    "date": "19/Feb/2021",
    "time": "18:27:26",
    "hour": "18",
    "store": "3"
},{
    "firstname": "m3",
    "lastname": "kuau",
    "pplnum": "1",
    "tel": "0987654332",
    "date": "19/Feb/2021",
    "time": "18:27:26",
    "hour": "18",
    "store": "3"
}];
 
let homeButt = document.getElementById("v-pills-DOORSON-tab");
homeButt.addEventListener("click", () => {
    
    document.getElementById("header").innerText="DOORSon";
    delrow();

    let Tae = document.getElementById("PTae").style.display="initial";
    let To = document.getElementById("PTo").style.display="initial";
    let table = document.getElementById("myTable").style.display="none";
    let card = document.getElementById("numCard").style.display="none";
    let chart = document.getElementById("myChart").style.display="none";
    
    homeButt.style.background="rgb(147, 117, 255)";
    shopName1.style.background="rgb(111, 83, 212)";
    shopName2.style.background="rgb(111, 83, 212)";
    shopName3.style.background="rgb(111, 83, 212)";

    console.log("ดอสั้นครับ");
});

let shopName1 = document.getElementById("v-pills-ร้าน1-tab");
shopName1.addEventListener("click", () => {
    
    document.getElementById("header").innerText="ร้านที่ 1";
    delrow();

    let Tae = document.getElementById("PTae").style.display="none";
    let To = document.getElementById("PTo").style.display="none";
    let table = document.getElementById("myTable").style.display="initial";
    let card = document.getElementById("numCard").style.display="initial";
    let chart = document.getElementById("myChart").style.display="initial";
    
    console.log(dataShop1);
    dataShop1.forEach((x) => {
        addrow(x);
    });
    shopName1.style.background="rgb(147, 117, 255)";
    homeButt.style.background="rgb(111, 83, 212)";
    shopName2.style.background="rgb(111, 83, 212)";
    shopName3.style.background="rgb(111, 83, 212)";
    
    console.log("ร้าน1ครับ");
});

let shopName2 = document.getElementById("v-pills-ร้าน2-tab");
shopName2.addEventListener("click", () => {
    
    document.getElementById("header").innerText="ร้านที่ 2";
    delrow();

    let Tae = document.getElementById("PTae").style.display="none";
    let To = document.getElementById("PTo").style.display="none";
    let table = document.getElementById("myTable").style.display="initial";
    let card = document.getElementById("numCard").style.display="initial";
    let chart = document.getElementById("myChart").style.display="initial";

    console.log(dataShop2);
    dataShop2.forEach((x) => {
        addrow(x);
    });

    shopName2.style.background="rgb(147, 117, 255)";
    homeButt.style.background="rgb(111, 83, 212)";
    shopName1.style.background="rgb(111, 83, 212)";
    shopName3.style.background="rgb(111, 83, 212)";

    console.log("ร้าน2ครับ");
});

let shopName3 = document.getElementById("v-pills-ร้าน3-tab");
shopName3.addEventListener("click", () => {
    
    document.getElementById("header").innerText="ร้านที่ 3";
    delrow();

    let Tae = document.getElementById("PTae").style.display="none";
    let To = document.getElementById("PTo").style.display="none";
    let table = document.getElementById("myTable").style.display="initial";
    let card = document.getElementById("numCard").style.display="initial";
    let chart = document.getElementById("myChart").style.display="initial";

    console.log(dataShop3);
    dataShop3.forEach((x) => {
        addrow(x);
    });

    shopName3.style.background="rgb(147, 117, 255)";
    homeButt.style.background="rgb(111, 83, 212)";
    shopName1.style.background="rgb(111, 83, 212)";
    shopName2.style.background="rgb(111, 83, 212)";

    console.log("ร้าน3ครับ");
});

var i=0;

function addrow(x) {
    var table = document.getElementById("myTable");
    i++;
    var row = table.insertRow(1);
    row.classList.add("myRow");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = x.firstname;
    cell2.innerHTML = x.pplnum;
    cell3.innerHTML = x.time;
    cell4.innerHTML = x.date;
}

function delrow() {
    var table = document.getElementById("myTable");
    document.querySelectorAll('.myRow').forEach(function(a){
        a.remove()
    })
}

//   setInterval(() => {
//     console.log(i);
//     addrow();
//   },5000 );
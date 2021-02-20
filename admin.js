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

// var testData = ["9:00","10:00","11:00","12:00"];
// testData.push("13:00");
// var myData = [20, 10, 30, 20, 10, 20, 30, 40, 39];

// let massPopChart = new Chart(myChart, {
//     type: "line",
//     data: {
//         labels: testData,
//         datasets: [{
//             backgroundColor: 
//                 "rgba(248, 205, 205, 0.6)"
//             ,
//             borderColor: "rgba(194, 201, 214, 0.6)",
//             borderCapStyle: "round",
//             borderWidth: "5",
//             // clip: {left: false, top: false, right: false, bottom: false},
//             label: "Population",
//             fill: true,
//             lineTension: 0.1,
//             hoverBackgroundColor: 
//                 "rgba(194, 201, 214, 0.8)"
//             ,
//             hoverBorderColor: "green",
//             pointBorderColor: 
//                 "rgba(194, 201, 214, 0.6)"
//             ,
//             pointBorderWidth: 5,
//             pointHitRadius: 5,
//             pointHoverBackgroundColor:
//                 "rgba(248, 205, 205, 0.8)"
//             ,
//             pointHoverBorderColor: "rgba(194, 201, 214, 0.8)",
//             pointHoverBorderWidth: 5,
//             pointRadius: 10,
//             pointStyle: "circle",
//             showLine: true,
            
//             data: myData
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks:{
//                     // suggestedMin: 0,
//                     beginAtZero: true,
//                     max: 50   
//                 }
//             }]
//         }
//     }
// });

function logout(){
    location.href = "./client.html"
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
 
var dataShop;

let homeButt = document.getElementById("v-pills-DOORSON-tab");
homeButt.addEventListener("click", () => {
    
    document.getElementById("header").innerText="DOORSon";
    delrow();

    let table = document.getElementById("myTable").style.display="none";
    let card = document.getElementById("numCard").style.display="none";
    let chart = document.getElementById("myChart").style.display="none";
    
    homeButt.style.background="#FF008A";
    shopName1.style.background="rgb(111, 83, 212)";
    shopName2.style.background="rgb(111, 83, 212)";
    shopName3.style.background="rgb(111, 83, 212)";

    console.log("ดอสั้นครับ");
});

let shopName1 = document.getElementById("v-pills-ร้าน1-tab");
shopName1.addEventListener("click", () => {
    
    document.getElementById("header").innerText="ร้านที่ 1";
    delrow();

    let table = document.getElementById("myTable").style.display="initial";
    let card = document.getElementById("numCard").style.display="initial";
    let chart = document.getElementById("myChart").style.display="initial";

    // console.log(dataShop1);
    dataEach(1);
    // console.log(dataEach(1));
    // console.log(datt);
    // datt.forEach((x) => {
    //     addrow(x);
    // });
    shopName1.style.background="#FF008A";
    homeButt.style.background="rgb(111, 83, 212)";
    shopName2.style.background="rgb(111, 83, 212)";
    shopName3.style.background="rgb(111, 83, 212)";
    
    pplnow(0);

    console.log("ร้าน1ครับ");
});

let shopName2 = document.getElementById("v-pills-ร้าน2-tab");
shopName2.addEventListener("click", () => {
    
    document.getElementById("header").innerText="ร้านที่ 2";
    delrow();
    
    let table = document.getElementById("myTable").style.display="initial";
    let card = document.getElementById("numCard").style.display="initial";
    let chart = document.getElementById("myChart").style.display="initial";

    // console.log(dataShop2);
    // dataShop2.forEach((x) => {
    //     addrow(x);
    // });
    dataEach(2);

    shopName2.style.background="#FF008A";
    homeButt.style.background="rgb(111, 83, 212)";
    shopName1.style.background="rgb(111, 83, 212)";
    shopName3.style.background="rgb(111, 83, 212)";

    pplnow(1);

    console.log("ร้าน2ครับ");
});

let shopName3 = document.getElementById("v-pills-ร้าน3-tab");
shopName3.addEventListener("click", () => {
    
    document.getElementById("header").innerText="ร้านที่ 3";
    delrow();

    let table = document.getElementById("myTable").style.display="initial";
    let card = document.getElementById("numCard").style.display="initial";
    let chart = document.getElementById("myChart").style.display="initial";

    // console.log(dataShop3);
    // dataShop3.forEach((x) => {
    //     addrow(x);
    // });
    dataEach(3);

    shopName3.style.background="#FF008A";
    homeButt.style.background="rgb(111, 83, 212)";
    shopName1.style.background="rgb(111, 83, 212)";
    shopName2.style.background="rgb(111, 83, 212)";

    pplnow(2);

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
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = x.firstname;
    cell2.innerHTML = x.lastname;
    cell3.innerHTML = x.pplnum;
    cell4.innerHTML = x.time;
    cell5.innerHTML = x.date;
    cell6.innerHTML = x.tel;
}

function delrow() {
    var table = document.getElementById("myTable");
    document.querySelectorAll('.myRow').forEach(function(a){
        a.remove()
    })
}

let limit = ["20","50","10"];

function pplnow(index){
    let ind = (index+1).toString();
    fetch("http://158.108.182.14:3000/show_n?store="+ind, {
        method: "GET"
    })
    .then((n) => n.json())
    .then((n) => {
        document.getElementById("n").innerText=n.total_users;
    });
    document.getElementById("limit").innerText="/" + limit[index];
}

function dataEach(numStore){
    let num = (numStore).toString();
    let myData =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let myTime =["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
    let sum=0;
    let indexLim = numStore-1
    let lim = Number(limit[indexLim]);
    // let total_user = 0;
    // fetch("http://158.108.182.14:3000/show_n?store="+num, {
    //     method: "GET"
    // })
    // .then((n) => n.json())
    // .then((n) => {
    //     let nn = Number(n.total_users);
    //     myData.push(nn);
    // })

    fetch("http://158.108.182.14:3000/show_admin?store="+num, {
        method: "GET"
    })
    .then((response) => response.json())
    // .then((n) => console.log(n))
    .then((ns) => {
        ns.result.forEach((x) => {
            console.log(x);
            addrow(x);
         
            let n = Number(x.pplnum);
            // sum += n;
            let bababa = x.time;
            let ba = bababa.slice(0,2);
            let b = Number(ba);
            // let baba = ba+":00";
            console.log(b, n);
            myData[b] += n;
           // myData.push(n);
            // myTime.push(baba);

                      
        });
        let massPopChart = new Chart(myChart, {
                type: "line",
                data: {
                    labels: myTime,
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
                        // hoverBackgroundColor: "rgba(194, 201, 214, 0.8)",
                        // hoverBorderColor: "green",
                        pointBorderColor: 
                            "rgba(194, 201, 214, 0.6)"
                        ,
                        pointBorderWidth: 2,
                        pointHitRadius: 2,
                        // pointHoverBackgroundColor: "rgba(248, 205, 205, 0.8)",
                        
                        // pointHoverBorderColor: "rgba(194, 201, 214, 0.8)",
                        // pointHoverBorderWidth: 5,
                        pointRadius: 5,
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
                                max: lim
                            }
                        }]
                    }
                }
            });  
    })
    console.log(myData, myTime);


    
    // .then((ns) => console.log(ns))
    // .catch(err => console.log(err))
    // dat => dat.json();
    // console.log(dat);
    // .catch((error) => console.log("error", error));
}

//   setInterval(() => {
//     console.log(i);
//     addrow();
//   },5000 );
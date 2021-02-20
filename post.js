const cache = [];

function makenewNode(text) {
  newNode = document.createElement("p")
  newNode.innerText = text
  return newNode
}
// app = document.querySelector("#app")
app = document.getElementById("app");


// setInterval(() => {
//   fetch("https://randomuser.me/api/?results=10")
//     .then((data) => data.json())
//     .then((datas) => {
//       datas.forEach((data) => {
//         if (!cache.includes(data.author)) {
//           app.appendChild(makenewNode(data.author));
//           cache.push(data.author);
//         }
//       });
//     });
// }, 5000);

let butt = document.getElementById("test");
butt.addEventListener("click", () => {
  console.log("hello");
  // fetch("http://158.108.182.0:20012/app/admin/exceed_group12/test/602abc24dddf8400071eec35",{
  // fetch("https://randomuser.me/api/?results=10",{
  fetch("http://158.108.182.14:3000/show_n?store=1", {
    method: "GET",
  })
    .then((data) => data.text())
    .then((data) => console.log(data))
    .catch((error) => console.log("error na krub", error));
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  console.log("reset na krub");
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("pplnum").value = "";
  document.getElementById("tel").value = "";
});


function scream(firstname, lastname, pplnum, tel) {
  return new Promise((resolve, reject) => {
    fetch("http://158.108.182.14:50004/check_in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname: firstname, lastname: lastname, pplnum: pplnum, tel: tel }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {resolve(true)})
      .catch((error) => console.log("error", error));
  })
}

// function scream(firstname, lastname, pplnum, tel) {
//   fetch("http://158.108.182.14:50004/data", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ firstname: firstname, lastname: lastname, pplnum: pplnum, tel: tel }),
//   })
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

// เอา function ผูกกับ form ใน html
var limit = 20;
// let total_user=0;

function pplnow(index){
  let ind = (index+1).toString();
  fetch(`http://158.108.182.14:3000/show_n?store=${ind}`, {
      method: "GET"
  })
  .then((n) => n.json())
  .then((ns) => total_user = ns.total_users)
  .then((nss) => {
    console.log(nss);
    let form = document.getElementById("information");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      firstname = form.elements["firstname"].value;
      lastname = form.elements["lastname"].value;
      pplnum = form.elements["pplnum"].value;
      tel = form.elements["tel"].value;
      let pplnumInt = Number(pplnum);
      // pplnow(0, pplnum);
      // var total_users = pplnow(0);
      console.log(nss+pplnumInt)
      if ((nss + pplnumInt) <= limit){
        await scream(firstname, lastname, pplnum, tel);
        // document.location.href = "./submitSuccess.html";
        // console.log("Success")
      }
      else{
        document.getElementById("errormsg").innerHTML = "Invalid username and/or password"
        form.elements["firstname"].value = "";
        form.elements["lastname"].value = "";
        form.elements["pplnum"].value = "";
        form.elements["tel"].value = "";    
      }
    });
  })
  
  
  .catch((error) => console.log("error", error));
}
pplnow(0);
// let form = document.getElementById("information");
// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   firstname = form.elements["firstname"].value;
//   lastname = form.elements["lastname"].value;
//   pplnum = form.elements["pplnum"].value;
//   tel = form.elements["tel"].value;
//   let pplnumInt = Number(pplnum);
//   // pplnow(0, pplnum);
//   // var total_users = pplnow(0);
//   total_user = 0;
//   pplnow(0);
//   console.log(total_user);
//   if ((total_user+pplnumInt) <= limit){
//     // await scream(firstname, lastname, pplnum, tel);
//     // document.location.href = "./submitSuccess.html";
//     console.log("Sucess")
//   }
//   else{
//     document.getElementById("errormsg").innerHTML = "Invalid username and/or password"
//     form.elements["firstname"].value = "";
//     form.elements["lastname"].value = "";
//     form.elements["pplnum"].value = "";
//     form.elements["tel"].value = "";    
//   }
// });





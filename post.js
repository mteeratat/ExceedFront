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
  fetch("https://randomuser.me/api/?results=10",{
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
  .then((data) => data.text())
  .then((data) => console.log(data))
  .catch((error) => console.log("error na krub",error));
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  console.log("reset na krub");
  document.getElementById("firstname").value="";
  document.getElementById("lastname").value="";
  document.getElementById("pplnum").value="";
  document.getElementById("tel").value="";
});



function scream(firstname, lastname, pplnum, tel) {
  fetch("http://158.108.182.0:20012/app/admin/exceed_group12/test/view/1", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstname: firstname, lastname: lastname, pplnum: pplnum, tel: tel }),
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// เอา function ผูกกับ form ใน html
let form = document.getElementById("information");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  firstname = form.elements["firstname"].value;
  lastname = form.elements["lastname"].value;
  pplnum = form.elements["pplnum"].value;
  tel = form.elements["tel"].value;
  scream(firstname, lastname, pplnum, tel);
  form.elements["firstname"].value = "";
  form.elements["lastname"].value = "";
  form.elements["pplnum"].value = "";
  form.elements["tel"].value = "";
  document.location.href = "submitSuccess.html";
});
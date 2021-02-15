// const cache = [];

function makenewNode(text) {
  newNode = document.createElement("p")
  newNode.innerText = text
  return newNode
}
// app = document.querySelector("#app")
app = document.getElementById("app");


// setInterval(() => {
//   fetch("https://backend.cpsk-club.xyz/twitter")
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


function scream(firstname, lastname, pplnum, tel) {
  fetch("https://backend.doorson", {
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
});
function postt() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const pplnum = document.getElementById("pplnum").value;
    const tel = document.getElementById("phone").value;

    fetch("http://158.108.182.14:50004/check_in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname: firstname, lastname: lastname, pplnum: pplnum, tel: tel }),
    })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .then(() => { resolve(true) })
    .catch((error) => console.log("error", error));
    alert("Submit successfully!");
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("pplnum").value = "";
    document.getElementById("phone").value = "";
}

function test() {
    fetch("http://158.108.182.14:50004/data", {method: "GET"})
    .then((data) => data.text())
    .then((data) => console.log(data))
    .catch((error) => console.log("error na krub", error));
}

test();
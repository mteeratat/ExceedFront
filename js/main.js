function postt() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const pplnum = document.getElementById("pplnum").value;
    const tel = document.getElementById("phone").value;
    
    if (firstname == "" || lastname == "" || pplnum == "" || tel == "") {
        alert("Blank input Krubbb!!!");
        return
    }

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
    fetch("http://158.108.182.14:50004/data", { method: "GET" })
    .then((data) => data.text())
    .then((data) => console.log(data))
    .catch((error) => console.log("error na krub", error));
}

var limit = 20;

function check_total(index) {
    let ind = (index+1).toString();
    let total_user=0;
    fetch(`http://158.108.182.14:3000/show_n?store=${ind}`, {
        method: "GET"
    })
    .then((n) => n.json())
    .then((ns) => total_user = ns.total_users)
    .then((nss) => {
        console.log(nss, total_user);
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const pplnum = document.getElementById("pplnum").value;
        const tel = document.getElementById("phone").value;
        let pplnumInt = Number(pplnum);
        console.log(nss+pplnumInt, limit)
        if ((total_user + pplnumInt) <= limit){
            postt();
        }
        else{
            alert("More than limit krubbbb!");
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("pplnum").value = "";
            document.getElementById("phone").value = "";
        }
    })
}
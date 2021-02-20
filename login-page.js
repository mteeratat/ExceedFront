const username_ele = document.getElementById("username")
const password_ele = document.getElementById("password")

function login(){
    var username = username_ele.value
    var password = password_ele.value

    if (username == "admin1" && password == "1234"){
        alert("Login successfully!")
        location.href = "./admin1.html"
    }
    else if (username == "admin2" && password == "12345"){
        alert("Login successfully!")
        location.href = "./admin2.html"
    }
    else if (username == "admin3" && password == "123456"){
        alert("Login successfully!")
        location.href = "./admin3.html"
    }
    else{
        document.getElementById("errormsg").innerHTML = "Invalid username and/or password"
    }
    username_ele.value = ""
    password_ele.value = ""
}
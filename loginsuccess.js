const username_ele = document.getElementById("username");
const password_ele = document.getElementById("password");

function login(){
    var username = username_ele.value;
    var password = password_ele.value;
    console.log(username)
    console.log(password)
    if (username == "admin1" && password == "1234"){
        alert("Login successfully1!")
        location.href = "./admin.html"
    }
    else if (username == "admin2" && password == "12345"){
        alert("Login successfully!")
        location.href = "./admin.html"
    }
    else if (username == "admin3" && password == "123456"){
        alert("Login successfully!")
        location.href = "./admin.html"
    }
    else{
        document.getElementById("errormsg").innerHTML = "Invalid username or password";
    }
    username_ele.value = "";
    password_ele.value = "";
}
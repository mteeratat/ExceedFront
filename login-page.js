const username_ele = document.getElementById("username")
const password_ele = document.getElementById("password")

function login(){
    var username = username_ele.value
    var password = password_ele.value

    if (username == "admin" && password == "1234"){
        alert("Login successfully!")
        location.href = "./post.html"
    } 
    else{
        document.getElementById("errormsg").innerHTML = "Invalid username and/or password"
    }
    username_ele.value = ""
    password_ele.value = ""
}
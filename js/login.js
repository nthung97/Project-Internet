function loginBtn_click()
{
    var username =  document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username == "")
    {
        console.log("Please enter username")
    }
    else if(password == "")
    {
        console.log("Please enter password")
    }
    else{
        if(username == "hung nguyen" && password == "12")
        {
            window.location ="main.html";
        }
        else{
            console.log("wrong input")
        }
    }
}
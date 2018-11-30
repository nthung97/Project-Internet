function signupBtn_click()
{
    var username = document.getElementById("username").value
    var dob = document.getElementById("dob").value
    var password = document.getElementById("password").value
    var confirm_password =  document.getElementById("confirm_password").value
    if(username == "")
    {
        console.log("Please enter username")
    }
    else if(dob == "")
    {
        console.log("Please enter date of birth")
    }
    else if(password == "")
    {
        console.log("Please enter password")
    }
    else if(confirm_password == "")
    {
        console.log("Please confirm password")
    }
    else{
        if(password === confirm_password)
        {
            window.location ="main.html";
        }
        else{
            console.log("confirm password again")
        }
    }
    
}
function sendBtn_click(){
    var sent_msg = document.getElementById("sent_msg");
    var write_msg = document.getElementById("write_msg").value;
    var currentdate = new Date()
    var period = "AM"

    if (currentdate.getHours() >= 12)
    {
      currentdate.setHours(currentdate.getHours() - 12);
      period = "PM"
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    sent_msg.innerHTML +=  '<p>' + write_msg + '</p>'  + '<span class="time_date">' 
                                 + currentdate.getHours() + ":" + currentdate.getMinutes() + " " + period + " |  " 
                                 + monthNames[currentdate.getMonth()] + " " + currentdate.getDay() 
                                 + '</span>'
    document.getElementById("write_msg").value = "";
}

function runScript(e) {
  if (e.keyCode == 13) {
    sendBtn_click()
  }
} 

function changepic_click(){
  var preview = document.querySelector('img'); //selects the query named img
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
      preview.src = reader.result;
  }

  if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
  } else {
      preview.src = "https://ptetutorials.com/images/user-profile.png";
  }
}



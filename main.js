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
}

function runScript(e) {
  if (e.keyCode == 13) {
    document.getElementById("write_msg").value = "";
    sendBtn_click()
  }
}
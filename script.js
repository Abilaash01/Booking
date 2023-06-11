document.getElementById("submit").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var date = document.getElementById("dateInput").value;
    var time = document.getElementById("timeInput").value;
    var stylist = document.getElementById("stylistInput").value;
    var check = document.getElementById("sub");

    var selected = [];
    for (var option of document.getElementById('serviceInput').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    var modalContent = "<p><strong>Name:</strong> " + name + "</p>" +
                       "<p><strong>Email:</strong> " + email + "</p>" +
                       "<p><strong>Date:</strong> " + date + "</p>" +
                       "<p><strong>Time:</strong> " + time + "</p>" +
                       "<p><strong>Stylist:</strong> " + stylist + "</p>" +
                       "<p><strong>Service:</strong> " + selected + "</p>";
    
    if(check.checked) {
        modalContent += "<p>You have selected the option for monthly treatment<p>"
    }
    

    document.querySelector("#modal1 .modal-body").innerHTML = modalContent;
});

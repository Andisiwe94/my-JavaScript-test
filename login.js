
var exampleInputEmail1 = [];
    var exampleInputPassword1 = [];

function ConfirmIdentity() {

    exampleInputEmail1 = document.getElementById('exampleInputEmail1').value;
    exampleInputPassword1 = document.getElementById('exampleInputPassword1').value;
   

    if (exampleInputEmail1 == "") {
        alert("email cannot be empty!!!");
        return;
    }

    if (exampleInputPassword1 == "") {
        alert("password cannot be empty!!!");
        return;
    } 

    if(exampleInputEmail1 == "user@gmail.com" && exampleInputPassword1 == "mypassword") {
     
    window.location.href = "home.html"

    }

    else {
        alert(" email & password are incorrect");
    }
}

   




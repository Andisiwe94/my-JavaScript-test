function ConfirmIdentity() {

    var exampleInputEmail1;
    
 
    exampleInputEmail1 = (document.getElementById('exampleInputEmail1').value);
   

    if (exampleInputEmail1 == "") {
        alert("email cannot be empty!!!");
        return false;
    } else {
        return false;
    }

function ConfirmIdentity2() {

    var exampleInputPassword1;

    exampleInputPassword1 =(document.getElementById('password'));

     if (exampleInputPassword1 == "") {
        alert("password cannot be empty!!!");
        return false;
    } else {
        return false;
    }
}

   
    

    window.location.href = 'home.html'
}


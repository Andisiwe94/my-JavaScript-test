function ConfirmIdentity() {

    var exampleInputEmail1;
    var exampleInputPassword1;
    
 
    exampleInputEmail1 = (document.getElementById('exampleInputEmail1').value);
    exampleInputPassword1 = (document.getElementById('exampleInputPassword1'));
   

    if (exampleInputEmail1 == "") {
        alert("email cannot be empty!!!");
        return false;
    } else {
        return false;
    }

    if (exampleInputPassword1 == "") {
        alert("password cannot be empty!!!");
        return false;
    } else {
        return false;
    }


   
    

    window.location.href = 'home.html'
}


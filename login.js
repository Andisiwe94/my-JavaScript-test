function email() {

    var email;
    var password;
    var res;

    email = (document.getElementById('email').value);
    password = Number(document.getElementById('password').value);
    res = email + password;




    if (email == "") {
        alert("email cannot be empty!!!");
        return;
    }

    if (password == "") {
        alert("password cannot be empty!!!");
        return;


    } document.getElementById('display').innerHTML = res;
}
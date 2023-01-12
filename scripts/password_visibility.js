// var a=document.getElementsByClassName("eye_button");
function visibilitycheck(){
    if(document.getElementById("password_login").type=="password"){
        document.getElementById("password_login").type="text";
        document.getElementById("eye").src="../website/images/icons/eye-slash.svg";
    }
    else{
        document.getElementById("password_login").type="password";
        document.getElementById("eye").src="../website/images/icons/eye.svg";
    }
}
function svisibilitycheck(){
    if(document.getElementById("password_sign").type=="password"){
        document.getElementById("password_sign").type="text";
        document.getElementById("seye").src="../website/images/icons/eye-slash.svg";
    }
    else{
        document.getElementById("password_sign").type="password";
        document.getElementById("seye").src="../website/images/icons/eye.svg";
    }
}
function cvisibilitycheck(){
    if(document.getElementById("password_sign_confirm").type=="password"){
        document.getElementById("password_sign_confirm").type="text";
        document.getElementById("ceye").src="../website/images/icons/eye-slash.svg";
    }
    else{
        document.getElementById("password_sign_confirm").type="password";
        document.getElementById("ceye").src="../website/images/icons/eye.svg";
    }
}
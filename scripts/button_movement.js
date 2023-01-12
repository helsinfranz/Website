var a = document.querySelector('.login_on_popup');
var b = document.querySelector('.login_from_google');
a.addEventListener('mouseover', changeDefOver);
a.addEventListener('mouseout', changeDefOut);
b.addEventListener('mouseover', changeDefOver1);
b.addEventListener('mouseout', changeDefOut1);
function changeDefOver() {
    var a;
    a=document.getElementById('login_img');
    a.classList.add("changed_image");
    document.getElementById('name1').innerHTML="Login";
    // document.getElementById('name1').style.cssText='transition: transform 0.5s ease;transform: translateX(0px);';
    // a.target.classList.toggle("changed_image");
    // e.target.classList.toggle('opacity-toggle');
}

function changeDefOut() {
    var a;
    a=document.getElementById('login_img');
    a.classList.remove("changed_image");
    document.getElementById('name1').innerHTML="";
    // document.getElementById('name1').style.cssText='';
    // e.target.classList.toggle('opacity-toggle');
}

function changeDefOver1() {
    var a;
    a=document.getElementById('google_img');
    a.classList.add("changed_image");
    document.getElementById('name2').innerHTML="Google";
    // document.getElementById('name2').style.cssText='transition: transform 0.5s ease;transform: translateX(-120px);';
}

function changeDefOut1() {
    var a;
    a=document.getElementById('google_img');
    a.classList.remove("changed_image");
    document.getElementById('name2').innerHTML="";
    // document.getElementById('name2').style.cssText='';
}
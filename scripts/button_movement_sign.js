var a = document.querySelector('.sign_on_popup');
var b = document.querySelector('.sign_from_google');
a.addEventListener('mouseover', changeDefOver);
a.addEventListener('mouseout', changeDefOut);
b.addEventListener('mouseover', changeDefOver1);
b.addEventListener('mouseout', changeDefOut1);
function changeDefOver() {
    var a;
    a=document.getElementById('sign_img');
    a.classList.add("changed_image");
    document.getElementById('sname1').innerHTML="Sign up";
    // document.getElementById('sname1').style.cssText='transition: transform 0.5s ease;transform: translateX(-120px);';
    // a.target.classList.toggle("changed_image");
    // e.target.classList.toggle('opacity-toggle');
}

function changeDefOut() {
    var a;
    a=document.getElementById('sign_img');
    a.classList.remove("changed_image");
    document.getElementById('sname1').innerHTML="";
    // document.getElementById('sname1').style.cssText='';
    // e.target.classList.toggle('opacity-toggle');
}

function changeDefOver1() {
    var a;
    a=document.getElementById('sgoogle_img');
    a.classList.add("changed_image");
    document.getElementById('sname2').innerHTML="Google";
    // document.getElementById('sname2').style.cssText='transition: transform 0.5s ease;transform: translateX(-120px);';
}

function changeDefOut1() {
    var a;
    a=document.getElementById('sgoogle_img');
    a.classList.remove("changed_image");
    document.getElementById('sname2').innerHTML="";
    // document.getElementById('sname2').style.cssText='';
}
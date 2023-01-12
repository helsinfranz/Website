// function blur() {
//     $('body').addClass('active-modal');
//     $('.loginpopup').addClass('modal-show');
//     overflow: hidden;
//         var a;
//         a=document.getElementsByClassName("active") 
//         a.style.transition= "0.2s";
//         a.style.-webkit-filter= "blur(2px)";
//         a.style.filter= blur(2px);
//   $('.overlay').on('click', function(){
//     $('body').removeClass('active-modal');
//     $('.box-modal').removeClass('modal-show');
//   })

function blur() {
    // document.querySelectorAll('body >*:not(.loginpopup)')
    //     .forEach(node => node.style.filter = "blur(1px)");
    // document.querySelectorAll('body')
    //     .forEach(node => node.style.overflow = "hidden");
    document.querySelectorAll('body >*:not(.loginpopup,.signuppopup)')
        .forEach(node => node.style.cssText = 'pointer-events : none;filter : blur(2px);');
    document.getElementsByTagName('body')[0].style.transition = '0.2s';
    document.getElementsByTagName('body')[0].style.margin = '-3px';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    // document.getElementsByClassName('loginpopup').style.filter = 'none';
}

function blurcut() {
    // document.querySelectorAll('body >*:not(.loginpopup)')
    //     .forEach(node => node.style.filter = "none");
    // document.querySelectorAll('body')
    //     .forEach(node => node.style.overflow = "");
    document.querySelectorAll('body >*:not(.loginpopup,.signuppopup)')
        .forEach(node => node.style.cssText = '');
    document.getElementsByTagName('body')[0].style = 'none';
    // document.getElementsByTagName('body')[0].style.margin = '';
    // document.getElementsByTagName('body')[0].style.overflow = '';
}

function displayblock(c){
    for (var i = 0; i < c.length; i += 1) {
        c[i].style.display = 'block';
    }
}
function displaynone(c){
    for (var i = 0; i < c.length; i += 1) {
        c[i].style.display = 'none';
    }
}

function loginshow() {
    displayblock(document.getElementsByClassName('loginpopup'));
    // for (var i = 0; i < a.length; i += 1) {
    //     a[i].style.display = 'block';
    // }
    blur();
}
function signupshow() {
    displayblock(document.getElementsByClassName('signuppopup'));
    blur();
}
function loginhide() {
    displaynone(document.getElementsByClassName('loginpopup'));
    blurcut();
}
function signuphide() {
    displaynone(document.getElementsByClassName('signuppopup'));
    blurcut();
}

function Create_Account(){
    loginhide();
    signupshow();
}
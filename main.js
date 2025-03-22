// ===========> AboutMe <===========
var taplinks = document.getElementsByClassName("tap-link");
var tapcontents = document.getElementsByClassName("tap-contents")

function opentap (tapname){
    for(taplink of taplinks){
        taplink.classList.remove("active-link")
    }
    event.currentTarget.classList.add("active-link")
    for(tapcontent of tapcontents){
        tapcontent.classList.remove("active-tap")
    }
    document.getElementById(tapname).classList.add("active-tap")
}
// ===========> StickyMenu <============

window.addEventListener("scroll", function(){
    var headerTop = this.document.querySelector(".header-top");
    headerTop.classList.toggle("sticky", window.scrollY)
})

// var tapMenus = document.getElementsByClassName("tap-menu");

// function isActive (){
//     for(tapMenu of tapMenus){
//         tapMenu.classList.remove("isActive")
//     }
//     event.currentTarget.classList.add("isActive")
// }



// ===============> Side-Menu <=====================
const showMenu = ()=>{
    let sideMenu = document.getElementById("isShow");

    sideMenu.classList.toggle("show-side-menu")
}
 
const isShowDraw = ()=>{
    let popDraw = document.querySelector(".pop-draw");

    popDraw.classList.toggle("isPop-draw")
}

// ================> Contact <================
const form = document.querySelector('form')
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mommengke01@gmail.com",
        Password : "E7B3EB73C4950F5A21851C49315D696C33FA",
        To : 'mommengke01@gmail.com',
        From : "mommengke01@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
})
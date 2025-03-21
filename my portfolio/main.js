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

const showMenu = ()=>{
    let sideMenu = document.getElementById("isShow");

    sideMenu.classList.toggle("show-side-menu")
}
 
const isShowDraw = ()=>{
    let popDraw = document.querySelector(".pop-draw");

    popDraw.classList.toggle("isPop-draw")
}
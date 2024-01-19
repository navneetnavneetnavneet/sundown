const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function animationPage4(){
    var fixed = document.querySelector("#fixed-image");

    document.querySelector(".elem-container")
    .addEventListener("mouseenter", function(){
        fixed.style.display = "block";
    })

    document.querySelector(".elem-container")
    .addEventListener("mouseleave", function(){
        fixed.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            var image = elem.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}
animationPage4();

setTimeout(function(){  
    document.querySelector("#loader").style.top = "-100%";
}, 4000)

var fullscreen = document.querySelector("#full-screen");
var menu = document.querySelector("#menu")
menu.addEventListener("click", function(){
    fullscreen.style.top = "0%";
    // document.querySelector("#nav img").style.opacity = 0;
})
//Swipe Animation

var secondPage = document.getElementById('upperpage');
var ham1 = new Hammer(secondPage);
ham1.on('pandown', function(event) {


    gsap.to('.second-page',{
        duration: 0.2,
        opacity : 1,
        pointerEvents: "all",
    })
    
});

///////////////////////////////

var mainPage = document.getElementById('secondpage');
var ham2 = new Hammer(mainPage);
ham2.on('panup', function(event) {


    gsap.to('.second-page',{
        duration: 0.3,
        opacity : 0,
        pointerEvents: "none",
    })
});


//Personal password

function personalPassword() {

    gsap.to(".personal-details-password",{
        y: "-47vh",
        duration : 1,
        ease: Power4.easeOut,
    })
}

function personalPasswordClose() {

    gsap.to(".personal-details-password",{
        y: "0vh",
        duration : 1,
        ease: Power4.easeOut,
        pointerEvents : "none"
    })
}
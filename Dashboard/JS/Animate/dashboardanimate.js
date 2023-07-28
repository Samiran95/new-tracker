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
        duration : 0.7,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 1
    })

    gsap.to(".second-page",{
        filter : "blur(30px)",
        duration : 0.5
    })

    gsap.to(".personal-details-outside",{
        duration : 1,
        y: "-85vh",
        ease: Back.easeOut.config(0.5),
    })



}

function personalPasswordClose() {

    gsap.to(".personal-details-password",{
        y: "0vh",
        duration : 0.7,
        ease: Power4.easeOut,
        pointerEvents : "none",
        zIndex : 0
    })

    gsap.to(".second-page",{
        filter : "blur(0px)",
        duration : 0.7
    })

    gsap.to(".personal-details-outside",{
        duration : 0.5,
        y: "0vh",
        ease: Power3.easeIn,
    })

}


/////////////////////////////////

//Card password

function cardPassword() {

    gsap.to(".card-details-password",{
        y: "-47vh",
        duration : 0.7,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 1,
    })

    gsap.to(".second-page",{
        filter : "blur(30px)",
        duration : 0.5
    })

    gsap.to(".card-details-outside",{
        duration : 1,
        y: "-85vh",
        ease: Back.easeOut.config(0.5),
    })


}

function cardPasswordClose() {

    gsap.to(".card-details-password",{
        y: "0vh",
        duration : 0.7,
        ease: Power4.easeOut,
        pointerEvents : "none",
        zIndex : 0,
    })

    gsap.to(".second-page",{
        filter : "blur(0px)",
        duration : 0.7
    })

    gsap.to(".card-details-outside",{
        duration : 0.5,
        y: "0vh",
        ease: Power3.easeIn,
    })

}

/////////////////////////////////
gsap.to(".transactions",{
    y: "-44vh",
    duration : 0.7,
    ease: Power4.easeOut,
    pointerEvents : "all",
    zIndex : 1
})

function tripAction() {
    gsap.to(".trips-back-page",{
        opacity : 1,
        pointerEvents : "all",
        duration : 0.3
    })

    gsap.from(".trips-expenses",{
        delay : 0.2,
        scale : 0.90,
        duration : 0.7,
        opacity: 0,
        ease: Back.easeOut.config(3)
    })

    gsap.from(".trips-investments",{
        delay : 0.3,
        scale : 0.90,
        duration : 0.7,
        opacity: 0,
        ease: Back.easeOut.config(3)
    })

    gsap.from(".trips-history",{
        delay : 0.3,
        scale : 0.90,
        duration : 0.7,
        opacity: 0,
        ease: Back.easeOut.config(3)
    })


    gsap.from(".trips-trends",{
        delay : 0.4,
        scale : 0.90,
        duration : 0.7,
        opacity: 0,
        ease: Back.easeOut.config(3)
    })


    gsap.from(".trips-analytics",{
        delay : 0.5,
        scale : 0.90,
        duration : 0.7,
        opacity: 0,
        ease: Back.easeOut.config(3)
    })



}
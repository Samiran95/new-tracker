function addCards() {
    
    gsap.to(".entry-form",{
    y: "-80vh",
    duration : 1,
    ease: Power4.easeOut,
    pointerEvents : "all",
    zIndex : 1
})

gsap.to(".upper",{
    filter : "blur(30px)",
    duration : 0.8

})

gsap.to(".middle",{
    filter : "blur(30px)",
    duration : 0.8

})

gsap.to(".lower",{
    filter : "blur(30px)",
    duration : 0.8

})

gsap.to(".lower",{
    filter : "blur(30px)",
    duration : 0.8

})

gsap.to(".entry-form-words",{
    delay : 0.1,
    y: "-92vh",
    duration : 1,
    ease: Power4.easeOut,
    pointerEvents : "all"
})

}
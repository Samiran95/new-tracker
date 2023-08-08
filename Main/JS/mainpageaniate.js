gsap.from("body",{
    scale : 0.95,
    duration: 0.3,
    opacity : 0,
})


//Transaction Pop Up /////////
function transactionPop() {
gsap.to(".transactions",{
    y: "-44vh",
    duration : 0.7,
    ease: Power4.easeOut,
    pointerEvents : "all",
    zIndex : 1
})

gsap.to(".upper",{
    filter : "blur(30px)",
    duration : 0.7,
})

gsap.to(".lower",{
    filter : "blur(30px)",
    duration : 0.7,
})

}

//////////// /////////

//Category Pop Up /////////
function expenseCategoryPop() {
    gsap.to(".expenses-types",{
        y: "-77vh",
        duration : 1,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 1
    })

    gsap.to(".red-container",{
        duration : 0.7,
        opacity : 1,
        pointerEvents: "all",
    })

    
    gsap.to(".upper",{
        duration : 0.7,
        opacity : 0,
        pointerEvents: "none",
    })

    gsap.to(".lower",{
        duration : 0.7,
        opacity : 0,
        pointerEvents: "none",
    })

    gsap.to(".category-select-word",{
        delay : 0.05,
        duration : 1.3,
        y: "-89vh",
        ease: Power4.easeOut,
    })
    
    
    }
    
    //////////// /////////

//Necessitt form Pop Up /////////
function necessityForm() {
    gsap.to(".necessity-form",{
        y: "-72vh",
        duration : 1,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 10
    })

    gsap.to(".expenses-types",{
        scale : 0.92,
        duration : 0.4
    })

    gsap.to(".necessity-small-container",{
        delay : 0.05,
        duration : 1.3,
        y: "-91vh",
        ease: Power4.easeOut,
    })

    gsap.to(".category-select-word",{
        duration : 2.5,
        y: "0vh",
    })
    

    }
    
    //////////// /////////

    //Wants form Pop Up /////////
function wantsForm() {
    gsap.to(".wants-form",{
        y: "-72vh",
        duration : 1,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 10
    })

    gsap.to(".expenses-types",{
        scale : 0.92,
        duration : 0.4
    })

    gsap.to(".wants-small-container",{
        delay : 0.05,
        duration : 1.3,
        y: "-91vh",
        ease: Power4.easeOut,
    })

    gsap.to(".category-select-word",{
        duration : 2.5,
        y: "0vh",
    })
    

    }
    
    //////////// /////////

    //Others form Pop Up /////////
function othersForm() {
    gsap.to(".others-form",{
        y: "-72vh",
        duration : 1,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 1,
    })

    gsap.to(".expenses-types",{
        scale : 0.92,
        duration : 0.4
    })

    gsap.to(".others-small-container",{
        delay : 0.05,
        duration : 1.3,
        y: "-91vh",
        ease: Power4.easeOut,
    })

    gsap.to(".category-select-word",{
        duration : 2.5,
        y: "0vh",
    })
    

    }
    
    //////////// /////////

    //Necessitt form Pop Up /////////
function incomeForm() {
    gsap.to(".income-form",{
        y: "-72vh",
        duration : 1,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 10
    })

    gsap.to(".income-small-container",{
        delay : 0.05,
        duration : 1.3,
        y: "-91vh",
        ease: Power4.easeOut,
    })

    gsap.to(".green-container",{
        duration : 0.7,
        opacity : 1,
        pointerEvents: "all",
    })

    
    gsap.to(".upper",{
        duration : 0.7,
        opacity : 0,
        pointerEvents: "none",
    })

    gsap.to(".lower",{
        duration : 0.7,
        opacity : 0,
        pointerEvents: "none",
    })

    
    }
    
gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360
})
gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
    borderRadius: "50%",
    // boxShadow: "5px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 100%",
        end: "top 0%",
        scrub: 3
    }
})
gsap.from("#page3 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: -360,
    borderRadius: "50%",
    // boxShadow: "5px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        markers: true,
        start: "top 100%",
        end: "top 0%",
        scrub: 3
    }
})

gsap.from("#page1 h1", {
    // scale: 0,
    opacity: 0,
    x: -5,
    duration: 1,
    delay: 1,

    // y: -10,

})


gsap.from("#page4 h2", {
    opacity: 0,
    y: 2,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#page4 h2",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 0%",
        scrub: 3
    }
})


gsap.to("#page5 h3", {
    transform: "translateX(-250%)",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})
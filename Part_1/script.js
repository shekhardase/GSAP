// gsap.to("#box1", {
//     x: 1000,
//     backgroundColor: "white",
//     duration: 3,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     repeat: -1,
//     yoyo: true

// })

// gsap.to("#box2",
//     {
//         x: 1000,
//         backgroundColor: "white",
//         duration: 3,
//         delay: 1,
//         rotate: 360,
//         borderRadius: "50%",
//         repeat: -1,
//         yoyo: true
//     })


// gsap.from("h1", {
//     opacity: 0,
//     duration: 2,
//     y: 30,
//     delay: 1,
//     stagger: -0.5
// })
// // to : used to animate from intial to final position of element
// // from : used to animate final to intial position of element 


var tl = gsap.timeline();

tl.from(".logo", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
})

tl.from("li", {
    y: -2,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    // stagger: 0.3,/
    scale:2

})
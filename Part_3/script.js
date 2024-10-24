var intialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`


var string = document.querySelector("#string")
string.addEventListener("mousemove", function (segs) {
    intialPath = `M 10 100 Q 500  ${segs.y} 990 100`

    gsap.to("svg path", {
        attr: { d: intialPath },
        duration: 0.3,
        ease: "power3.out"
    });
})

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.8,
        ease: "elastic.out(1,0.2)"
    })

})



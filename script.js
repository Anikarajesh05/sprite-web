var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#sprite",{
    top: "120%",
    left: "0%"
}, 'lem')
tl.to("#lem-cut",{
    top:"160%",
    left: "23%"
}, 'lem')
tl.to("#lem",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'lem')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'lem')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'lem')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    width:"15%",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#fanta",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#lem-cut",{
    width:"25%",
    left: "37%",
    top: "200%"
}, 'ca')
tl2.to("#sprite",{
    width:"15%",
    top: "210%",
    left: "42%",
}, 'ca')

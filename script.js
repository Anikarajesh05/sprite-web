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

tl2.fromTo(".lemon1",
    {rotate:"90deg", top:"-30%", left:"50%"},   // initial guess
    {rotate:"0deg", top:"-30%", left:"50%"},
    'ca'
);
tl2.fromTo("#pepsi",
    {rotate:"90deg", top:"-15%", left:"50%"},   // initial guess
    {rotate:"0deg", top:"-15%", left:"50%"},
    'ca'
);

tl2.from(".lemon2",
    {rotate:"90deg", top:"-20%", right:"50%"},   // initial guess
    {rotate:"0deg", top:"20%", right:"50%"},
 'ca')
tl2.fromTo("#fanta",
    {rotate:"90deg", top:"-10%", right:"50%"},   
    {rotate:"0deg", top:"-10%", right:"50%"},
    'ca'
);

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

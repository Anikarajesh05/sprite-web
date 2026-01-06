let mm = gsap.matchMedia();


mm.add("(min-width: 1024px)", () => {

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true
    }
  });

  tl.to("#sprite",{ top:"120%", left:"0%" }, "lem")
    .to("#lem-cut",{ top:"160%", left:"23%" }, "lem")
    .to("#lem",{ width:"15%", top:"160%", right:"10%" }, "lem")
    .to("#leaf",{ top:"110%", rotate:130, left:"70%" }, "lem")
    .to("#leaf2",{ top:"110%", rotate:130, left:"0%" }, "lem");

  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger: ".three",
      start: "0% 95%",
      end: "20% 50%",
      scrub: true
    }
  });

  tl2.fromTo(".lemon1",
    { rotate:90, top:"-30%", left:"50%" },
    { rotate:0,  top:"-30%", left:"50%" },
    "ca"
  )
  .fromTo("#pepsi",
    { rotate:90, top:"-15%", left:"50%" },
    { rotate:0,  top:"-15%", left:"50%" },
    "ca"
  )
  .fromTo(".lemon2",
    { rotate:90, top:"-20%", right:"50%" },
    { rotate:0,  top:"-20%",  right:"50%" },
    "ca"
  )
  .fromTo("#fanta",
    { rotate:90, top:"-10%", right:"50%" },
    { rotate:0,  top:"-10%", right:"50%" },
    "ca"
  )
  .to("#lem-cut",{ width:"25%", left:"37%", top:"200%" }, "ca")
  .to("#sprite",{ width:"15%", top:"210%", left:"42%" }, "ca");

});



mm.add("(max-width: 768px)", () => {

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".two",
      start: "0% 95%",
      end: "80% 60%",
      scrub: true
    }
  });

  tl.to("#sprite",{ top:"140%", left:"10%" }, "lem")
    .to("#lem-cut",{ top:"180%", left:"20%" }, "lem")
    .to("#lem",{ width:"25%", top:"180%", right:"5%" }, "lem")
    .to("#leaf",{ top:"130%", rotate:130, left:"60%" }, "lem")
    .to("#leaf2",{ top:"130%", rotate:130, left:"-10%" }, "lem");

  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger: ".three",
      start: "0% 95%",
      end: "30% 60%",
      scrub: true
    }
  });

  tl2.fromTo(".lemon1",
    { rotate:90, top:"48%", left:"45%" },
    { rotate:0,  top:"48%", left:"45%" },
    "ca"
  )
  .fromTo("#pepsi",
    { rotate:90, top:"52%", left:"45%" },
    { rotate:0,  top:"52%", left:"45%" },
    "ca"
  )
  .fromTo(".lemon2",
    { rotate:90, top:"50%", right:"45%" },
    { rotate:0,  top:"50%",  right:"45%" },
    "ca"
  )
  .fromTo("#fanta",
    { rotate:90, top:"54%", right:"45%" },
    { rotate:0,  top:"54%", right:"45%" },
    "ca"
  )
  .to("#lem-cut",{ width:"25%", left:"37%", top:"254%" }, "ca")
  .to("#sprite",{ width:"16%", top:"256%", left:"42%" }, "ca");

});

function section1Animation() {
  const tl = gsap.timeline();

  tl.from("nav #logo,nav .nav-menu h4,nav .nav-menu button ", {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  });

  tl.from(" .hero #left h1, .hero #left p, .hero #left button", {
    xPercent: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  tl.from(
    " .hero #right",
    {
      opacity: 0,
      duration: 1.5,
    },
    "<" // to give delay in the timeline
  );
  tl.from(
    "#company-logo img",
    {
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "<"
  );
}
section1Animation();
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",

    start: "top 50%",
    end: "top 0",
    scrub: 3,
  },
});

tl.from(".services h1", {
  xPercent: -50,
  opacity: 0,
});
tl.from(
  ".services p",
  {
    xPercent: 50,
    opacity: 0,
    duration: 1,
  },
  "-=1"
);
tl.from(
  ".services-card .card",
  {
    scale: 0,
  },
  "<"
);
tl.from(".card #left,.card #right", { opacity: 0, scale: 0 });

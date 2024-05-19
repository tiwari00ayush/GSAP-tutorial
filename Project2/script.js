const menuBtn = document.querySelector(".nav .menu-btn");
const closeBtn = document.querySelector(".navlinks .close");
menuBtn.addEventListener("click", () => {
  console.log("clicked");
  const tl = gsap.timeline();
  tl.to(".main .navlinks", {
    transform: "translateX(0%)",
    duration: 0.5,
  });
  tl.to(
    ".navlinks h4",
    {
      stagger: 0.2,
      transform: "translateX(0%)",
    },
    "<"
  );
});
closeBtn.addEventListener("click", () => {
  console.log("clicked");
  const tl = gsap.timeline();
  tl.to(".navlinks h4", {
    stagger: 0.2,
    transform: "translateX(100%)",
  });
  tl.to(".main .navlinks", {
    transform: "translateX(100%)",
    duration: 0.5,
  });
});

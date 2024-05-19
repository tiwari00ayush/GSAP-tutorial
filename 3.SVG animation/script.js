const string = document.querySelector("#string");
const finalPath = `M 10 250 Q 600 250 1150 250`;
string.addEventListener("mousemove", (e) => {
  console.log(e.y);
  const path = `M 10 250 Q ${e.x} ${e.y} 1150 250`;
  gsap.to("svg path", {
    duration: 0.5,
    ease: "power3.out",
    attr: {
      d: path,
    },
  });
});
string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    ease: "elastic.out(1,0.1",
    duration: 1.5,
    attr: {
      d: finalPath,
    },
  });
});

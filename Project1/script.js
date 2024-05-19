const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#image");

body.addEventListener("mousemove", (e) => {
  console.log("move");

  gsap.to("#cursor", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.6,
    ease: "back.out",
  });
});
image.addEventListener("mouseenter", () => {
  gsap.to("#cursor", {
    scale: 4,
    backgroundColor: "#ffffff8a",
  });
});
image.addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    scale: 1,
    duration: 0.3,
    backgroundColor: "lightblue",
  });
});

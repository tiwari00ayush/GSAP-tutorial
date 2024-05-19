const left = document.querySelector(".left");

window.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    // up
    gsap.to("#marque", {
      transform: "translateX(200%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to("#marque i", {
      rotate: 360,
    });
  }
  if (e.deltaY > 0) {
    gsap.to("#marque", {
      transform: "translateX(-200%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    gsap.to("#marque i", {
      rotate: 180,
    });
  }
});

// same like css to target any element inside gsap
// gsap.to("#box", {
//   x: 1000, // move 1000px in x direction
//   duration: 2,
//   delay: 1,
//   height: "400px",
//   width: "400px",
//   backgroundColor: "blue",
//   borderRadius: "50%",
// }); // to moves the element from current position to the "to" position
// gsap.from("#circle", {
//   y: 150, // move 1000px in x direction
//   duration: 2,
//   delay: 1,
//   scale: 0.5,
// }); // from moves the element "from" position defined under this to the current position

// gsap.from(".content h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: 0.4, //  to create a delay between the start times of animations applied to multiple elements
//   //   repeat: -1, infinite repeat
//   //   yoyo: true, // rewind
// });

const tl = gsap.timeline();
tl.from(".nav h2", {
  opacity: 0,
  y: -10,
  duration: 0.77,
  delay: 0.5,
});
tl.from(".nav .part2 h4", {
  opacity: 0,
  y: -10,
  duration: 0.4,

  stagger: 0.3,
});

tl.from(".hero p", {
  opacity: 0,
  y: 20,
  duration: 1,
});
tl.from(".hero h1", {
  opacity: 0,
  y: 40,
  duration: 1.5,
});

// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });

// //  when to trigger the animation of page2, because there is a possiblity
// // when the user will come to that part
// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,

//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%", // trigger point
//     end: "top 30%",
//     scrub: 2,
//     pin: true, // element pin with the scroll
//   },
// });
// gsap.from("#page3 h1", {
//   opacity: 0,
//   y: 30,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page3 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%", // trigger point
//     end: "top 30%",
//     scrub: 2,
//   },
// });
// gsap.from("#page3 h2", {
//   opacity: 0,
//   y: 30,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page3 h2",
//     scroller: "body",
//     start: "top 60%", // trigger point
//     end: "top 30%",
//     scrub: true,
//   },
// });

gsap.to("#screen2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#screen2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

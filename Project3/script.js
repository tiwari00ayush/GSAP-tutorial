const breakTheText = () => {
  const h1 = document.querySelector("#heading h1");
  const heading = document.querySelector("#heading");
  const h1Text = h1.innerText;

  const splittedText = h1Text.split("");
  console.log(splittedText);

  let clutter = ``;

  splittedText.forEach((x, index) => {
    if (index < splittedText.length / 2) clutter += `<div class="a">${x}</div>`;
    else clutter += `<div class="b">${x}</div>`;
  });

  heading.innerHTML = clutter;
};
breakTheText();
gsap.from("#heading .a", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from("#heading .b", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.5,
  stagger: -0.15,
});
// transform doesn't work on inline elements so make them inline block

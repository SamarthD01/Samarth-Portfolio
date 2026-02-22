new Typed(".typing", {
  strings: ["Data Analyst", "Python Programmer"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
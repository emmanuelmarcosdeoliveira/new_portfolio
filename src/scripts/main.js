function textScroll() {
  const scrollers = document.querySelectorAll(".js-scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".js-scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}
textScroll();

function TextCircle() {
  const myText = document.querySelector(".js-textcircle");
  myText.innerHTML = myText.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
    )
    .join("");
}
TextCircle();

const theme = document.querySelector(".theme");

function ativaTema() {
  document.body.classList.toggle("darkMode");
}

theme.addEventListener("click", ativaTema);

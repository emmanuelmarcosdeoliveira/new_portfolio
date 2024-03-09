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

const janelaModal = document.querySelectorAll(".experience .item .js-modal");
console.log(janelaModal);
const btnModal = document.querySelectorAll(".experience item .btn-corses");
const modalClose = document.querySelectorAll(
  ".experience item .js-modal-close"
);

btnModal.addEventListener("click", () => {
  janelaModal.forEach((item) => {
    item.classList.add("active-modal");
  });
});

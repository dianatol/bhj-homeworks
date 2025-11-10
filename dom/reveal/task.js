
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function initReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  function checkReveal() {
    revealElements.forEach((element) => {
      if (!element.classList.contains('reveal_active') && isElementInViewport(element)) {
        element.classList.add('reveal_active');
      }
    });
  }
  window.addEventListener('scroll', checkReveal);
  checkReveal();
}

document.addEventListener('DOMContentLoaded', initReveal);

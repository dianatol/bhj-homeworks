
function initRotator(rotator) {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let currentIndex = cases.findIndex(caseEl => caseEl.classList.contains('rotator__case_active'));
  if (currentIndex === -1) {
    currentIndex = 0;
    cases[0].classList.add('rotator__case_active');
  }
  
  function switchCase() {
    const current = cases[currentIndex];
    current.classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % cases.length;
    const next = cases[currentIndex];
    next.classList.add('rotator__case_active');
    const speed = parseInt(next.getAttribute('data-speed')) || 1000; 
    setTimeout(switchCase, speed);
  }

  const initialSpeed = parseInt(cases[currentIndex].getAttribute('data-speed')) || 1000;
  setTimeout(switchCase, initialSpeed);
}

function initAllRotators() {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(initRotator);
}
document.addEventListener('DOMContentLoaded', initAllRotators);

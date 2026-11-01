(() => {
  const background = document.querySelector('.anatomy-background');
  const gallery = document.querySelector('.gallery');
  if (!background || !gallery) return;

  const plates = ['dog', 'leonardo', 'cat', 'sheep', 'cow', 'horse'];
  let pending = false;

  function fillBackground() {
    pending = false;
    const step = parseFloat(getComputedStyle(background).getPropertyValue('--anatomy-cycle-step'));
    if (!step) return;
    const count = Math.max(1, Math.ceil(background.getBoundingClientRect().height / step));

    while (background.children.length > count) background.lastElementChild.remove();
    while (background.children.length < count) {
      const index = background.children.length;
      const cycle = document.createElement('div');
      cycle.className = 'anatomy-cycle' + (index % 2 ? ' anatomy-cycle-alternate' : '');
      cycle.style.setProperty('--cycle', index);
      for (const species of plates) {
        const plate = document.createElement('i');
        plate.className = 'plate-' + species;
        cycle.append(plate);
      }
      background.append(cycle);
    }
  }

  function scheduleFill() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(fillBackground);
  }

  fillBackground();
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(scheduleFill);
    observer.observe(gallery);
    observer.observe(background);
  }
  window.addEventListener('resize', scheduleFill, { passive: true });
  window.addEventListener('load', scheduleFill, { once: true });
})();

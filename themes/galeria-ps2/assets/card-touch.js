document.querySelectorAll('.project-cover-link').forEach((card) => {
  let touch = null;
  const clear = () => {
    touch = null;
    card.classList.remove('is-touching');
  };
  card.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'touch') return;
    touch = { id: event.pointerId, x: event.clientX, y: event.clientY };
    card.classList.add('is-touching');
  });
  window.addEventListener('pointermove', (event) => {
    if (!touch || event.pointerId !== touch.id) return;
    if (Math.hypot(event.clientX - touch.x, event.clientY - touch.y) > 10) clear();
  }, { passive: true });
  window.addEventListener('pointerup', clear);
  window.addEventListener('pointercancel', clear);
  window.addEventListener('blur', clear);
  window.addEventListener('pagehide', clear);
});

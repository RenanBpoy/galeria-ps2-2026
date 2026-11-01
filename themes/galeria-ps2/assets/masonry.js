(() => {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  const cards = Array.from(grid.children);
  if (!cards.length) return;
  let pending = false;

  function arrange() {
    pending = false;
    const style = getComputedStyle(grid);
    const columns = Math.max(1, parseInt(style.getPropertyValue('--masonry-columns'), 10) || 1);
    const gap = parseFloat(style.getPropertyValue('--masonry-gap')) || 40;
    const width = (grid.clientWidth - (columns - 1) * gap) / columns;
    if (width <= 0) return;

    grid.style.setProperty('--masonry-width', width + 'px');
    grid.classList.add('masonry-ready');
    const heights = cards.map(card => card.getBoundingClientRect().height);
    const bottoms = Array(columns).fill(0);
    cards.forEach((card, index) => {
      // The first minimum wins, keeping ties aligned to the left.
      const column = bottoms.indexOf(Math.min(...bottoms));
      card.style.setProperty('--masonry-left', column * (width + gap) + 'px');
      card.style.setProperty('--masonry-top', bottoms[column] + 'px');
      bottoms[column] += heights[index] + gap;
    });
    const height = Math.max(...bottoms) - gap + 'px';
    if (grid.style.height !== height) grid.style.height = height;
  }

  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(arrange);
  }

  arrange();
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    observer.observe(grid);
    cards.forEach(card => observer.observe(card));
  }
  grid.querySelectorAll('img').forEach(image => {
    image.addEventListener('load', schedule);
    image.addEventListener('error', schedule);
  });
  window.addEventListener('resize', schedule, { passive: true });
  if (document.fonts) document.fonts.ready.then(schedule);
})();

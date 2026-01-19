  const container = document.getElementById('infinite');
  const speed = 0.5;

  function autoplay() {
    container.scrollLeft += speed;

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    }

    requestAnimationFrame(autoplay);
  }

  autoplay();
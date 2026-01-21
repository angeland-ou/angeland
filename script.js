document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('infinite');
  const speed = 0.6;

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
});

  const menu = document.getElementById('nav');
  const burger = document.getElementById('burger');

  function showNav() {
    if (menu && burger) {
        burger.addEventListener("click", (event) => {
            event.preventDefault();
            menu.classList.toggle("open");
        });
    }
  }

  showNav();
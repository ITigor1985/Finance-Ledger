(() => {
  const refs = {
    navigationMenu: document.querySelector('.header__nav'),
    header: document.querySelector('.header'),
  };

  refs.navigationMenu.addEventListener('mouseover', event => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      event.target.classList.add('nav__list-itemLink-current');
    }
  });
  refs.navigationMenu.addEventListener('mouseout', event => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      event.target.classList.remove('nav__list-itemLink-current');
    }
  });

  function handleResize() {
    const { innerWidth: width } = window;
    if (width < 768) {
      return window.addEventListener('scroll', e => {
        let counterScrollMove = pageYOffset;
        let pixels = 140;
        if (counterScrollMove > pixels) {
          refs.header.classList.add('opacity');
        } else {
          refs.header.classList.remove('opacity');
        }
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize);
      });
    } else {
      return window.addEventListener('scroll', e => {
        let counterScrollMove = pageYOffset;
        let pixels = 90;
        if (counterScrollMove > pixels) {
          refs.header.classList.add('opacity');
        } else {
          refs.header.classList.remove('opacity');
        }
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize);
      });
    }
  }

  window.addEventListener('resize', handleResize) ||
    window.addEventListener('scroll', handleResize);
})();

(() => {
  const refs = {
    gallery: document.querySelector('.cases__container-gallery'),
  };

  refs.gallery.addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      e.preventDefault();
    }
  });
})();

(() => {
  const refs = {
    links: document.querySelectorAll('a[href="#"]'),
  };

  refs.links.forEach(link =>
    link.addEventListener('click', e => {
      if (e.currentTarget.nodeName === 'A') {
        e.preventDefault();
      }
    }),
  );
})();

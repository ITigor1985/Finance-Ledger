(() => {
  const form = document.querySelector('form');
  const errorMessage = document.querySelector('.form__error');

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { login, email },
    } = event.currentTarget;

    if (email.value === '') {
      return (errorMessage.style.opacity = '1');
    } else {
      let formData = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => window.location.replace('/success'))
        .catch(error => alert(error));
      event.currentTarget.reset();
      return (errorMessage.style.opacity = '0');
    }
  }
})();

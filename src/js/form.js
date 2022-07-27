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
      console.log(`Login: ${login.value}, Email: ${email.value}`);
      event.currentTarget.reset();
      return (errorMessage.style.opacity = '0');
    }
  }
})();

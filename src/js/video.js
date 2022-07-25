(() => {
    const refs = {
      openModalVideoBtn: document.querySelector('.feature__button'),
      closeModalVideoBtn: document.querySelector('[data-modal-close-video]'),
      modalVideo: document.querySelector('[data-video]'),
      video: document.querySelector('video')
    };
    
    
    refs.openModalVideoBtn.addEventListener('click', toggleModal);
    refs.closeModalVideoBtn.addEventListener('click', toggleModal);
    refs.closeModalVideoBtn.addEventListener('click', stopVideo);
  
    function toggleModal() {
      refs.modalVideo.classList.toggle('is-shown');
    }

    function stopVideo(){
      refs.video.pause();
      refs.video.currentTime = 0;
 }
  })();
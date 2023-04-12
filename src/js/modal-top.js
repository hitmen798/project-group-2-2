(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-top]'),
      closeModalBtn: document.querySelector('[data-modal-close-top]'),
      modal: document.querySelector('[data-modal-top]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
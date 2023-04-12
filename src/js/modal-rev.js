(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-rev]'),
      closeModalBtn: document.querySelector('[data-modal-close-rev]'),
      modal: document.querySelector('[data-modal-rev]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
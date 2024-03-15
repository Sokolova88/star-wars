// Script work for a modal window
const modalOpen = document.querySelector('.hero__button--js');
const modalClose = document.querySelectorAll('.modal__close-btn--js');
const modalSubmit = document.querySelector('.modal-submit--js');
const modalForm = document.querySelector('.modal-form--js');
const modalSuccess = document.querySelector('.modal-success--js');

const MODAL_HIDDEN_CLASS = 'modal-overlay__hidden';

modalClose.forEach(btn => {
  btn.addEventListener('click', closeModals);
});

modalSubmit.addEventListener('click', closeBackdropClick);
modalSuccess.addEventListener('click', closeBackdropClick);

function closeModals(e) {
  e.preventDefault();

  modalSubmit.classList.add(MODAL_HIDDEN_CLASS);
  modalSuccess.classList.add(MODAL_HIDDEN_CLASS);
  document.body.style.overflow = 'auto';
}

function openSuccessModal() {
  modalSubmit.classList.add(MODAL_HIDDEN_CLASS);
  modalSuccess.classList.remove(MODAL_HIDDEN_CLASS);
  document.body.style.overflow = 'hidden';
}

function sendUserInfo(e) {
  e.preventDefault();
  const formData = new FormData(modalForm);
  modalForm.reset();
  openSuccessModal();

  // fetch('/', {
  //   method: 'POST',
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: new URLSearchParams(formData).toString()
  // }).then(openSuccessModal);
}

modalOpen.addEventListener('click', function () {
  modalSubmit.classList.remove(MODAL_HIDDEN_CLASS);
  document.body.style.overflow = 'hidden';
  modalForm.addEventListener('submit', sendUserInfo);
});

function closeBackdropClick(e) {
  if (e.target.classList.contains('modal-overlay')) {
    closeModals(e);
  }
}

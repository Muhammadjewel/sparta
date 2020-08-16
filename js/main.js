var ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", function (e) {
    cb();
  })
  : cb();
};

// Usage
ready(function() {
  
  // Open/close modal
  var elModalOpenTrigger = document.querySelector('.js-modal-open-trigger');
  var elModal = document.querySelector('.modal');
  var elModalClose = elModal.querySelector('.modal__close');

  var closeModal = function () {
    elModal.classList.remove('modal--open');
  };
  
  var openModal = function () {
    elModal.classList.add('modal--open');
  };

  if (elModalOpenTrigger) {
    elModalOpenTrigger.addEventListener('click', function (evt) {
      openModal();
    });
  }

  if (elModalClose) {
    elModalClose.addEventListener('click', function () {
      closeModal();
    });
  }

  if (elModal) {
    elModal.addEventListener('click', function (evt) {
      if (evt.target.matches('.modal')) {
        closeModal();
      }
    });
  }
  
});
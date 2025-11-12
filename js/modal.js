const modal = () => {
  // Select the modal
  const modal = document.querySelector('.modal');

  // Select the CLOSE button (× icon)
  const closeModalBtn = document.querySelector('.modal__close');

  // Select the EXTERNAL "Заказать" button(s) — you must add a class like "js-open-modal" to them
  // Example: <button class="button js-open-modal">Заказать</button>
  const openModalButtons = document.querySelectorAll('.modal__button');

  // ✅ Open modal when clicking any "Заказать" button
  openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent page reload if it's inside a link/form
      modal.style.display = 'flex';
    });
  });

  // ✅ Close modal when clicking the × icon
  closeModalBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // ✅ Close modal when clicking outside the modal content
  modal?.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__inner')) {
      modal.style.display = 'none'; // ← was "flex" before — that was the bug!
    }
  });
}

modal();
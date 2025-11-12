// Выбираем элементы
const modalBtn = document.querySelector(".modal__button");
const orderBtn = document.querySelector(".order-btn"); // кнопка «Заказать»
const modal = document.querySelector(".modal");
const modalInner = modal.querySelector(".modal__inner");

// Создаём крестик через JS
const closeBtn = document.createElement("button");
closeBtn.type = "button";
closeBtn.textContent = "×";
closeBtn.style.position = "absolute";
closeBtn.style.top = "10px";
closeBtn.style.right = "15px";
closeBtn.style.fontSize = "24px";
closeBtn.style.background = "none";
closeBtn.style.border = "none";
closeBtn.style.cursor = "pointer";
closeBtn.style.color = "#000"; // можно изменить под дизайн

// Добавляем крестик внутрь .modal__inner
modalInner.style.position = "relative"; // чтобы абсолютное позиционирование работало
modalInner.appendChild(closeBtn);

// Функция открытия модалки
const openModal = () => {
  modal.style.display = "flex";
};

// Функция закрытия модалки
const closeModal = () => {
  modal.style.display = "";
};

// Обработчики открытия
modalBtn?.addEventListener("click", openModal);
orderBtn?.addEventListener("click", openModal);

// Закрытие по клику на крестик
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // предотвращаем всплытие, если крестик внутри .modal__inner
  closeModal();
});

// Закрытие по клику вне контента модалки
modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner");
  if (!modalContent) {
    closeModal();
  }
});
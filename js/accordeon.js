const accordeon = ()=> {
  const contents = document.querySelectorAll(".program-line__content");

contents.forEach((elem) => {
  const title = elem.querySelector(".program-line__title");
  const descr = elem.querySelector(".program-line__descr");

  title.addEventListener("click", () => {
    // Close all other descriptions
    contents.forEach((item) => {
      const itemDescr = item.querySelector(".program-line__descr");
      if (itemDescr !== descr) {
        itemDescr.classList.remove("active");
      }
    });

    // Toggle the current description
    descr.classList.toggle("active");
  });
});
}
accordeon();

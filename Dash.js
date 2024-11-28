// Add interactivity to highlight active sidebar menu items
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".menu-item")
      .forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

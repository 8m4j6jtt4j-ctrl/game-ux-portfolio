const tabs = document.querySelectorAll(".filter-tab");
const cards = document.querySelectorAll(".work-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    tabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });

    cards.forEach((card) => {
      const categories = card.dataset.category || "";
      const visible = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

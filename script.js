const accordionEl = document.querySelectorAll(".accordion");
const allPanelEl = document.querySelectorAll(".panel");

accordionEl.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const panel = accordion.nextElementSibling;

    function remove() {
      allPanelEl.forEach((allPanel) => {
        allPanel.style.maxHeight = null;
        allPanel.classList.remove("active-panel");
        allPanel.previousElementSibling.classList.remove("active-accordion");
      });
    }

    // remove();

    if (panel.classList.contains("active-panel")) {
      console.log("1");
      panel.classList.remove("active-panel");
      accordion.classList.remove("active-accordion");
      panel.style.maxHeight = null;
    } else {
      remove();
      panel.classList.add("active-panel");
      accordion.classList.add("active-accordion");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

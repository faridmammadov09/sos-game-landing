const languageDropdown = document.querySelector(".language-dropdown");
const dropdownBtn = document.querySelector("#dropdownMenuButton");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
});

dropdownMenu.addEventListener("click", function (e) {
  if (e.target.classList.contains("lang-item")) {
    dropdownBtn.textContent = e.target.textContent;
    for (const item of dropdownMenu.children) {
      item.classList.remove("active");
    }

    e.target.classList.add("active");
    dropdownMenu.classList.toggle("active");
  }
});

var slider = tns({
  container: ".my-slider",
  items: 1,
  gutter: 20,
  controlsContainer: ".gallery-button",
  nextButton: ".gallery-button",
  navContainer: ".gallery-nav",
  responsive: {},
  mouseDrag: true,
  preventScrollOnTouch: "auto",
});

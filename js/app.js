// const langDropdown = document.querySelector(".language-dropdown");

// const dropdownBtn = document.querySelector("#dropdownMenuButton");

// const dropdownMenu = document.querySelector(".dropdown-menu");

// const languages = ["Eng", "Rus", "Fra", "Deu"];

// const upperLangs = languages.map((lang) => {
//   return lang.toUpperCase();
// });

// const defaultLang = upperLangs[0];
// upperLangs.shift();

// dropdownBtn.addEventListener("click", function (e) {
//   dropdownMenu.classList.toggle("active");
// });

// langDropdown.addEventListener("click", function (e) {
//   if (e.target.className === "dropdown-item") {
//     dropdownBtn.innerText = e.target.innerText;
//     dropdownMenu.classList.toggle("active");
//   }
// });

// dropdownBtn.innerText = defaultLang;

// upperLangs.forEach((lang) => {
//   dropdownMenu.innerHTML += `<a class="dropdown-item" href="#">${lang}</a>`;
// });

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

const langDropdown = document.querySelector(".language-dropdown");

const dropdownBtn = document.querySelector("#dropdownMenuButton");

const dropdownMenu = document.querySelector(".dropdown-menu");

const languages = ["Eng", "Rus", "Fra", "Deu"];

const upperLangs = languages.map((lang) => {
  return lang.toUpperCase();
});

const defaultLang = upperLangs[0];
upperLangs.shift();

dropdownBtn.addEventListener("click", function (e) {
  dropdownMenu.classList.toggle("active");
});

langDropdown.addEventListener("click", function (e) {
  if (e.target.className === "dropdown-item") {
    dropdownBtn.innerText = e.target.innerText;
    dropdownMenu.classList.toggle("active");
  }
});

dropdownBtn.innerText = defaultLang;

upperLangs.forEach((lang) => {
  dropdownMenu.innerHTML += `<a class="dropdown-item" href="#">${lang}</a>`;
});

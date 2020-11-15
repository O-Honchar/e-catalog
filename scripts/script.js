// initial variables
let currentLanguage = undefined;

// get array of all DOM elements that must be translated
const allDOMelements = document.querySelectorAll("[translate]");

// temp varibles for text translating
const UA = {
  qwerty: "E-catalog опубліковано на git-hub pages",
  asdfgh: "CSS і JS файли під'єднано",
};

const RU = {
  qwerty: "E-catalog опубликовано на git-hub pages",
  asdfgh: "CSS и JS файлы подсоедененны",
};

const EN = {
  qwerty: "E-catalog is published on git-hub pages",
  asdfgh: "CSS and JS files are connected",
};

const DE = {
  qwerty: "E-katalog wird auf Github-Seiten veröffentlicht",
  asdfgh: "CSS- und JS-Dateien sind verbunden",
};

// check if currentLanguage is in localstorage ang set/get currentLanguage
if (localStorage.getItem(currentLanguage) === null) {
  currentLanguage = "UA";
  localStorage.setItem("currentLanguage", currentLanguage);
} else {
  currentLanguage = localStorage.getItem(currentLanguage);
}

// handleClick to change currentLanguage
const setNewLanguage = (e) => {
  currentLanguage = e.target.id;
  localStorage.setItem("currentLanguage", currentLanguage);
};

// get new text for new language
const setNewText = () => {
  allDOMelements.forEach((element) => {
    switch (currentLanguage) {
      case "UA":
        element.innerText = UA[element.id];
        break;

      case "RU":
        element.innerText = RU[element.id];
        break;

      case "EN":
        element.innerText = EN[element.id];
        break;

      case "DE":
        element.innerText = DE[element.id];
        break;

      default:
        break;
    }
  });
};

// for langButtons querySelector and addEventListeners
const langButtons = document.querySelectorAll("[lang-buttons]");
langButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setNewLanguage(e);
    setNewText();
  });
});

//

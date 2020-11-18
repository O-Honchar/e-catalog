// initial variables
let currentLanguage = undefined;

// get array of all DOM elements that must be translated
const allDOMelements = document.querySelectorAll("[translate]");

// check if currentLanguage is in localstorage ang set/get currentLanguage
if (localStorage.getItem("currentLanguage") === null) {
  currentLanguage = "UA";
  localStorage.setItem("currentLanguage", currentLanguage);
} else {
  currentLanguage = localStorage.getItem("currentLanguage");
}

// handleClick to change currentLanguage
const setNewLanguage = (e) => {
  currentLanguage = e.target.id;
  localStorage.setItem("currentLanguage", currentLanguage);
  return currentLanguage;
};

// set new text for new language
const setNewText = (language) => {
  allDOMelements.forEach((element) => {
    element.innerText = language[element.id];
  });
};

// for langButtons querySelector and addEventListeners
const langButtons = document.querySelectorAll("[lang-buttons]");
langButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    getJSON(setNewLanguage(e));
  });
});

// fetch / get translation json
const getJSON = (language) =>
  fetch(`../translation/${language}.json`)
    .then((response) => response.json())
    .then((data) => setNewText(data))
    .catch((error) => console.error("Error: ", error));

if (currentLanguage !== "UA") {
  getJSON(currentLanguage);
}

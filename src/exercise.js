import { searchForExercises } from "./js_modules/search.js";
import { toggleMenu } from './js_modules/navigation.mjs';
import { addRoutine, renderRoutine } from './js_modules/storage.mjs';

const apiKey = import.meta.env.VITE_API_KEY;

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});

document.querySelector("#exerciseResults").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
        addRoutine(e);
    }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".openModal")) {
    const id = e.target.dataset.modal;
    const selected = document.getElementById(`modal-${id}`);
    selected.classList.remove('closed');
  }
  if (e.target.matches(".close")) {
    const id = e.target.dataset.close;
    const selected = document.getElementById(`modal-${id}`);
    selected.classList.add('closed');
  }
});

function init() {
    renderRoutine();
    toggleMenu();
}

init();
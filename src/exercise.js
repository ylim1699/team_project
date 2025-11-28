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


renderRoutine();
toggleMenu();
import { searchForExercises } from "./js_modules/search.js";
import { toggleMenu } from './js_modules/navigation.mjs';

const apiKey = import.meta.env.VITE_API_KEY;

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});

toggleMenu();
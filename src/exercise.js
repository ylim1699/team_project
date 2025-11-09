import { searchForExercises } from "./js_modules/search.js";
import { apiKey } from "../config.js";    

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});
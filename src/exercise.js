import { searchForExercises } from "./js_modules/search.js";
import { API_KEY } from "../config.example.js";    

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(API_KEY);
});
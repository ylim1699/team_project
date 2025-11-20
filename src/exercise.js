import { searchForExercises } from "./js_modules/search.js";

const apiKey = import.meta.env.VITE_API_KEY;

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});

// import { apiKey } from "../config.js";   
// I published it to netlify and added a environmental variable by importing
// from .env

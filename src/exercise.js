import { searchForExercises } from "./js_modules/search.js";
// import { apiKey } from "../config.js";   
const apiKey = import.meta.env.VITE_API_KEY;

console.log(import.meta.env);
console.log(apiKey);
console.log('VITE_API_KEY:', import.meta.env.VITE_API_KEY);

// I published it to netlify and added a environmental variable by importing
// from .env
// the website takes the apiKey but the local puts apiKey as undefined..


document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});


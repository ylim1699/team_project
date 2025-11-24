import { searchForExercises } from "./js_modules/search.js";
import { toggleMenu } from './js_modules/navigation.mjs';

toggleMenu();

const apiKey = import.meta.env.VITE_API_KEY;

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});

// import { apiKey } from "../config.js";   
// I published it to netlify and added a environmental variable by importing from .env


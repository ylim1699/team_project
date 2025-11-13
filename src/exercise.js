import { searchForExercises } from "./js_modules/search.js";
// import { apiKey } from "../config.js";   
const apiKey = import.meta.env.VITE_API_KEY;
// let apiKey="PB6/7ClJ13JMeHBYWCXnHw==owpF8FRVLkR4l3pV";
console.log(apiKey);
console.log('All env vars:', import.meta.env);
console.log('VITE_API_KEY:', import.meta.env.VITE_API_KEY);


document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchForExercises(apiKey);
});


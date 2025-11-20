import { exerciseResultTemplate } from "./templates.mjs";

function searchForExercises(key) {
    let type = document.getElementById("typeSelector").value;
    let muscle = document.getElementById("muscleSelector").value;
    let difficulty = document.getElementById("difficultySelector").value;

    console.log(`Searching for exercises with Type: ${type}, Muscle: ${muscle}, Difficulty: ${difficulty}`);

    let url = `https://api.api-ninjas.com/v1/exercises?type=${type}&muscle=${muscle}&difficulty=${difficulty}`;
    fetch(url, {
        method: 'GET',
        headers: {'X-Api-Key': key}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const resultsContainer = document.querySelector('#exerciseResults');
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No exercises found matching the criteria.</p>';
            return;
        }
        
       resultsContainer.innerHTML = data.map(exercise => exerciseResultTemplate(exercise)).join('');
        
    }).catch(error => {
        console.error('Error:', error);
    });
}djfkdjf

export { searchForExercises };
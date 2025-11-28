import { exerciseResultTemplate } from "./templates.mjs";

function searchForExercises(key) {
    let type = document.getElementById("typeSelector").value;
    let muscle = document.getElementById("muscleSelector").value;
    let difficulty = document.getElementById("difficultySelector").value;
    let day = document.getElementById("daySelector").value;
    if (!day) {
        alert("please select a day first!");
        return;
    }

    console.log(`Searching for exercises with Type: ${type}, Muscle: ${muscle}, Difficulty: ${difficulty}, Day:${day}`);

    let url = `https://api.api-ninjas.com/v1/exercises?type=${type}&muscle=${muscle}&difficulty=${difficulty}`;
    fetch(url, {
        method: 'GET',
        headers: {'X-Api-Key': key}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        //search results
        const resultsContainer = document.querySelector('#exerciseResults');
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No exercises found matching the criteria.</p>';
            return;
        }
        else {
            data.sort((a, b) => a.name.localeCompare(b.name));
            resultsContainer.innerHTML = data.map(exercise => exerciseResultTemplate(exercise, day)).join('');
        }
        
    }).catch(error => {
        console.error('Error:', error);
    });
}

export { searchForExercises };
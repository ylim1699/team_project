import { exerciseResultTemplate } from "./templates.mjs";
import { addToRoutine } from "./storage.mjs";

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

        //search results
        const resultsContainer = document.querySelector('#exerciseResults');
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No exercises found matching the criteria.</p>';
            return;
        }
        else {
            data.sort((a, b) => a.name.localeCompare(b.name));
            resultsContainer.innerHTML = data.map(exercise => exerciseResultTemplate(exercise)).join('');
        }

        // adding routine
        document.querySelectorAll(".add-btn").forEach(btn => {
            btn.addEventListener("click", ()=> {
                let name = btn.getAttribute("data-name");
                let exercise = data.find(e => e.name === name);

                //checking to see if it adds the right workout
                console.log(`adding routine: ${name}`);

                if (addToRoutine(exercise)) {
                    alert(`${exercise.name} added to routine!`);
                } else {
                    alert(`Already in your routine!`);
                }
            });
        });
        
    }).catch(error => {
        console.error('Error:', error);
    });
}

export { searchForExercises };
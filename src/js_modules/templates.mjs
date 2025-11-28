import { exerciseIcons, exerciseDifficulty } from "./icons.mjs";

function getExerciseIcon(type) {
  const match = exerciseIcons.find(
    icon => icon.name.toLowerCase() === type.toLowerCase()
  );

  return match ? match.link: "";
}

function getExerciseDifficulty(difficulty) {
  const match = exerciseDifficulty.find(
    icon => icon.name.toLowerCase() === difficulty.toLowerCase()
  );

    return match 
    ? { link: match.link, value: match.value } 
    : { link: "", value: null };
}

export function exerciseResultTemplate(exercise, day) {

  const icon = getExerciseIcon(exercise.type);
  const difficulty = getExerciseDifficulty(exercise.difficulty);
     
  return `
    <div class="exercise-card">
      <h3>${exercise.name}</h3>
      <div class="exercise-icon">
      <img src="${difficulty.link}" alt="${exercise.difficulty}">
      <img src="${icon}" alt="${exercise.type}">
      </div>
      <p><strong>Type:</strong> ${exercise.type} </p>
      <p><strong>Muscle:</strong> ${exercise.muscle}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Instructions:</strong> ${exercise.instructions}</p>

      <button class="add-btn" 
        data-name="${exercise.name}" 
        data-day="${day}"
        data-difficulty="${difficulty.link}"
        data-value="${difficulty.value}"
        data-icon="${icon}" 
        data-type="${exercise.type}"               
        >
        ➕ Add to Routine
      </button>
    </div>
  `;
}

export function routineTemplate(exercise, day, index) {
  return`<div class="addedExercise"> 
    <section> 
      <strong>${exercise.name}</strong>
      <img src="${exercise.icon}" alt="${exercise.type}">
      <img src="${exercise.difficulty}"></img>
      </section>
      <button class="delete-btn" data-day="${day}" data-index="${index}">❌</button>
    </div>`;
}




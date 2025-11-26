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

  return match ? match.link: "";
}

export function exerciseResultTemplate(exercise) {
  const icon = getExerciseIcon(exercise.type);
  const difficulty = getExerciseDifficulty(exercise.difficulty);
     
  return `
    <div class="exercise-card">
      <h3>${exercise.name}</h3>
      <div class="exercise-icon">
      <img src="${difficulty}" alt="${exercise.difficulty}">
      <img src="${icon}" alt="${exercise.type}">
      </div>
      <p><strong>Type:</strong> ${exercise.type} </p>
      <p><strong>Muscle:</strong> ${exercise.muscle}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Instructions:</strong> ${exercise.instructions}</p>

      <button class="add-btn" data-name="${exercise.name}">
        ➕ Add to Routine
      </button>
    </div>
  `;
}


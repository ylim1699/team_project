export function exerciseResultTemplate(exercise) {
     return `
    <div class="exercise-card">
      <h3>${exercise.name}</h3>
      <p><strong>Type:</strong> ${exercise.type}</p>
      <p><strong>Muscle:</strong> ${exercise.muscle}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Instructions:</strong> ${exercise.instructions}</p>
    </div>
  `;
}


import { routineTemplate } from "./templates.mjs";

let routine = JSON.parse(localStorage.getItem("routine")) || {};

export function saveRoutine() {
    localStorage.setItem("routine", JSON.stringify(routine));
}

export function renderRoutine() {
    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

    days.forEach(day => {
        const list = document.getElementById(day);
        if (!list) return; // skip if element not found
        list.innerHTML = "";

        let totalValue = 0;

        if (routine[day]) {
            routine[day].forEach((exercise, index) => {
                totalValue += Number(exercise.value)
            
                const li = document.createElement("li");
                li.innerHTML = routineTemplate(exercise, day, index);
                list.appendChild(li);
            });
        }
        
        const summary = document.createElement('p');
        summary.className = 'day-summary';
        summary.textContent = `Total Difficulty: ${totalValue}`;
        list.prepend(summary);
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", removeRoutine);
    });
}

export function addRoutine(e) {
    const exerciseName = e.target.dataset.name;
    const day = e.target.dataset.day;
    const exerciseIcon = e.target.dataset.icon;
    const exerciseDifficulty = e.target.dataset.difficulty;
    const exerciseType = e.target.dataset.type;
    const exerciseValue = e.target.dataset.value;

    if (!routine[day]) routine[day] = [];

    routine[day].push({
        name: exerciseName,
        difficulty: exerciseDifficulty,
        icon: exerciseIcon,
        type: exerciseType,
        value: exerciseValue
    });
    alert(`${exerciseName} added to ${day}`);

    saveRoutine();
    renderRoutine();
}

function removeRoutine(e) {
    const day = e.target.dataset.day;
    const index = e.target.dataset.index;

    routine[day].splice(index, 1);

    saveRoutine();
    renderRoutine();
}

            
const STORAGE_KEY = "savedRoutine";

export function loadRoutine() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveRountine(routine) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(routine));
}

export function addToRoutine(exercise) {
    let routine = loadRoutine();

    if (routine.some(e => e.name === exercise.name)) {
        return false; 
    }

    routine.push(exercise);
    saveRountine(routine);
    return true;
}

export function removeFromRoutine(name) {
    let routine = loadRoutine().filter(e => e.name !== name);
    saveRountine(routine);
}
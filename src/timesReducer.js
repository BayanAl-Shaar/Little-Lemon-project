import { fetchData } from "./api";

export function initializeTimes() {
    const today = new Date();
    return fetchData(today);
}

export function updateTimes(state, action) {
    // Step 2 Instructions: Use the date from the dispatch (action.date)
    if (action.type === "UPDATE_TIMES") {
        return fetchData(new Date(action.date));
    }
    return state;
}
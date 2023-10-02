function prisonAfterNDays(cells: number[], n: number): number[] {
    let N = (n-1) % 14 + 1
    
    let state = cells;
    for (let i = 0 ; i < N; i++) {
        state = computeNextDay(state);
    }
    return state;
};

function computeNextDay(cells: number[]): number[] {
    const len = cells.length;
    const nextState = new Array(len).fill(0);

    for (let i = 1; i < len - 1; i++) {
        nextState[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    }

    return nextState;
}
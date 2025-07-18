export function createBoard(title = "Новая доска") {
    const board = document.createElement("div");
    board.className = "main__workspace--board";
    board.innerHTML = `
        <div class="board__title">
            <h1 class="board__title--headliner">${title}</h1>
            <button class="board__title--settings">...</button>
        </div>
        <p class="board__subtitle">Задач: #</p>
        <div class="board__task-list"></div>
        <button class="button__addtask">+ Добавить задачу</button>
    `;
    return board;
}

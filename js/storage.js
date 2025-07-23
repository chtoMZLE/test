import { createBoard } from './createBoard.js';

export function saveBoards() {
    const boards = Array.from(document.querySelectorAll('.main__workspace--board')).map(board => {
        const title = board.querySelector('.board__title--headliner').textContent;
        const tasks = Array.from(board.querySelectorAll('.task__text')).map(el => el.textContent);
        return { title, tasks };
    });
    localStorage.setItem('taskBoards', JSON.stringify(boards));
}

export function loadBoards() {
    const data = JSON.parse(localStorage.getItem('taskBoards'));
    if (!data) return;
    const workspace = document.querySelector('.main__workspace');

    data.forEach(boardData => {
        const board = createBoard(boardData.title);
        const taskList = board.querySelector('.board__task-list');
        boardData.tasks.forEach(text => {
            const task = document.createElement('div');
            task.classList.add('board__task');
            task.innerHTML = `
                <span class='task__text'>${text}</span>
                <button class='task__delete'>×</button>
            `;
            taskList.appendChild(task);
        });
        const subtitle = board.querySelector('.board__subtitle');
        subtitle.textContent = `Задач: ${boardData.tasks.length}`;
        workspace.appendChild(board);
    });
} 

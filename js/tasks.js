import { saveBoards } from './storage.js';

// Обновление счётчика задач в заголовке доски
function updateTaskCount(board) {
    const taskList = board.querySelector('.board__task-list');
    const subtitle = board.querySelector('.board__subtitle');
    subtitle.textContent = `Задач: ${taskList.children.length}`;
}

// Создание HTML-разметки формы добавления задачи
function createTaskInputForm() {
    const form = document.createElement('div');
    form.classList.add('task__input-wrapper');
    form.innerHTML = `
        <input type='text' class='task__input' placeholder='Введите задачу' />
        <div style='display: flex; gap: 10px;'>
            <button class='task__save'>Сохранить</button>
            <button class='task__cancel'>Отмена</button>
        </div>
    `;
    return form;
}

// Обработчик кнопки "Добавить задачу"
function handleTaskAdd(target) {
    const board = target.closest('.main__workspace--board');
    target.style.display = 'none';
    const form = createTaskInputForm();
    target.after(form);
}

// Создание DOM-элемента задачи
function createTaskElement(text) {
    const task = document.createElement('div');
    task.classList.add('board__task');
    task.innerHTML = `
        <span class='task__text'>${text}</span>
        <button class='task__delete'>×</button>
    `;
    return task;
}

// Обработчик кнопки "Сохранить задачу"
function handleTaskSave(target) {
    const wrapper = target.closest('.task__input-wrapper');
    const input = wrapper.querySelector('.task__input');
    const board = wrapper.closest('.main__workspace--board');
    const taskList = board.querySelector('.board__task-list');
    const addBtn = board.querySelector('.button__addtask');

    const taskText = input.value.trim();
    if (taskText === '' || taskText.length > 100) {
        alert('Введите корректную задачу (1–100 символов)');
        return;
    }

    const task = createTaskElement(taskText);
    taskList.appendChild(task);

    wrapper.remove();
    addBtn.style.display = 'flex';
    updateTaskCount(board);
    saveBoards();
}

// Обработчик кнопки "Отмена"
function handleTaskCancel(target) {
    const wrapper = target.closest('.task__input-wrapper');
    const board = wrapper.closest('.main__workspace--board');
    const addBtn = board.querySelector('.button__addtask');
    wrapper.remove();
    addBtn.style.display = 'flex';
}

// Обработчик кнопки удаления задачи "×"
function handleTaskDelete(target) {
    const task = target.closest('.board__task');
    const board = task.closest('.main__workspace--board');
    task.remove();
    updateTaskCount(board);
    saveBoards();
}


export function initTaskHandlers() {
    const workspace = document.querySelector('.main__workspace');

    workspace.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('button__addtask')) {
            handleTaskAdd(target);
        } else if (target.classList.contains('task__save')) {
            handleTaskSave(target);
        } else if (target.classList.contains('task__cancel')) {
            handleTaskCancel(target);
        } else if (target.classList.contains('task__delete')) {
            handleTaskDelete(target);
        }
    });
}

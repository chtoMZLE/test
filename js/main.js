import { initSidebarToggle } from './sidebar.js';
import { initBoardLogic } from './board.js';
import { initTaskHandlers } from './tasks.js';
import { initBoardMenuHandlers } from './boardMenu.js';

document.addEventListener("DOMContentLoaded", () => {
    initSidebarToggle();
    initBoardLogic();
    initTaskHandlers();
    initBoardMenuHandlers();
});

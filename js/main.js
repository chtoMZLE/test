import { initSidebarToggle } from './sidebar.js';
import { initBoardLogic } from './board.js';
import { initTaskHandlers } from './tasks.js';
import { initBoardMenuHandlers } from './boardMenu.js';
import { loadBoards } from './storage.js';

initSidebarToggle();
initBoardLogic();
initTaskHandlers();
initBoardMenuHandlers();
loadBoards();
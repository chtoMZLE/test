import { createBoard } from './createBoard.js';

export function initBoardLogic() {
    const addBoardBtn = document.querySelector(".main__button--addBoard");
    const workspace = document.querySelector(".main__workspace");

    addBoardBtn.addEventListener("click", () => {
        const board = createBoard("Новая доска");
        workspace.appendChild(board);
    });
}

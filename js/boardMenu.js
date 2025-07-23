export function initBoardMenuHandlers() {
    const workspace = document.querySelector('.main__workspace');

    // Показ меню при нажатии
    workspace.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('board__title--settings')) {
            document.querySelectorAll('.board__menu').forEach(m => m.remove());

            const board = target.closest('.main__workspace--board');

            const menu = document.createElement('div');
            menu.classList.add('board__menu');
            menu.innerHTML = `<button class='board__delete'>Удалить доску</button>`;
            menu.relatedBoard = board;

            const rect = target.getBoundingClientRect();
            menu.style.position = 'absolute';
            menu.style.top = `${rect.bottom + window.scrollY}px`;
            menu.style.left = `${rect.left + window.scrollX}px`;
            menu.style.zIndex = '1000';

            document.body.appendChild(menu);
        }

        if (!target.closest('.board__menu') && !target.classList.contains('board__title--settings')) {
            document.querySelectorAll('.board__menu').forEach(m => m.remove());
        }
    });

    // Удаление доски через меню
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('board__delete')) {
            const menu = target.closest('.board__menu');
            if (menu && menu.relatedBoard) {
                menu.relatedBoard.remove();
            }
            menu.remove();
        }
    });
}
export function initTaskHandlers() {
    const workspace = document.querySelector(".main__workspace");

    workspace.addEventListener("click", (event) => {
        const target = event.target;

        if (target.classList.contains("button__addtask")) {
            const board = target.closest(".main__workspace--board");
            target.style.display = "none";

            const form = document.createElement("div");
            form.classList.add("task__input-wrapper");
            form.innerHTML = `
                <input type="text" class="task__input" placeholder="Введите задачу" />
                <div style="display: flex; gap: 10px;">
                    <button class="task__save">Сохранить</button>
                    <button class="task__cancel">Отмена</button>
                </div>
            `;
            target.after(form);
        }

        if (target.classList.contains("task__save")) {
            const wrapper = target.closest(".task__input-wrapper");
            const input = wrapper.querySelector(".task__input");
            const board = wrapper.closest(".main__workspace--board");
            const taskList = board.querySelector(".board__task-list");
            const addBtn = board.querySelector(".button__addtask");

            const taskText = input.value.trim();
            if (taskText !== "") {
                const task = document.createElement("div");
                task.classList.add("board__task");
                task.textContent = taskText;
                taskList.appendChild(task);
            }

            wrapper.remove();
            addBtn.style.display = "flex";
        }

        if (target.classList.contains("task__cancel")) {
            const wrapper = target.closest(".task__input-wrapper");
            const board = wrapper.closest(".main__workspace--board");
            const addBtn = board.querySelector(".button__addtask");
            wrapper.remove();
            addBtn.style.display = "flex";
        }
    });
}

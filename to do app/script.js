const task = document.querySelector('#task');
const add = document.querySelector('#add');
const tasks = document.querySelector('#tasks');

add.addEventListener('click', function () {
    const taskText = task.value;

    if (taskText.trim() !== '') {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        taskElement.innerHTML =
        `
            <input type="checkbox">
            <span class="task-text">${taskText}</span>
            <div class="task-options">
                <button class="delete-btn">&#x1F5D1;</button>
            </div>
        `;
        tasks.appendChild(taskElement);

        task.value = '';
    }
});

tasks.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        const taskElement = event.target.parentElement;
        taskElement.classList.toggle('completed');
    }
});

tasks.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const taskElement = event.target.parentElement.parentElement;
        taskElement.remove();
    }
});
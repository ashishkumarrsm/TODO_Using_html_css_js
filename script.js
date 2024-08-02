let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
        tasks.push({ task: task, done: false });
        taskInput.value = '';
        showTasks();
    } else {
        alert("Please enter a task");
    }
}

function markDone(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].done = true;
        showTasks();
    } else {
        alert("Invalid operation");
    }
}

function deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        showTasks();
    } else {
        alert("Invalid operation");
    }
}

function showTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((taskObj, index) => {
        const li = document.createElement('li');
        li.className = taskObj.done ? 'done' : '';
        li.innerHTML = `
            ${taskObj.task}
            <div>
                <button onclick="markDone(${index})">Done</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

showTasks();

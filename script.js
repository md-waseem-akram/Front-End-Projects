// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const totalTasks = document.getElementById('total-tasks');

// Initialize task count
let count = 0;

// Add task to list
function addTask() {
	// Get input value
	const inputValue = todoInput.value.trim();

	// If input value is not empty
	if (inputValue !== '') {
		// Create new list item
		const li = document.createElement('li');
		li.innerHTML = `
			<input type="checkbox" id="task-${count}">
			<label for="task-${count}">${inputValue}</label>
			<button class="delete-button">Delete</button>
		`;

		// Add event listener to delete button
		const deleteButton = li.querySelector('.delete-button');
		deleteButton.addEventListener('click', deleteTask);

		// Add list item to list
		todoList.appendChild(li);

		// Increment task count and update total tasks count
		count++;
		totalTasks.innerText = count;

		// Clear input value
		todoInput.value = '';
	}
}

// Delete task from list
function deleteTask(event) {
	// Get list item and remove from list
	const li = event.target.closest('li');
	li.remove();

	// Decrement task count and update total tasks count
	count--;
	totalTasks.innerText = count;
}

// Check/uncheck task
function checkTask(event) {
	// Get list item and checkbox
	const li = event.target.closest('li');
	const checkbox = li.querySelector('input[type="checkbox"]');

	// If checkbox is checked, add 'checked' class to list item, else remove it
	if (checkbox.checked) {
		li.classList.add('checked');
	} else {
		li.classList.remove('checked');
	}
}

// Add event listener to add button
addButton.addEventListener('click', addTask);

// Add event listener to todo list for checking/unchecking tasks
todoList.addEventListener('change', checkTask);

// Sample data to simulate server data
const tasks = [
    { id: '1', title: 'Buy groceries', dueDate: '2024-09-18', notes: 'Include milk and eggs' },
    { id: '2', title: 'Finish homework', dueDate: '2024-09-20', notes: 'Math and Science' }
  ];
  
  // Function to display tasks
  function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = `${task.title} (Due: ${task.dueDate})`;
      taskList.appendChild(listItem);
    });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('dueDate').value;
    const notes = document.getElementById('notes').value;
  
    // Create a new task object
    const newTask = {
      id: (tasks.length + 1).toString(),
      title,
      dueDate,
      notes
    };
  
    // Add the new task to the tasks array
    tasks.push(newTask);
  
    // Display the updated task list
    displayTasks();
  
    // Clear the form fields
    document.getElementById('task-form').reset();
  }
  
  // Function to show the selected section
  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = section.id === sectionId ? 'block' : 'none';
    });
  }
  
  // Initialize the application
  document.addEventListener('DOMContentLoaded', () => {
    // Show the home section by default
    showSection('home');
  
    // Display initial tasks
    displayTasks();
  
    // Handle form submission
    document.getElementById('task-form').addEventListener('submit', handleFormSubmit);
  });
  

const tasksList = document.querySelector(".tasks-list");

const tasks = [
  { id: 1, completed: false, text: "Посмотреть новый урок по JavaScript" },
  { id: 2, completed: false, text: "Выполнить тест после урока" },
  { id: 3, completed: false, text: "Выполнить ДЗ после урока" },
];

tasks.forEach((task) => {
  const taskItem = document.createElement("div");
  taskItem.dataset.taskId = task.id;
  taskItem.className = "task-item";

  const mainContainer = document.createElement("div");
  mainContainer.className = 'task-item__main-container'
  taskItem.append(mainContainer)

  const mainContent = document.createElement('div')
  mainContent.className = 'task-item__main-content'
  mainContainer.append(mainContent)

  const formItem = document.createElement('form')
  formItem.className = 'checkbox-form'
  mainContent.append(formItem)
  
  const inputItem = document.createElement('input')
  inputItem.className = 'checkbox-form__checkbox'
  inputItem.type = "checkbox"
  inputItem.id = `task-${task.id}`
  formItem.append(inputItem)

  const labelItem = document.createElement('label')
  labelItem.htmlFor = `task-${task.id}`
  formItem.append(labelItem)

  const spanItem = document.createElement('span')
  spanItem.className = 'task-item__text'
  spanItem.textContent = task.text
  mainContent.append(spanItem)

  const buttonToDelete = document.createElement('button')
  buttonToDelete.className = 'task-item__delete-button default-button delete-button'
  buttonToDelete.dataset.deleteTaskId = 5
  buttonToDelete.textContent = 'Удалить'
  mainContainer.append(buttonToDelete)
  tasksList.append(taskItem)
})

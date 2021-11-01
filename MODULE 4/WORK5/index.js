const tasksList = document.querySelector(".tasks-list");
const createTaskBlock = document.querySelector(".create-task-block");
const createButton = document.querySelector(".create-task-block__button");
const errorSpan = document.createElement("span");
const modalOverlay = document.querySelector(".modal-overlay");

errorSpan.className = "error-message-block";

const tasks = [
  { id: 1, completed: false, text: "Посмотреть новый урок по JavaScript" },
  { id: 2, completed: false, text: "Выполнить тест после урока" },
  { id: 3, completed: false, text: "Выполнить ДЗ после урока" },
];

function createElement(task) {
  const taskItem = document.createElement("div");
  taskItem.dataset.taskId = task.id;
  taskItem.className = "task-item";

  const mainContainer = document.createElement("div");
  mainContainer.className = "task-item__main-container";
  taskItem.append(mainContainer);

  const mainContent = document.createElement("div");
  mainContent.className = "task-item__main-content";
  mainContainer.append(mainContent);

  const formItem = document.createElement("form");
  formItem.className = "checkbox-form";
  mainContent.append(formItem);

  const inputItem = document.createElement("input");
  inputItem.className = "checkbox-form__checkbox";
  inputItem.type = "checkbox";
  inputItem.id = `task-${task.id}`;
  formItem.append(inputItem);

  const labelItem = document.createElement("label");
  labelItem.htmlFor = `task-${task.id}`;
  formItem.append(labelItem);

  const spanItem = document.createElement("span");
  spanItem.className = "task-item__text";
  spanItem.textContent = task.text;
  mainContent.append(spanItem);

  const buttonToDelete = document.createElement("button");
  buttonToDelete.className =
    "task-item__delete-button default-button delete-button";
  buttonToDelete.dataset.deleteTaskId = 5;
  buttonToDelete.textContent = "Удалить";
  mainContainer.append(buttonToDelete);
  tasksList.prepend(taskItem);
}

tasks.forEach((task) => {
  createElement(task);
});

function isValid(inputValue, tasks) {
  if (inputValue === "") {
    errorSpan.textContent = "Название задачи не должно быть пустым";
    createTaskBlock.append(errorSpan);
    return false;
  }
  let flag = true;
  tasks.forEach((item) => {
    if (item.text == inputValue) {
      errorSpan.textContent = "Задача с таким названием уже существует";
      createTaskBlock.append(errorSpan);
      flag = false;
    }
  });
  return flag;
}
function clearInput(inputForm) {
  inputForm.value = "";
}

createTaskBlock.addEventListener("submit", (event) => {
  event.preventDefault();
  const { target } = event;
  const inputForm = target.taskName;
  const inputValue = inputForm.value;
  let id = tasks.length + 1;
  let isVaidation = isValid(inputValue, tasks);
  if (isVaidation) {
    tasks.push({ id: id, completed: false, text: inputValue });
    createElement({ id: id, completed: false, text: inputValue });
    clearInput(inputForm);
    errorSpan.remove();
  }
});

tasksList.addEventListener("click", (event) => {
  const buttonDel = event.target.closest(".task-item__delete-button");
  if (buttonDel) {
    if (modalOverlay.className.includes("modal-overlay_hidden")) {
      modalOverlay.classList.remove("modal-overlay_hidden");
      const deleteModalButton = modalOverlay.querySelector(
        ".delete-modal__confirm-button"
      );
      deleteModalButton.addEventListener("click", () => {
        let taskItem = event.target.closest(".task-item");
        taskItem.remove();
        modalOverlay.classList.add("modal-overlay_hidden");
      });
      const cancelModalButton = modalOverlay.querySelector(
        ".delete-modal__cancel-button"
      );
      cancelModalButton.addEventListener('click', () => {
        modalOverlay.classList.add("modal-overlay_hidden");
      })
    }
  }
});

const mainNavigation = document.querySelector(".main-navigation");
const navButtons = document.querySelectorAll(".main-navigation__button-item");
const createTaskForm = document.querySelector(".create-task-block");

mainNavigation.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
  const { target } = event;
  target.classList.add("main-navigation__button-item_selected");
});

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const { target } = event;

    navButtons.forEach((b) => {
      b.classList.remove("main-navigation__button-item_selected");
    });
    target.classList.add("main-navigation__button-item_selected");
  });
});

// submit

createTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const inputValue = taskNameInput.value;
});

document.addEventListener("keydown", (event) => {
  const { key } = event;
  const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
  if (taskItemToDelete) {
    const deleteConfirmed = confirm("Вы действительно хотитте удалить задачу");
    if (deleteConfirmed) {
      taskItemToDelete.remove();
    }
  }
});

// mouseover

const createTooltip = (text) => {
  const tooltip = document.createElement("span");
  tooltip.textContent = text;
  tooltip.className = "tooltip";

  return tooltip;
};

document.addEventListener("mouseover", (event) => {
  const { target } = event;
  const isOverDeleteButton = target.className.includes(
    "task-item__delete-button"
  );
  if (isOverDeleteButton) {
    const taskItemHTML = target.closest(".task-item");
    const taskId = taskItemHTML?.dataset.taskId;
    if (taskId) {
      const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}`);
      target.append(tooltipHTML);
    }
  }
});

document.addEventListener("mouseout", (event) => {
  const { target } = event;
  const isOutFormDeleteButton = target.className.includes(
    "task-item__delete-button"
  );
  if (isOutFormDeleteButton) {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  }
});

//contextmenu

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

//change input
const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes("@")) {
    return false;
  }
  return true;
};

const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = createTaskBlock.querySelector(
  ".create-task-block__input"
);

taskNameInput.addEventListener("input", (event) => {
  const { target } = event;
  const { value } = target;
  console.log(value);
  const isValid = checkTaskNameInputOnValidation(value);

  const messageBlockFromDOM = document.querySelector(".error-message-block");

  if (!isValid) {
    const newMessageBlock = document.createElement("span");
    newMessageBlock.className = "error-message-block";
    newMessageBlock.textContent = "Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ @";
    createTaskBlock.append(newMessageBlock);
  } else if (isValid && messageBlockFromDOM) {
    messageBlockFromDOM.remove();
  }
});

// всплытие и погружение

// Делегирование событий
/*
mainNavigation.addEventListener("click", (event) => {
  const isNavButton = event.target.closest(".main-navigation__button-item");
  console.log(isNavButton);
  if (isNavButton) {
    navButtons.forEach((b) => {
      b.classList.remove("main-navigation__button-item_selected");
    });
    event.target.classList.add("main-navigation__button-item_selected");
  }
});
*/

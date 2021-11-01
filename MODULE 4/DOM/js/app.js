/*let mainNavigation = document.querySelector('.main-navigation')

mainNavigation.insertAdjacentHTML('afterend', `<form class="create-user-form">
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя">
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль">
</label>
<button type="submit">
    Подтвердить
</button>
</form>`)

mainNavigation.innerHTML = `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`
*/

let tasksWrapper = document.querySelector('.tasks__wrapper')


let form = document.createElement('form')
form.className = 'create-user-form'

let labelName = document.createElement('label')
labelName.textContent = 'Имя'
let labelPass = document.createElement('label')
labelPass.textContent = 'Пароль'

let inputName = document.createElement('input')
inputName.setAttribute('name', 'userName')
inputName.setAttribute('placeholder', 'Введите ваше имя')

let inputPass = document.createElement('input')
inputPass.type = 'password'
inputPass.tagName = 'password'
inputPass.setAttribute('placeholder', 'Придумайте Пароль')

let button = document.createElement('button')
button.type = 'submit'
button.textContent = 'Подтвердить'


tasksWrapper.append(form)
form.append(labelName)
labelName.append(inputName)
form.append(labelPass)
labelPass.append(inputPass)
form.append(button)

inputName.className ='create-task-block__input'
inputPass.className ='create-task-block__input'
button.className = 'create-task-block__button default-button'
inputName.style.marginBottom = 0 +'px'
inputName.style.width = 30 + '%'
inputPass.style.width = 30 + '%'
form.style.marginTop = 40 +'px'

labelName.className = 'create-task__label'
labelPass.className = 'create-task__label'
console.log('Todo list');

let input = document.getElementById('todo');
let button = document.getElementById('btn');
let todoList = document.getElementById('todoList');
const deleteIcon = document.getElementById('delete-icon');
let inputValue;

input.addEventListener('change', (event) => {
    inputValue = event.target.value;
})

deleteIcon.addEventListener('click', () => {
    const elements = document.getElementsByClassName('listItem');
    for (let element of elements) {
        todoList.removeChild(element);
    }
})

button.addEventListener('click', () => {
    let todo = document.createElement('div');

    let icon = document.createElement('img');
    icon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png');
    icon.id = 'delete';
    icon.classList.add('deleteIcon');

    let textSpan = document.createElement('span');
    textSpan.classList.add('pa-8')
    textSpan.innerText = inputValue;
    textSpan.id = 'text';
    textSpan.classList.add('todoSpan');

    todo.classList.add('listItem');
    todo.append(textSpan, icon);

    todoList.appendChild(todo);
    input.value = '';
})

todoList.addEventListener('click', (event) => {
    if (event.target.id === 'text') {
        event.target.classList.toggle('done');
    } else {
        event.target.parentElement.remove();
    }
})
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
}

// add todo
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim() for removing space after and before the string

    // showing the result in console
    // console.log(todo);

    // showing the result in browser
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todo
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.includes(term);
        })
        .forEach((todo) => {
            todo.classList.add('d-none');
        });

    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.includes(term);
        })
        .forEach((todo) => {
            todo.classList.remove('d-none');
        });
};

// keyup event
search.addEventListener('keyup', (e) => {
    e.preventDefault();
    const term = search.value.trim();
    filterTodos(term);
});

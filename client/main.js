const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.querySelector('.todos');
const allBtn = document.getElementById('All-Button')
const activeBtn = document.getElementById('active-btn')


const addEventListeners = () => {
    const allTodoElements = document.querySelectorAll('li');
     for (let i = 0; i < allTodoElements.length; i++) {
        const li = allTodoElements[i];
        li.addEventListener('click', (e) => {
           const id = e.target.getAttribute('data-id');
           console.log(id)
           completedTodo(id);
        })
     }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
     const todo = input.value;

     let todoObj = {
         todo: todo,
         completed: false,
     };

    axios.post('http://localhost:6575/todo', todoObj )
    .then(res => {
        //  console.log(res.data)
       let newTodoArray = res.data;
       todos.innerHTML = '';
       newTodoArray.forEach((todoItem) => {
            const newTodo = document.createElement('li');
            if (todoItem.completed) {
            newTodo.style.textDecoration = 'line-through'
            }
            newTodo.setAttribute('data-id', todoItem.id)
            newTodo.innerText = todoItem.todo;
            todos.appendChild(newTodo);
       })
       addEventListeners()
       input.value = '';
    //    console.log(todos.innerHTML)
    })
    .catch(err => console.log(err))
});


// newTodo.innerText = '<h1>Hello</h1>'
// newTodo.innerHTML = '<h1>Hello</h1>'

const getTodoList = () =>{
    
    axios.get('http://localhost:6575/todo') 
    .then(res => {   
        todoList = res.data
        console.log('todolist', todoList)
        todos.innerHTML = '';
        todoList.forEach((todoItem) => {
           const todoElement = document.createElement('li');
           if (todoItem.completed) {
            todoElement.style.textDecoration = 'line-through'
            }
           todoElement.setAttribute('data-id', todoItem.id)
        //    console.log('inside loop', todoItem)
           todoElement.innerText = todoItem.todo
            todos.appendChild(todoElement)
        })
        addEventListeners();
    })
    .catch(err => console.log(err))
}

function completedTodo (id)  {
    axios.put(`http://localhost:6575/todo/${id}`)
    .then(res => {   
        todoList = res.data
        console.log('todolist', todoList)
        todos.innerHTML = '';
        todoList.forEach((todoItem) => {
           const todoElement = document.createElement('li');
           if (todoItem.completed) {
            todoElement.style.textDecoration = 'line-through'
            }
           todoElement.setAttribute('data-id', todoItem.id)
        //    console.log('inside loop', todoItem)
           todoElement.innerText = todoItem.todo
            todos.appendChild(todoElement)
        })
        addEventListeners()
    })
    .catch(err => console.log(err))

}



// document.getElementById('All-Button').onclick = function allButton() {
    
//     axios.get('http://localhost:6575/all') 
//     .then(res => {   
//         todoList = res.data
//         console.log('todolist', todoList)
//         todos.innerHTML = '';
//         todoList.forEach((todoItem) => {
//            const todoElement = document.createElement('li');
//            if (todoItem.completed) {
//             todoElement.style.textDecoration = 'line-through'
//             }
//            todoElement.setAttribute('data-id', todoItem.id)
//         //    console.log('inside loop', todoItem)
//            todoElement.innerText = todoItem.todo
//             todos.appendChild(todoElement)
//         })
//         addEventListeners();
//     })
//     .catch(err => console.log(err))
// }

allBtn.addEventListener('click', () => {
    axios.get('http://localhost:6575/all') 
    .then(res => {   
        todoList = res.data
        console.log('todolist', todoList)
        todos.innerHTML = '';
        todoList.forEach((todoItem) => {
           const todoElement = document.createElement('li');
           if (todoItem.completed) {
            todoElement.style.textDecoration = 'line-through'
            }
           todoElement.setAttribute('data-id', todoItem.id)
        //    console.log('inside loop', todoItem)
           todoElement.innerText = todoItem.todo
            todos.appendChild(todoElement)
        })
        addEventListeners();
    })
    .catch(err => console.log(err))
})

activeBtn.addEventListener('click', () => {
    axios.get('http://localhost:6575/active') 
    .then(res => {   
        todoList = res.data
        console.log('todolist', todoList)
        todos.innerHTML = '';
        todoList.forEach((todoItem) => {
            const todoElement = document.createElement('li')
            todoElement.setAttribute('data-id', todoItem.id)
            //    console.log('inside loop', todoItem)
            todoElement.innerText = todoItem.todo
            todos.appendChild(todoElement)
        })
        addEventListeners();
    })
    .catch(err => console.log(err))
})

getTodoList();





const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.querySelector('.todos');



form.addEventListener('submit', (e) => {
    e.preventDefault();
     const todo = input.value;

     let todoObj = {
         todo: todo,
     };

    axios.post('http://localhost:6575/todo', todoObj )
    .then(res => {
        //  console.log(res.data)
       let newTodoArray = res.data;
       todos.innerHTML = '';
       newTodoArray.forEach((todoItem) => {
            const newTodo = document.createElement('li');
            newTodo.innerText = todoItem.todo;
            todos.appendChild(newTodo);
       })
       input.value = '';
    //    console.log(todos.innerHTML)
    })
    .catch(err => console.log(err))
});


// newTodo.innerText = '<h1>Hello</h1>'
// newTodo.innerHTML = '<h1>Hello</h1>'
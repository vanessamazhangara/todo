const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.querySelector('.todos');



form.addEventListener('submit', (e) => {
    e.preventDefault();
     const todo = input.value;

     let todoObj = {
         todo: todo,
     };

    if (todo) {
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        todos.appendChild(todo);
    };

    axios.post('http://localhost:6575/todo', todoObj )
    .then(res => {
        console.log(res.data)
        display(res.data)
    })
    .catch(err => console.log(err))
});
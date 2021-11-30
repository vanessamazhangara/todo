const {v4:uuidv4} = require('uuid')

let todoArray = [

]

module.exports = {

    createTodo: (req, res) => {
        const newTodo = req.body
        newTodo.id = uuidv4();
        todoArray.push(newTodo)
        res.status(200).send(todoArray)
    },

    getTodo: (req, res) => {
        res.status(200).send(todoArray)
    },

    updateTodo: (req, res) => {
        const updateTodo = req.params.id;
        console.log(updateTodo)
        const updatedTodos = todoArray.map((todo) => {
            if (todo.id === updateTodo) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        })
        console.log(updatedTodos)

        todoArray = updatedTodos
        res.status(200).send(todoArray);
    },

    allTodo: (req, res) => {
        res.status(200).send(todoArray)
    },

    activeTodo: (req, res) => {
        let activeArray = todoArray.filter(todoItem => {
            return todoItem.completed === false
        })

        // console.log('this is the active', activeArray)
        res.status(200).send(activeArray);
    },

    completedTodo: (req, res) => {
        let completedArray = todoArray.filter(todoItem => {
            return todoItem.completed === true
        })
        res.status(200).send(completedArray);
    },

   
}
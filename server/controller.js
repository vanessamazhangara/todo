
const todoArray = [

]

module.exports = {
    createTodo: (req, res) => {
        const newTodo = req.body
        todoArray.push(newTodo)
        res.status(200).send(todoArray)
    },

    getTodo: (req, res) => {
        res.status(200).send(todoArray)
    }
}

const todoArray = [

]

module.exports = {
    newTodo: (req, res) => {
        const newTodo = req.body
        todoArray.push(newTodo)
        res.status(200).send(todoArray)
    }
}
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static('client'));
// const {SERVER_PORT} = process.env;
const authCtrl = require("./controller");



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/todo', authCtrl.createTodo);
app.get('/todo', authCtrl.getTodo);
app.get('/all',authCtrl.allTodo);
app.get('/active', authCtrl.activeTodo);
app.get('/completed', authCtrl.completedTodo);
app.put('/todo/:id', authCtrl.updateTodo);



const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => console.log(`server is running on ${port}`))
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const {SERVER_PORT} = process.env;
const authCtrl = require("./controller");



app.use(cors());
app.use(express.json());

app.post('/todo', authCtrl.createTodo);
app.get('/todo', authCtrl.getTodo);
app.get('/all',authCtrl.allTodo);
app.get('/active', authCtrl.activeTodo);
app.put('/todo/:id', authCtrl.updateTodo);


app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
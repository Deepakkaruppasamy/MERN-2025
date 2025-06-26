const express = require('express');
const todorouter=express.Router();
const {getTodo,getTodoById,postTodo,putTodo,deleteTodo}=require('../controllers/todocontroller');


todorouter.get('/get', getTodo);
todorouter.get('/get/:id', getTodoById);

todorouter.post('/post', postTodo);

todorouter.put('/put/:id', putTodo);

todorouter.delete('/delete/:id', deleteTodo);

module.exports=todorouter;
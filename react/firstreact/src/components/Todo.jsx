import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://mern2025-5zh8.onrender.com'

const Todo = () => {
  const [task, setTask] = useState('')
  const [todo, setTodo] = useState([])
  const [editing, setediting] = useState(null)

  const fetchTodo = async () => {
    try {
      const response = await axios.get(`${API}/todo/get`)
      console.log(response.data)
      setTodo(response.data)
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  const handleAddOrEdit = async (e) => {
    e.preventDefault()
    if (editing) {
      await axios.put(`${API}/todo/put/${editing._id}`, { task })
    } else {
      await axios.post(`${API}/todo/post/`, { task })
    }
    setediting(null)
    setTask('')
    fetchTodo()
  }

  const handleDelete = async (id) => {
    await axios.delete(`${API}/todo/delete/${id}`)
    fetchTodo()
  }

  const handleToggleStatus = async (todoItem) => {
    await axios.put(`${API}/todo/put/${todoItem._id}`, {
      status: !todoItem.status
    })
    fetchTodo()
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task"
      />
      <button onClick={handleAddOrEdit}>{editing ? 'Update' : 'Add'}</button>

      <ul>
        {todo.map((todos) => (
          <li key={todos._id} style={{ marginBottom: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '400px'
              }}
            >
              {}
              <span
                onClick={() => handleToggleStatus(todos)}
                style={{
                  cursor: 'pointer',
                  textDecoration: todos.status ? 'line-through' : 'none',
                  flex: 1
                }}
              >
                {todos.task}
              </span>

              {}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => {
                    setediting(todos)
                    setTask(todos.task)
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(todos._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

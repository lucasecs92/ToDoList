import { useState } from 'react'
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm' 

import './global.css' 

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    { 
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false, 
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return (
    <section className="app">
      <h1>Lista de Tarefas</h1>
      <section className='todo-list'>
        {todos.map((todo) => ( 
          <Todo todo={todo} />
        ))}
      </section>
      <TodoForm /> 
    </section>
  )
}

export default App

import { useState } from 'react';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

import './global.css'; 

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

  const addTodo = (text, category) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]

    setTodos(newTodos) // atualiza o estado dos meus Todos com os newTodos
  }

  return (
    <section className="app">
      <h1>Lista de Tarefas</h1>
      <section className='todo-list'>
        {todos.map((todo) => ( 
          <Todo
            key={todo.id} 
            todo={todo} 
          />
        ))}
      </section>
      <TodoForm addTodo={addTodo}/> 
    </section>
  )
}

export default App;

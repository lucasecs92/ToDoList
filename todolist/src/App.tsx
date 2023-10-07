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
// ADD as tarefas
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
  };
// REMOVE as tarefas
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);

    setTodos(filteredTodos)
  }

  return (
    <section className="app">
      <h1>Lista de Tarefas</h1>
      <section className='todo-list'>
        {todos.map((todo) => ( 
          <Todo
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo}
          />
        ))}
      </section>
      <TodoForm addTodo={addTodo}/> 
    </section>
  )
}

export default App;


// [...todos] são todos os todo's

// a função removeTodo é disparado quando clicado no botão de X de remover tarefas, checando o id q eu enviei na função e exclui dos ToDos e tb atualiza o stage principal.
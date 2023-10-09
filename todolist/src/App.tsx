import { useState } from 'react';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { Search } from './components/Search';
import { Filter } from './components/Filter';

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

// Funcionalidade de pesquisa
  const [search, setSearch] = useState("");

// Funcionalidade do filtro
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

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
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }
// COMPLETE as tarefas
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  }

  return (
    <section className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter}/>
      <section className='todo-list'>
        {todos
          .filter((todo) => 
            filter === "All"   // se está 'All' 
              ? true  // vai ser true, ñ vai filtrar nada
              : filter === "Completed" // depois é feito outra checagem, verificando se o filtro é uma tarefa completa 
              ? todo.isCompleted // se for, retorno as tarefas q tem o "isCompleted" como true
              : !todo.isCompleted // se não, retorna para o filtro 'incomplete' com as tarefas q estão incompletas 
          )
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          ) 
          .map((todo) => 
      ( 
            <Todo
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))      
        }
      </section>
      <TodoForm addTodo={addTodo} /> 
    </section>
  )
}

export default App;


// [...todos] são todos os todo's

// todo.id !== id ? todo : null  // se o todo.id for diferente do id informado ele vai ser retornado, colocado de novo na lista de filtro e o que estiver com o id igual, vai retornar como nulo, ñ existe mais.  
// a função removeTodo é disparado quando clicado no botão de X de remover tarefas, checando o id que eu enviei na função e exclui dos ToDos e tb atualiza o state principal.

// newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo // utilizando o map p modificar o array original, nessa linha vou validar se o 'id' for igual ao 'id' vou mudar o 'isCompleted' para o contrário, pq se clicar de novo tenho a possibilidade de descompletar a tarefa, e se não for o 'id' igual retorna o 'todo' normal completo

// .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())) // esse filter vai passar e filtrar por todos os todos que contenham o texto digitado no input de pesquisa
// Simplificando, é uma busca em tempo real.. Se o state de busca contiver os caracteres igual de alguma tarefa da lista, ele vai retornar esse todo p mim.
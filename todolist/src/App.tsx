import { useEffect, useState } from 'react';
import { Todo } from './components/Todo';
import { CreateTask } from './components/CreateTask';
import { Search } from './components/Search';
import { Filter } from './components/Filter';

import styles from './App.module.css'
import './global.css'; 

// const toDoList = [
//   {
//     id: 1,
//     text: "Criar funcionalidade X no sistema",
//     category: "Trabalho",
//     isCompleted: false,
//   },
//   { 
//     id: 2,
//     text: "Ir para a academia",
//     category: "Pessoal",
//     isCompleted: false, 
//   },
//   {
//     id: 3,
//     text: "Estudar React",
//     category: "Estudos",
//     isCompleted: false,
//   },
// ];

export interface TodoType {
   id: number;
   text: string;
   category: string; 
   isCompleted: boolean;
}

// const dataLocalStorage = JSON.parse(localStorage.getItem('TAREFAS'));
const item = localStorage.getItem('TAREFAS');
const dataLocalStorage = JSON.parse(item !== null ? item : '{}');

export function App() {

  const [todos, setTodos] = useState(dataLocalStorage);

// Funcionalidade de pesquisa
  const [search, setSearch] = useState("");

// Funcionalidade do filtro
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

// Add as tarefas
  const addTodo = (text: string, category: string) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
  ];

  setTodos(newTodos) // atualiza o estado dos meus Todos com os newTodos
  };
  
// REMOVE as tarefas
  const removeTodo = (id:TodoType['id']) => {
    const filteredTodos = todos.filter((todo:TodoType) => todo.id !== id);

    setTodos(filteredTodos);
  };

// EDITAR as tarefas
  const editTodo = (id: number, newText: string) => {
    const newTodos = todos.map((todo:TodoType) =>
      todo.id === id ? {...todo, text: newText} : todo
    );

    setTodos(newTodos);
  };

// COMPLETE as tarefas
  const completeTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    
    setTodos(newTodos);
  };

// Salvando os dados no localStorage
  useEffect(() => {
      localStorage.setItem('TAREFAS', JSON.stringify(todos));
  }, [todos] );

  return (
    <section className={styles.app}>
      <h1>Lista de Tarefas</h1>     
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <section className={styles.todoList}>
        {todos
          .filter((todo:TodoType) => 
            filter === "All" 
              ? true 
              : filter === "Completed" 
              ? todo.isCompleted 
              : !todo.isCompleted
          )
          .filter((todo:TodoType) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          ) 
          .sort((a:TodoType, b:TodoType) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          ) 
          .map((todo:TodoType) => ( 
            <Todo
              key={todo.id} 
              todo={todo} 
              onRemoveTodo={removeTodo}
              onCompleteTodo={completeTodo}
              onEditTodo={editTodo}
            />
          ))      
        }
      </section>
      <CreateTask addTodo={addTodo} /> 
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

// localStorage.setItem('TAREFAS', JSON.stringify(todos)) // vou pegar os itens do array 'todos' em forma de JSON e vou salvar no 'localStorage' usando uma 'key' chamada 'TAREFAS'.

// filter === "All"   // se está 'All' 
// ? true  // vai ser true, ñ vai filtrar nada
// : filter === "Completed" // depois é feito outra checagem, verificando se o filtro é uma tarefa completa 
// ? todo.isCompleted // se for, retorno as tarefas completas que é o "isCompleted" como true
// : !todo.isCompleted // se não, retorna para o filtro 'incomplete' com as tarefas q estão incompletas 

// const dataLocalStorage = JSON.parse(item !== null ? item : '{}'); // Se localStorage.getItem('TAREFAS') retornar null, '{}' (uma string representando um objeto JSON vazio) será usado como o argumento para JSON.parse().

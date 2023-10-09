// import styles from './Todo.module.css';

export function Todo({ todo, removeTodo, completeTodo }) {
    return (
        <section 
            className='todo' 
            style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <section className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </section>
            <section className="btn">
                <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </section>
        </section>
    )
}

// style={{textDecoration: todo.isCompleted ? "line-through" : "" // vai alterar a propriedade 'textDecoration' baseado no 'todo.isCompleted' se estiver completado 'true' vai dar o valor de 'line-through' p essa propriedade, para deixar riscado a tarefa completada ou ele não deixa nada (valor vazio "").   
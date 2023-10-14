import styles from './Todo.module.css';
import { TodoType } from '../App' 

interface TodoProps {
    todo: TodoType;
    // removeTodo: RemoveType;
    // completeTodo: CompleteType;
    onRemoveTodo: (id: TodoType['id']) => void;
    onCompleteTodo: (id: TodoType['id']) => void;
}

export function Todo({ todo, onRemoveTodo, onCompleteTodo }:TodoProps) {
    return (
        <section 
            className={styles.todo} 
            style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <section className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </section>
            <section className="btn">
                <button className={styles.complete} onClick={() => onCompleteTodo(todo.id)}>Completar</button>
                <button className={styles.remove} onClick={() => onRemoveTodo(todo.id)}>x</button>
            </section>
        </section>
    )
}   

// style={{textDecoration: todo.isCompleted ? "line-through" : "" // vai alterar a propriedade 'textDecoration' baseado no 'todo.isCompleted' se estiver completado 'true' vai dar o valor de 'line-through' p essa propriedade, para deixar riscado a tarefa completada ou ele não deixa nada (valor vazio "").   
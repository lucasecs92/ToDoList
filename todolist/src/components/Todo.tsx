import styles from './Todo.module.css';

export function Todo({ todo }) {
    return (
        <section className='todo'>
            <section className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </section>
            <section className="btn">
                <button className='complete'>Completar</button>
                <button className='remove'>x</button>
            </section>
          </section>
    )
}


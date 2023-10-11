import styles from './Filter.module.css';

export function Filter({ filter, setFilter, setSort }) {
    return (
        <section className={styles.filter}>
            <h2>Filtrar:</h2>
            <section className={styles.filterOptions}>
                <section>
                    <p>Status:</p>
                    <select className={styles.filterSelect} value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </section>
                <section className={styles.filterOrder}>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </section>
            </section>
        </section>
    )
}
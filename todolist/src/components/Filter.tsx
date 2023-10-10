export function Filter({ filter, setFilter, setSort }) {
    return (
        <section className="filter">
            <h2>Filtrar:</h2>
            <section className="filter-options">
                <section>
                    <p>Status:</p>
                    <select className="filter-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </section>
                <section className="filter-order">
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </section>
            </section>
        </section>
    )
}
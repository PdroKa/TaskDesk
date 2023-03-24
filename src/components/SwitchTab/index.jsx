import './style.scss'

export function SwitchTab({ tableActive, handleTable }) {


    return (
        <nav>
            <ul className='switch-tab'>
                <li>
                    <button data-switch="Todos" onClick={() => handleTable("table-all")} className={tableActive === "table-all" ? "linkActive" : null}>
                        <strong> Todos os Chamados</strong>
                    </button>
                </li>
                <li>
                    <button data-switch="Abertos" onClick={() => handleTable("table-open")} className={tableActive === "table-open" ? "linkActive" : null}>
                        <strong> Chamados em Aberto</strong>
                    </button>
                </li>
                <li>
                    <button data-switch="Andamento" onClick={() => handleTable("table-pending")} className={tableActive === "table-pending" ? "linkActive" : null}>
                        <strong> Chamados em Andamento</strong>
                    </button>
                </li>
                <li >
                    <button data-switch="Finalizados" onClick={() => handleTable("table-finish")} className={tableActive === "table-finish" ? "linkActive" : null}>
                        <strong>Chamados Finalizados</strong>
                    </button>
                </li>
                <li>
                    <button data-switch="Inativos" onClick={() => handleTable("table-disable")} className={tableActive === "table-disable" ? "linkActive" : null}>
                        <strong>Chamados inativos</strong>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

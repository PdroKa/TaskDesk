import '../style.scss'
import { TableMapUser } from '../TableMapUser'
import filterMaiorMenor from '../../../image/IconsTable/Filtro Seta Maior-Menor.svg'
import filterMenorMaior from '../../../image/IconsTable/FIltro Seta Menor-Maior.svg'
import filterSetasNull from '../../../image/IconsTable/Filtro Setas.svg'

export const TablePending = ({ currentItens, handleInfoOpen, ordenarPor, colunaOrdenada, ordem }) => {
    return (

        <>
            <thead>
                <tr>


                    <th onClick={() => ordenarPor('id')}>
                        <span>
                            Ticket
                            {colunaOrdenada === 'id' ?
                                colunaOrdenada === 'id' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'id' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th onClick={() => ordenarPor('name')}>
                        <span>
                            Assunto
                            {colunaOrdenada === 'name' ?
                                colunaOrdenada === 'name' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'name' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th onClick={() => ordenarPor('email')}>
                        <span>
                            Solicitante
                            {colunaOrdenada === 'email' ?
                                colunaOrdenada === 'email' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'email' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>

                    <th onClick={() => ordenarPor('name')}>
                        <span>
                            Responsavel
                            {colunaOrdenada === 'name' ?
                                colunaOrdenada === 'name' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'name' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th onClick={() => ordenarPor('name')}>
                        <span>
                            Prioridade
                            {colunaOrdenada === 'name' ?
                                colunaOrdenada === 'name' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'name' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th onClick={() => ordenarPor('name')}>
                        <span>
                            Desc.
                            {colunaOrdenada === 'name' ?
                                colunaOrdenada === 'name' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'name' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th onClick={() => ordenarPor('name')}>
                        <span>
                            Data Abertura
                            {colunaOrdenada === 'name' ?
                                colunaOrdenada === 'name' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'name' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th onClick={() => ordenarPor('name')}>
                        <span>
                            Status
                            {colunaOrdenada === 'name' ?
                                colunaOrdenada === 'name' && ordem === 'asc' && <img src={filterMenorMaior} alt="▼" /> ||
                                colunaOrdenada === 'name' && ordem === 'desc' && <img src={filterMaiorMenor} alt="▲" />
                                : <img src={filterSetasNull} alt="" />}
                        </span>
                    </th>
                    <th>Info</th>
                </tr>
            </thead>

            <tbody>
                {
                    currentItens.map((user) => <TableMapUser handleInfoOpen={handleInfoOpen} key={user.id} props={user} />)
                }
            </tbody>
        </>

    )
}
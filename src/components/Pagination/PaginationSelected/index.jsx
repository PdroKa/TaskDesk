import './style.scss'
import IconOpenTask from '../../../image/Abrir Chamado.svg'

export function PaginationSelected({ dataAPI, itensPerPage, setItensPerPage }) {
    return (

        <>
            <div className='container-select'>
                <select className='pagination-selected' value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))} >
                    <option value={dataAPI.length}>All</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </>
    )
}
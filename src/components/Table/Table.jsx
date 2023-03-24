import './style.scss'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useState } from 'react'

import { ModalInfoTask } from '../Modal/ModaInfo/MainModalInfoTask'

import { TableAll } from './TableAll'
import { TableOpen } from './TableOpen'
import { TablePending } from './TablePending'
import { TableFinish } from './TableFinish'
import { TableDisable } from './TableDisable'

import { NavPagination } from '../Pagination/NavPagination'
import { PaginationSelected } from '../Pagination/PaginationSelected'
import { ButtonNewTask } from '../ButtonNewTask'
import { SwitchTab } from '../SwitchTab'
import { useEffect } from 'react'

export function TableMain({ data, ordenarPor, ordem, colunaOrdenada }) {
    const [parent, enableAnimations] = useAutoAnimate({ duration: 100 })


    const filterDataPerStats = (stats) => data.filter(ticket => ticket.postId === stats)

    const tipoA = data.filter(ticket => ticket.postId === 1 || ticket.postId === 2 || ticket.postId === 3)
    const tipoB = filterDataPerStats(4)
    const tipoC = filterDataPerStats(5)
    const tipoD = filterDataPerStats(6)
    //_________________________F
    const [stateModal, setStateModal] = useState(false)
    const toogleModal = () => setStateModal(!stateModal)

    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const lastItemIndex = currentPage * itensPerPage;
    const firstItemIndex = lastItemIndex - itensPerPage;

    const sliced = (ticketStats) => ticketStats.slice(firstItemIndex, lastItemIndex)

    const currentPageDataALL = data.slice(firstItemIndex, lastItemIndex)

    const currentPageDataA = tipoA.slice(firstItemIndex, lastItemIndex)
    const currentPageDataB = tipoB.slice(firstItemIndex, lastItemIndex)
    const currentPageDataC = sliced(tipoC)
    const currentPageDataD = sliced(tipoD)


    useEffect(() => {
        setCurrentPage(1)
    }, [itensPerPage])

    const [tableActive, setTableActive] = useState('table-all')

    const handleTable = (e) => {
        setTableActive(e)
        setCurrentPage(1)
    };

    const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false)
    const handleModalInfo = () => setModalInfoIsOpen(!modalInfoIsOpen)

    const [dataUser, setDataUser] = useState([])

    const handleInfoOpen = (dados) => {
        handleModalInfo()
        setDataUser(dados)
    }

    return (
        <>
            {modalInfoIsOpen === true && <ModalInfoTask data={dataUser} isOpen={handleModalInfo} />}

            <SwitchTab tableActive={tableActive} handleTable={handleTable} />
            <div className="search-table">
                <PaginationSelected
                    itensPerPage={itensPerPage}
                    setItensPerPage={setItensPerPage}
                    dataAPI={data}
                />
                <ButtonNewTask stateModal={stateModal} toogleModal={toogleModal} />
            </div>

            <div className="container-table">
                <table ref={parent} className='table-flex'>

                    {tableActive === "table-all" &&
                        <TableAll ordem={ordem} colunaOrdenada={colunaOrdenada} ordenarPor={ordenarPor} handleInfoOpen={handleInfoOpen} currentItens={currentPageDataALL} />}

                    {tableActive === "table-open" && <TableOpen ordem={ordem} colunaOrdenada={colunaOrdenada} ordenarPor={ordenarPor} handleInfoOpen={handleInfoOpen} currentItens={currentPageDataA} />}

                    {tableActive === "table-pending" && <TablePending ordem={ordem} colunaOrdenada={colunaOrdenada} ordenarPor={ordenarPor} handleInfoOpen={handleInfoOpen} currentItens={currentPageDataB} />}

                    {tableActive === "table-finish" && <TableFinish ordem={ordem} colunaOrdenada={colunaOrdenada} ordenarPor={ordenarPor} handleInfoOpen={handleInfoOpen} currentItens={currentPageDataC} />}

                    {tableActive === "table-disable" && <TableDisable ordem={ordem} colunaOrdenada={colunaOrdenada} ordenarPor={ordenarPor} handleInfoOpen={handleInfoOpen} currentItens={currentPageDataD} />}
                </table>
            </div>
            {tableActive === "table-all" && <NavPagination data={data} itensPerPage={itensPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            {tableActive === "table-open" && <NavPagination data={tipoA} itensPerPage={itensPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            {tableActive === "table-pending" && <NavPagination data={tipoB} itensPerPage={itensPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            {tableActive === "table-finish" && <NavPagination data={tipoC} itensPerPage={itensPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            {tableActive === "table-disable" && <NavPagination data={tipoD} itensPerPage={itensPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </>

    )
}


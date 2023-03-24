import './style.scss'
import { useEffect, useState } from 'react';

import { TableMain } from '../../components/Table/Table'
import { NavHeader } from '../../components/header/index'

import { getData } from '../../services/api'

function HelpDesk() {
    
    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getData()
            setDataAPI(response.data.reverse())
        })()
    }, [])

    //<----------SEARCH----------->
    const [search, setSearch] = useState('')
    const handleSearch = (e) => setSearch(e.target.value)
    const searchLowerCase = search.toLowerCase()

    const filteredData = dataAPI.filter((user) => user.email.toLowerCase().includes(searchLowerCase));

    //<-------------ORDENAR COLUNA--------------------->
    const [colunaOrdenada, setColunaOrdenada] = useState('id');
    const [ordem, setOrdem] = useState('asc');

    const ordenarPor = (coluna) => {
        if (colunaOrdenada === coluna) {
            setOrdem(ordem === 'asc' ? 'desc' : 'asc');
        } else {
            setColunaOrdenada(coluna);
            setOrdem('asc');
        }
        setDataAPI([...dataAPI.sort((a, b) => {
            const isDesc = ordem === 'desc' ? -1 : 1;
            const aFilter = a[colunaOrdenada]
            const bFilter = b[colunaOrdenada]

            if (coluna === 'id') {
                return isDesc * (a[coluna] - b[coluna])
            } else {

                return isDesc * aFilter.localeCompare(bFilter)
            }
        })])
    };


    return (
        <div className='container'>
            <NavHeader value={"Help-Desk"} search={search} handleSearch={handleSearch} />

            <div className='container-content'>

                <TableMain
                    data={filteredData}
                    ordem={ordem}
                    ordenarPor={ordenarPor}
                    colunaOrdenada={colunaOrdenada}
                />
            </div>
        </div>
    )
}

export default HelpDesk;


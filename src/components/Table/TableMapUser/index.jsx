import '../style.scss'

import infoIcon from '../../../image/Info.svg'

import { useState } from 'react'
import { ModalInfoTask } from '../../Modal/ModaInfo/MainModalInfoTask'

export const TableMapUser = ({ finish, props, handleInfoOpen }) => {
    const dataToModal = () => handleInfoOpen(props)
    return (
            <tr>
                <td data-th="ID" className='grid-body'>{props.id}</td>
                <td data-th="Assunto" className='grid-body'>{props.body}</td>
                <td data-th="Solicitante" className='grid-body'>{props.email}</td>
                <td data-th="Reponsavel" className='grid-body'>{props.email}</td>
                <td data-th="Prioridade" className='grid-body'>{props.id}</td>
                <td data-th="Abertura" className='grid-body'>{props.id}</td>
                <td data-th="Detalhes" className='grid-body'>{props.id}</td>
                <td data-th="Status" className='grid-body'>{props.id}</td>
                {finish === "TableFinish" ?
                    <td data-th="Fechamento" className='grid-body'>2080/10</td> : null}
                <td data-th="Info" className='grid-body td-info'>
                    <img onClick={() => dataToModal()} className='info' src={infoIcon} alt="info Icon" />
                </td>
            </tr>
    )
}
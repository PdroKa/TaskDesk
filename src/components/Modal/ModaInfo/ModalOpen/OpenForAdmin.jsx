import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Participante } from "../../participant"
import { SwitchTabDetailsModal } from "../detailSwitchTab"

import anexarIcon from '../../../../image/AnexarDoc.svg'
import linkIcon from '../../../../image/anexarLink.svg'


export const ModalAdminOpen = ({ id = "modalAdminOpen", isOpen, data }) => {

    const [parent, enableAnimation] = useAutoAnimate()

    const { email, name, body } = data

    const [dataTicket, setDataTicket] = useState({ ...data })

    const [editEmail, setEditEmail] = useState(email)
    const [editAssunto, setEditAssunto] = useState('')
    const [editName, setEditName] = useState(name)
    const [editBody, setEditBody] = useState(body)
    const [checkbox, setCheckbox] = useState('Baixo')

    const [participante, setparticipante] = useState('')
    const [participantes, setParticipantes] = useState([])

    const [loading, setLoading] = useState(false)
    function ticketEdited(e) {
        e.preventDefault();
        setLoading(true)
        if (editAssunto, editBody, editEmail
            , editName === '') {
            setLoading(false)
            return
        }

        const postTicket = {
            assunto: editAssunto,
            email: editEmail,
            name: editName,
            body: editBody,
            partipante: participantes
        }
        setDataTicket(postTicket)
        setLoading(false)
    }

    const handleOutSideclick = (e) => {
        if (e.target.id === id) { isOpen() }
    }


    const createParticipante = (e) => {
        e.preventDefault();

        setParticipantes(() => [participante, ...participantes])
    }

    return (
        <>
            <div id={id} onClick={handleOutSideclick} className="container-form">
                <form>
                    <div className="form-header">
                        <h2>Ticket {data.id}#</h2>
                    </div>

                    <SwitchTabDetailsModal />

                    <main className="form-main">
                        <div className="box-user-col">
                            <label htmlFor="problem">Assunto</label>
                            <input disabled value={editEmail} className='input1' type="text" />
                        </div>
                        <div className="box-user-col">
                            <label htmlFor="requester">Solicitante</label>
                            <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} className='input1' type="text" />
                        </div>

                        <div className="box-user-col">
                            <label htmlFor="responsible">Responsavel</label>
                            <input disabled value={editName} className='input1' type="text" />
                        </div>
                        <div className="box-user-row">
                            <div className="box-user-col">
                                <label htmlFor="participant">Participante</label>
                                <input value={participante} onChange={(e) => setparticipante(e.target.value)}
                                    className='input1 participant' type="text"
                                />
                            </div>
                            <button onClick={createParticipante} className='btn-participant'>Adicionar Participante</button>
                        </div>
                        <div ref={parent} className='participantes'>
                            {
                                participantes.map((use, index) => (
                                    !use == "" ?
                                        <Participante key={index} use={use} setParticipantes={setParticipantes} participantes={participantes} /> : null)
                                )
                            }
                        </div>
                        <div className="box-user-col">
                            <label htmlFor="task-priority">Prioridade</label>
                            <div className="box-user-row">
                                <div className='radio-container'>
                                    <label htmlFor="low">
                                        <input checked={checkbox === 'Baixo'} onChange={(e) => setCheckbox(e.target.value)} type="radio" name="task-priority" id="low" value='Baixo' />
                                        <div className="custom-radio">
                                            <span></span>
                                        </div>
                                        <span>Baixo</span>
                                    </label>
                                </div>
                                <div className='radio-container'>
                                    <label htmlFor="Media">
                                        <input checked={checkbox === 'Media'} onChange={(e) => setCheckbox(e.target.value)} type="radio" name="task-priority" id="medium" value="Media" />
                                        <div className="custom-radio">
                                            <span></span>
                                        </div>
                                        <span>Media</span>
                                    </label>
                                </div>
                                <div className='radio-container'>
                                    <label htmlFor="high">
                                        <input checked={checkbox === 'Alta'} onChange={(e) => setCheckbox(e.target.value)} type="radio" name="task-priority" id="high" value="Alta" />
                                        <div className="custom-radio">
                                            <span></span>
                                        </div>
                                        <span>Alta</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box-user-col">
                            <label htmlFor="date">Data Abertura</label>
                            <input value={'2023-03-22'} type="date" name="registerData" id="registerData" />
                        </div>

                        <div className="box-user-col contain-description">
                            <div className='box-user-row'>
                                <label htmlFor="description">Detalhes da Solicitação</label>
                                <label className='box-user-row anexar' htmlFor="anexarFile">
                                    <img src={anexarIcon} alt="anexar Icon" />
                                    <input multiple onChange={(e) => handleEventAnexo(e)} type="file" name="file" id="anexarFile" />
                                </label>
                                <label className='box-user-row anexarUrl' htmlFor="anexarUrl">
                                    <img src={linkIcon} alt="link Icon" />
                                    <input placeholder='Url:' type="url" name="anexarUrl" />
                                </label>
                            </div>
                            <textarea value={editBody} onChange={(e) => setEditBody(e.target.value)} placeholder='Descreva Detalhadamente sua Solicitação' name="description" className="description" cols="5" rows="5"></textarea>

                        </div>
                    </main>

                    <div className="form-footer">
                        <div className='form-cancel'>
                            <button className='cancel'>Cancelar</button>
                        </div>
                        <div className="form-submit">
                            <button onClick={isOpen} className='fechar'>Fechar</button>
                            <button disabled={loading} onClick={ticketEdited} className='pending'>Chamado em Andamento</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
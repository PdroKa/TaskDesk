import { useState } from 'react';
import '../style.scss'
import anexarIcon from '../../../image/AnexarDoc.svg'
import linkIcon from '../../../image/anexarLink.svg'

import { Participante } from '../participant'
import { TaskCreated } from './TaskCreated'

export function ModaNewTask({ toogleModal, id = 'modal' }) {
    const [modaNewTask, setModaNewTask] = useState("modalAdminNewTask")

    const [participante, setparticipante] = useState('')
    const [participantes, setParticipantes] = useState([])

    const handleOutSideclick = (e) => {
        if (e.target.id === id) {
            toogleModal()
        }
    }
    return (
        <>
            {modaNewTask === 'modalAdminNewTask' && <ModalAdminNewTask id="modal" toogleModal={toogleModal} outSideclick={handleOutSideclick} />}

            {modaNewTask === 'modalUserNewTask' && <ModalUserNewTask />}
        </>
    )
}


export const ModalAdminNewTask = ({ id = 'modal', toogleModal, outSideclick }) => {
    const [checkbox, setCheckbox] = useState('')

    const [ticketCreated, setTicketCreated] = useState(false)

    const [dataTicket, setDataTicket] = useState([])

    const [assunto, setAssunto] = useState('')
    const [email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Body, setBody] = useState('')
    const [priority, setPriority] = useState('')

    const [participante, setparticipante] = useState('')
    const [participantes, setParticipantes] = useState([])

    const createParticipante = (e) => {
        e.preventDefault();

        setParticipantes(() => [participante, ...participantes])
    }

    function createTicket(e) {
        e.preventDefault();

        const postTicket = {
            assunto: assunto,
            email: email,
            name: Name,
            body: Body,
            prioridade: priority,
            partipante: participantes
        }
        setDataTicket(postTicket)
        setTicketCreated(true)
    }
    
    return (
        <>
            <div id={id} onClick={outSideclick} className="container-form">
                {ticketCreated === true ? <TaskCreated /> :
                    <form onSubmit={createTicket}>
                        <div className="form-header">
                            <h1>Novo chamado</h1>
                        </div>
                        <main className="form-main">
                            <div className="box-user-col">
                                <label htmlFor="problem">Assunto</label>
                                <input required className='input1' type="text" />
                            </div>
                            <div className="box-user-col">
                                <label htmlFor="requester">Solicitante</label>
                                <input required className='input1' type="text" />
                            </div>
                            <div className="box-user-col">
                                <label htmlFor="responsible">Responsavel</label>
                                <input className='input1' type="text" />
                            </div>
                            <div className="box-user-row">
                                <div className="box-user-col">
                                    <label htmlFor="participant">Participante</label>
                                    <input value={participante} onChange={(e) => setparticipante(e.target.value)} className='input1 participant' type="text" />
                                </div>
                                <button onClick={createParticipante} className='btn-participant'>Adicionar Participante</button>
                            </div>
                            <div className='participantes'>
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
                                            <input onChange={(e) => setCheckbox(e.target.value)} type="radio" name="task-priority" id="low" value='Baixo' />
                                            <div className="custom-radio">
                                                <span></span>
                                            </div>
                                            <span>Baixo</span>
                                        </label>
                                    </div>
                                    <div className='radio-container'>
                                        <label htmlFor="medium">
                                            <input onChange={(e) => setCheckbox(e.target.value)} type="radio" name="task-priority" id='medium' value="Media" />
                                            <div className="custom-radio">
                                                <span></span>
                                            </div>
                                            <span>Media</span>
                                        </label>
                                    </div>
                                    <div className='radio-container'>
                                        <label htmlFor="high">
                                            <input onChange={(e) => setCheckbox(e.target.value)} type="radio" name="task-priority" id='high' value="Alta" />
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
                                <input type="date" name="registerData" id="registerData" />
                            </div>

                            <div className="box-user-col">
                                <div className='box-user-row'>
                                    <label htmlFor="description">Detalhes da Solicitação</label>
                                    <label className='box-user-row anexar' htmlFor="anexarFile">
                                        <img src={anexarIcon} alt="anexar Icon" />
                                        <input multiple onChange={(e) => handleEventAnexo(e)} type="file" name="file" id="anexarFile" />
                                    </label>
                                    <label className='box-user-row anexarUrl' htmlFor="anexarUrl">
                                        <img src={linkIcon} alt="link Icon" />
                                        <input placeholder=' Url:' type="url" name="anexarUrl" className='anexarUrl' />
                                    </label>
                                </div>
                                <textarea placeholder='Descreva Detalhadamente sua Solicitação' name="description" className="description" cols="5" rows="3"></textarea>

                            </div>
                        </main>

                        <div className="form-footer">
                            <div className='form-cancel'>
                                <button disabled className='cancel'>Cancelar</button>
                            </div>
                            <div className="form-submit">
                                <button onClick={toogleModal} className='fechar'>Fechar</button>
                                <button className='create'>Criar</button>
                            </div>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export const ModalUserNewTask = () => {
    return (
        <>
            <div className="container-form">
                <form>
                    <div className="form-header">
                        <h1>Novo chamado</h1>
                    </div>
                    <main className="form-main">
                        <div className="box-user-col">
                            <label htmlFor="problem">Assunto</label>
                            <input required className='input1' type="text" id='problem' />
                        </div>
                        <div className="box-user-col">
                            <label htmlFor="requester">Solicitante</label>
                            <input required className='input1' type="text" id='requester' />
                        </div>
                        <div className="box-user-col">
                            <label htmlFor="participant">Participante</label>
                            <input className='input1' type="text" id='participant' />
                        </div>
                        <div className="box-user-col">
                            <label htmlFor="task-priority">Prioridade</label>
                            <div className="box-user-row">
                                <div className='radio-container'>
                                    <label htmlFor="low">
                                        <input type="radio" name="task-priority" id="low" value='Baixo' />
                                        <div className="custom-radio">
                                            <span></span>
                                        </div>
                                        <span>Baixo</span>
                                    </label>
                                </div>
                                <div className='radio-container'>
                                    <label htmlFor="medium">
                                        <input type="radio" name="task-priority" id='medium' value="Media" />
                                        <div className="custom-radio">
                                            <span></span>
                                        </div>
                                        <span>Media</span>
                                    </label>
                                </div>
                                <div className='radio-container'>
                                    <label htmlFor="high">
                                        <input type="radio" name="task-priority" id='high' value="Alta" />
                                        <div class="custom-radio">
                                            <span></span>
                                        </div>
                                        <span>Alta</span>
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="box-user-col">
                            <label htmlFor="description">Detalhes da Solicitação</label>
                            <textarea placeholder='Descreva Detalhadamente sua Solicitação' name="description" id="description" cols="5" rows="3"></textarea>
                        </div>
                    </main>

                    <div className="form-footer">
                        <div className="form-submit">
                            <button id='fechar'>Fechar</button>
                            <button id='create'>Criar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

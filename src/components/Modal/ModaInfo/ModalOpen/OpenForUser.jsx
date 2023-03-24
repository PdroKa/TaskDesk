
export const ModalUserOpen = ({ id = "ModalUserOpen", isOpen, data }) => {
    const [parent, enableAnimation] = useAutoAnimate()

    const { email, name, body } = data

    const [dataTicket, setDataTicket] = useState({ ...data })

    const [editEmail, setEditEmail] = useState(email)
    const [editAssunto, setEditAssunto] = useState('')
    const [editName, setEditName] = useState(name)
    const [editBody, setEditBody] = useState(body)

    const [participante, setparticipante] = useState('')
    const [participantes, setParticipantes] = useState([])

    const [loading, setLoading] = useState(false)

    function ticketFinish(e) {
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
                <form onSubmit={ticketFinish}>
                    <div className="form-header">
                        <h2>Ticket {data.id}#</h2>
                    </div>


                    <SwitchTabDetailsModal />

                    <main className="form-main">
                        <div className="box-user-col">
                            <label>Assunto</label>
                            <input disabled value={editEmail} className='input1' type="text" />
                        </div>
                        <div className="box-user-col">
                            <label>Solicitante</label>
                            <input disabled value={editEmail} className='input1' type="text" />
                        </div>

                        <div className="box-user-col">
                            <label>Responsavel</label>
                            <input disabled value={editName} className='input1' type="text" />
                        </div>
                        <div className="box-user-row">
                            <div className="box-user-col">
                                <label>Participante</label>
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
                            <label>Prioridade</label>
                            <label>{data.postId === 1 ? "Baixo" : "Pendente"}</label>
                        </div>

                        <div className="box-user-col">
                            <label htmlFor="date">Data Abertura</label>
                            <input disabled type="date" name="registerData" id="registerData" />
                        </div>

                        <div className="box-user-col contain-description">
                            <div className='box-user-row'>
                                <label htmlFor="description">Detalhes da Solicitação</label>
                                <label className='box-user-row anexar' htmlFor="anexarFile">
                                    <img src={anexarIcon} alt="anexar Icon" />
                                    <input disabled multiple type="file" name="file" id="anexarFile" />
                                </label>
                                <label className='box-user-row anexarUrl' htmlFor="anexarUrl">
                                    <img src={linkIcon} alt="link Icon" />
                                    <input disabled placeholder='Url:' type="url" name="anexarUrl" />
                                </label>
                            </div>
                            <textarea disabled value={editBody} placeholder='Descreva Detalhadamente sua Solicitação' name="description" className="description" cols="5" rows="5"></textarea>

                        </div>
                    </main>

                    <div className="form-footer">
                        <div className='form-cancel'>
                            <button className='cancel'>Cancelar</button>
                        </div>
                        <div className="form-submit">
                            <button onClick={isOpen} className='fechar'>Fechar</button>
                            <button className='pending'>Finalizar Chamado</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
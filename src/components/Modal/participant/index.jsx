import './style.scss'
export const Participante = ({ use, setParticipantes, participantes }) => {

    const excluirParticipante = (e, use) => {
        e.preventDefault();

        setParticipantes(participantes.filter((part) => part !== use))
    }
    return (
        <>
            <div className='container-add-participante' >
                <p>{use}</p>
                <button onClick={(e) => excluirParticipante(e, use)}>X</button>
            </div>
        </>
    )
}
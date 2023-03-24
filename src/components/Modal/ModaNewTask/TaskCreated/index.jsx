import ChamadoCriado from '../../../../image/Done.svg'
import './style.scss'

export const TaskCreated = () => {
    return (
        <>
            <div className="task-isOpen">
                <h3>
                    Chamado Aberto com sucesso
                </h3>
                <img src={ChamadoCriado} alt="task-isOpen" />
            </div>
        </>
    )
}
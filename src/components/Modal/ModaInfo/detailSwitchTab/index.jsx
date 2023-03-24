import './style.scss'

export const SwitchTabDetailsModal = () => {
    return (
        <nav>
            <ul className='container-details-modal'>
                <li><button className='acttive-details-task'>Dados do chamado</button></li>
                <li><button>Comentarios</button></li>
                <li><button>Historico</button></li>
            </ul>
        </nav>

    )
}
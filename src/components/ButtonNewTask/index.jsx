import './style.scss'
import IconOpenTask from '../../image/Abrir Chamado.svg'
import { ModaNewTask } from '../Modal/ModaNewTask'

export const ButtonNewTask = ({ toogleModal,stateModal }) =>
    <>
        {stateModal === true && <ModaNewTask toogleModal={toogleModal} />}
        
        <button onClick={toogleModal} className='btn btn-new-task'>
            <img src={IconOpenTask} alt="+" />
            Abrir Chamado
        </button>
    </>
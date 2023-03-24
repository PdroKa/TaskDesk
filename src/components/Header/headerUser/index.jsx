import { useContext } from 'react'
import { useState } from 'react'

import user from '../../../image/user.svg'
import logout from '../../../image/logout.svg'

import './style.scss'

import { AuthContext } from '../../../contexts/auth'

export const UserLog = ({ id = 'logout' }) => {
    const { loggout } = useContext(AuthContext);

    const [modalLog, setModalLog] = useState(false);
    const toogleModalLogout = () => setModalLog(!modalLog);

    const OutSideclick = (e) => {
        if (e.target.id === id) {
            setModalLog()
        }
    }

    return (
        <div className='block-User'>
            <a onClick={toogleModalLogout}>
                <img className='user' src={user} alt="user" />
            </a>

            <div id={id} onClick={OutSideclick} className={`${modalLog ? "container-logout" : ""}`}>
                <div className={`modal-logout ${modalLog ? "activeLog" : ""}`}>
                    <nav >
                        <ul>
                            <li>
                                <a>
                                    Kauan Reis - Ti
                                </a>
                            </li>
                            <li>
                                <a id={logout} onClick={loggout}>
                                    <img src={logout} alt="Icon Logout" />
                                    Sair
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={logout} alt="Icon" />
                                    Funcao
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
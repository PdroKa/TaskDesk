import './style.scss'
import NfsGroup from '../../image/brand/NFS-GROUP1.svg'
import menuOpen from '../../image/menu_open.svg'
import DashBoardIcon from '../../image/DashBoard.svg'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export function SideBar({ id = "sideBar", isOpen, toogleSideBar }) {
    const navigate = useNavigate();

    const [navegateSideBar, setNavegateSideBar] = useState('')

    const handleNavegateSideBar = (e) => {
        setNavegateSideBar(e.target.id)
        navigate(`/${e.target.id}`)
    }

    const handleOutSideclick = (e) => {
        if (e.target.id === id) {
            toogleSideBar()
        }
    }

    return (
        <div onClick={handleOutSideclick} id={id} className={`${isOpen ? "container-side-bar" : ""}`}>

            <aside className={`side-bar ${isOpen ? "open" : ""}`}>
                <button onClick={toogleSideBar} className={`sidebar-toogle ${isOpen ? "" : "hidden"}`}>
                    <img src={menuOpen} alt="menu Open" />
                </button>
                <div className='menu-logo'>
                    <img src={NfsGroup} alt="NFS GROUP" />
                </div>
                <nav className="menu-itens">
                    <ul>
                        <li>
                            <a id="helpDesk" className={navegateSideBar === "helpDesk" ? 'side-active' : ""} onClick={handleNavegateSideBar}>
                                <img className='side-link' src={DashBoardIcon} alt="Icon HelpDesk" />
                                Help Desk
                            </a>
                        </li>
                        <li>
                            <a id="dashboard" className={navegateSideBar === "dashboard" ? 'side-active' : ""} onClick={handleNavegateSideBar}>
                                <img className='side-link' src={DashBoardIcon} alt="Icon DashBoard" />
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className='side-link' src={DashBoardIcon} alt="Icon DashBoard" />
                                Iten 3
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}
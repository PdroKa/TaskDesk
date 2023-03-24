import './style.scss'
import { useState } from 'react'

import logo from '../../image/brand/Logo NFS.svg'
import menu from '../../image/menu.svg'

import { SideBar } from '../Sidebar/index'
import { SearchData } from './headerSearch'
import { UserLog } from './headerUser'
import { CardTask } from '../CardTasks'
import { SwitchThemes } from './switchThemes'


export function NavHeader({ handleSearch, search, value }) {
    const [isOpen, setIsOpen] = useState(false)
    const toogleSideBar = () => setIsOpen(!isOpen)


    return (
        <header className='header-main'>
            <nav className='nav-header'>
                <div className='header-menu'>
                    <button id='menu' onClick={toogleSideBar}>
                        <img src={menu} alt="Tools" />
                    </button>
                    <a id='logo' href='/helpDesk'>
                        <img src={logo} alt="Logo NFS" />
                    </a>
                </div>

                <div className="media700">
                    <p>Bem-vindo Kauan</p>
                    <h3>{value}</h3>
                </div>

                <div className="header-user">
                    <SearchData handleSearch={handleSearch} search={search} />
                    <SwitchThemes />
                    <UserLog />
                </div>
            </nav>

            <div className='congratulation-padrao'>
                <p>Bem-vindo Kauan</p>
                <h1>{value}</h1>
            </div>
            <CardTask />
            <SideBar isOpen={isOpen} toogleSideBar={toogleSideBar} />
        </header>
    )
}

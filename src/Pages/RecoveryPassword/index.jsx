import './style.scss'

import logo from '../../image/brand/Logo NFS.svg'
import NfsEscrita from '../../image/brand/NFS-ESCRITO.svg'
import { useState } from 'react'


export default function RecoveryPassword() {
    
    return (
        <div className='login-page'>
            <div className="login-box">
                <img className='logo' src={logo} alt="Logo" />
                <h3>Esqueci minha senha</h3>
                <form>
                    <div className="user-box">
                        <input
                            type="text"
                            autoFocus
                            required
                            id="email"
                        />
                        <label>Email</label>
                    </div>

                    <div className='user-submit'>
                        <button className='button'>
                            Recuperar senha
                        </button>
                    </div>

                    <div className="login-footer">
                        <img className='logo-group' src={NfsEscrita} alt="LOGO GROUP" />
                        <a className='link1' href="/">Acessar sua conta </a>
                    </div>
                </form>

            </div>
        </div>
    )
}